import { paypalHooks } from "@/utils/paypal";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
  const {value} = await request.json()
  const { createOrder } = paypalHooks()

  if(!value) return NextResponse.json({message: 'Valor ausente'}, {status: 500})

  try {
    const order = await createOrder(value)

    return NextResponse.json(order)
  } catch (error: any) {
    console.error('Error in create-order route:', error.response?.data || error.message)
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    )
  }

  
}