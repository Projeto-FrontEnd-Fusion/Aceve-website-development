'use client'
import { paypalHooks } from '@/utils/paypal'
import { PayPalButtons, PayPalButtonsComponentProps, PayPalScriptProvider } from '@paypal/react-paypal-js'


const APPURL = process.env.NEXT_PUBLIC_APPURL


export const PaypalButton = () => {
  // substituir por variavel global
  const value = 0.5
  const { options, clientCreateOrder, captureOrder } = paypalHooks()

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (data) => {
        // Capture the funds from the transaction.
        const response = await fetch(`${APPURL}/api/paypal/capture-order`, {
            method: "POST",
            body: JSON.stringify({
                orderId: data.orderID,
            }),
        });

        const details = await response.json();

        // Show success message to buyer
        alert(`Transaction completed by ${details.payer.name.given_name}`);
    };


  return (
  <PayPalScriptProvider options={options} >
    <PayPalButtons 
    style={{
      shape: "rect",
      layout: "vertical",
      color: "gold",
      label: "paypal",
    }}
    createOrder={clientCreateOrder(value)}
    onApprove={onApprove}/>
  </PayPalScriptProvider>
  
  )
}
