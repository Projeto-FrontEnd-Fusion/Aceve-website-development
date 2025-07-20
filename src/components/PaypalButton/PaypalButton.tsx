'use client'
import { usePaypal } from '@/hooks/usePaypal'
import { useDonationStore } from '@/zustand-store/donationvalue.store'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const PaypalButton = () => {
  const donationValue = useDonationStore((state) => state.donationValue)
  const { options, createOrder, captureOrder } = usePaypal()
  const router = useRouter()

  useEffect(() => {
    if (donationValue === null) {
      router.push('/quero-doar')
    }
  }, [])

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
          className="flex h-[56px] bg-[#EEEEEE] hover:bg-[#E2E2E2] rounded-md justify-start items-center"
          createOrder={createOrder(donationValue)}
          onApprove={captureOrder} />
      }
    </PayPalScriptProvider>
  )
}
