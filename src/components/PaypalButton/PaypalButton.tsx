'use client'
import { usePaypal } from '@/hooks/usePaypal'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export const PaypalButton = () => {
  // substituir por variavel global
  const value = 0.5
  const { options, createOrder, captureOrder } = usePaypal()

  return (
    <PayPalScriptProvider options={options} >
      <PayPalButtons
        style={{
          shape: "rect",
          layout: "vertical",
          color: "white",
          label: "paypal",
        }}
        createOrder={createOrder(value)}
        onApprove={captureOrder} />
    </PayPalScriptProvider>

  )
}
