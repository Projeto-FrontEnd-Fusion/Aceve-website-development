import { buttonVariants, ButtonVariants } from "@/types/button-variants"
import React, { ComponentProps } from "react"

interface GlobalButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariants
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export const GlobalButton = ({ variant, children, onClick, className, ...props }: GlobalButtonProps) => {
  const base = 'flex items-center justify-center transition ease-in-out duration-300 rounded-lg'
  return (
    <button
      className={`${base} ${buttonVariants[variant]} ${className}`}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  )
}
