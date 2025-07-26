import { getAccessToken } from "@/features/donations/services/getAccessToken";
import axios, { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API = process.env.PAYPAL_API || 'https://api.sandbox.paypal.com'

export async function POST(request: NextRequest) {
  const { orderId } = await request.json()

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

  async function captureOrder(orderId: string): Promise<any> {
    const accessToken = await getAccessToken();
    try {
      const response = await axios({
        method: 'post',
        url: `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error capturing order:', error);
      throw error;
    }

  }

}
