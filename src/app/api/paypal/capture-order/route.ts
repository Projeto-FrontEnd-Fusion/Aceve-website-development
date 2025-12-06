import { apiPaypal } from "@/features/api/paypal";
import { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const { orderId } = await request.json()
  const { captureOrder } = apiPaypal()

  try {
    const capture = await captureOrder(orderId)
    return NextResponse.json(capture)
  } catch (error) {
    const message = isAxiosError(error)
      ? error.response?.data || error.message
      : error instanceof Error
        ? error.message
        : 'Unknown error';
    console.error('Erro ao tentar criar order:', message)
    return NextResponse.json(
      { error: 'Erro ao tentar criar order' },
      { status: 500 }
    )
  }


}
