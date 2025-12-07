import axios from "axios";

const APPURL = process.env.NEXT_PUBLIC_APPURL;
const PAYPAL_API = process.env.PAYPAL_API || 'https://api.sandbox.paypal.com';
const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENTID;
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET;

interface PayPalOrder {
  id: string;
  status: string;
  links: Array<{
    href: string;
    rel: string;
    method: string;
  }>;
}

export const apiPaypal = () => {
  const request = async (method: 'post' | 'get', url: string, data?: any) => {
    const token = await getAccessToken();
    return axios({
      method,
      url: `${PAYPAL_API}${url}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data
    }).then(res => res.data);
  };

  const getAccessToken = async (): Promise<string> => {
    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString('base64');
    const res = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, 'grant_type=client_credentials', {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return res.data.access_token;
  };

  const createOrder = (amount: string): Promise<PayPalOrder> => {
    return request('post', '/v2/checkout/orders', {
      intent: 'CAPTURE',
      purchase_units: [{ amount: { currency_code: 'BRL', value: amount } }],
      application_context: {
        return_url: `${APPURL}/quero-doar`,
        cancel_url: `${APPURL}/quero-doar`,
        shipping_preference: 'NO_SHIPPING'
      }
    });
  };

  const captureOrder = (orderId: string) => request('post', `/v2/checkout/orders/${orderId}/capture`);

  return { createOrder, captureOrder };
};

