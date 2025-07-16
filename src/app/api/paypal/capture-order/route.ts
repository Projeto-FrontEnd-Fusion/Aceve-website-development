import { paypalHooks } from "@/utils/paypal";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
  const {orderId} = await request.json()
  const { captureOrder } = paypalHooks()


  try {
    const capture = await captureOrder(orderId)
    return NextResponse.json(capture)
  } catch (error: any) {
    console.error('Error in create-order route:', error.response?.data || error.message)
    return NextResponse.json(
      { error: 'Failed to capture order' },
      { status: 500 }
    )
  }

  
}