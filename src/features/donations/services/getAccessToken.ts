import axios from "axios"

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENTID
const PAYPAL_CLIENT_SECRET = process.env.PAYPAL_CLIENT_SECRET
const PAYPAL_API = process.env.PAYPAL_API || 'https://api.sandbox.paypal.com'

// gera o token paypal que o backend precisa enviar no headers das requisições para as endpoints do paypal
export const getAccessToken = async ():Promise<string> => {
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