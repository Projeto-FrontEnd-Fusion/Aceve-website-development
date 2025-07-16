import { useAccessToken } from "@/hooks/useAccessToken";
import axios, { isAxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

const PAYPAL_API = process.env.PAYPAL_API || 'https://api.sandbox.paypal.com'
const APPURL = process.env.NEXT_PUBLIC_APPURL

interface PayPalOrder {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>
}

export async function POST(request: NextRequest){
  const {value} = await request.json()

  if(!value) return NextResponse.json({message: 'Valor da doação ausente no corpo da requisição'}, {status: 500})

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

  async function createOrder(amount: string): Promise<PayPalOrder> {
    const accessToken = await useAccessToken();

    try {
      const response = await axios({
        method: 'post',
        url: `${PAYPAL_API}/v2/checkout/orders`,
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        data: {
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'BRL',
                value: amount
              }
            }
          ],
          application_context: {
            return_url: `${APPURL}/quero-doar`,
            cancel_url: `${APPURL}/quero-doar`,
            shipping_preference: "NO_SHIPPING"
          }
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }
}

