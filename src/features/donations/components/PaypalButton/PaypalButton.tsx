'use client'

import { usePaypal } from '@/features/donations/hooks/usePaypal'
import { useDonationStore } from '@/features/donations/stores/donationvalue.store'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

export const PaypalButton = () => {
  const donationValue = useDonationStore((state) => state.donationValue)
  const { options, createOrder, captureOrder } = usePaypal()

  return (
    <PayPalScriptProvider options={options} >
      {donationValue &&
        <PayPalButtons
          style={{
            shape: "rect",
            layout: "vertical",
            color: "silver",
            label: "paypal",
          }}
          className="flex z-10 h-[56px] bg-[#EEEEEE] hover:bg-[#E2E2E2] rounded-md justify-start items-center"
          createOrder={createOrder(donationValue)}
          onApprove={captureOrder} />
      }
    </PayPalScriptProvider>
  )
}
