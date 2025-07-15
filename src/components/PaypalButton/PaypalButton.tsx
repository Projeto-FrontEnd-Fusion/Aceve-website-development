'use client'
import { paypalHooks } from '@/utils/paypal'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'


export const PaypalButton = () => {
  // substituir por variavel global
  const value = 0.5
  const { options, clientCreateOrder, clienteCaptureOrder } = paypalHooks()

  return (
  <PayPalScriptProvider options={options}>
    <PayPalButtons 
    style={{
      shape: "rect",
      layout: "vertical",
      color: "gold",
      label: "paypal",
    }}
    createOrder={clientCreateOrder(value)}
    onApprove={clienteCaptureOrder()}/>
  </PayPalScriptProvider>
  
  )
}
