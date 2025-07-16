import axios from "axios";
import { PayPalButtonsComponentProps, ReactPayPalScriptOptions } from '@paypal/react-paypal-js'

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENTID

const APPURL = process.env.NEXT_PUBLIC_APPURL

export const usePaypal = () => {
  const createOrder  = (value: number) => {
    return async () => {
      try {
        const req = await axios.post(`${APPURL}/api/paypal/create-order`, { value })

        if (req?.data.id) {
          return req.data.id
        } else {
          const errorDetail = req.data.orderData?.details[0]
          const errorMessage = errorDetail
            ? `${errorDetail.issue} ${errorDetail.description} (${req.data.orderData.debug_id})`
            : "Unexpected error occurred, please try again.";

          throw new Error(errorMessage)
        }
      } catch (error) {

        throw error
      }
    }

  }

  const captureOrder: PayPalButtonsComponentProps["onApprove"] = async (data) => {
    const req = await axios.post(`${APPURL}/api/paypal/capture-order`,{orderId: data.orderID,})
    const details = req.data.details

    alert(`Transaction completed by ${details.payer.name.given_name}`);
  }
  
  const options: ReactPayPalScriptOptions = {
    clientId: PAYPAL_CLIENT_ID!,
    currency: 'BRL',
    disableFunding: 'card'
  }

  return {
    options,
    createOrder, captureOrder
  }
}
