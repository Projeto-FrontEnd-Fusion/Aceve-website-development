import axios from "axios";

const APPURL = process.env.NEXT_PUBLIC_APPURL
const PAYPAL_API = process.env.PAYPAL_API || 'https://api.sandbox.paypal.com'
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENTID
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET


interface PayPalOrder {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>
}

export const apiPaypal = () => {
  // gera o token paypal que o backend precisa enviar no headers das requisições para as endpoints do paypal
  const getAccessToken = async (): Promise<string> => {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');

    try {
      const response = await axios({
        method: 'post',
        url: `${PAYPAL_API}/v1/oauth2/token`,
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'grant_type=client_credentials'
      });

      return response.data.access_token;
    } catch (error) {
      console.error('Failed to get access token:', error);
      throw error;
    }
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

  async function createOrder(amount: string): Promise<PayPalOrder> {
    const accessToken = await getAccessToken();

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


  return {
    captureOrder,
    createOrder
  }

}
