import { apiPaypal } from "@/features/donations/api/paypal";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { value } = await request.json()


  if (!value) return NextResponse.json({ message: 'Valor da doação ausente no corpo da requisição' }, { status: 500 })
  const { createOrder } = apiPaypal()


  try {
    const order = await createOrder(value)
    return NextResponse.json(order)

  } catch (error) {
    const message = isAxiosError(error)
      ? error.response?.data || error.message
      : error instanceof Error
        ? error.message
        : 'Unknown error';

    console.error('Erro ao tentar criar order:', message)
    return NextResponse.json(
      { error: 'Erro ao tentar criar order:' },
      { status: 500 }
    )
  }

}

