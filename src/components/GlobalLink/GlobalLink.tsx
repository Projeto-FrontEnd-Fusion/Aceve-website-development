import { buttonVariants, ButtonVariants } from "@/types/button-variants"
import Link from "next/link"
import React, { ComponentProps } from "react"

export interface GlobalLinkProps extends ComponentProps<'a'> {
  variant: ButtonVariants
  children: React.ReactNode
  href: string
  className?: string
}

export const GlobalLink = ({ variant, children, href, className, ...props }: GlobalLinkProps) => {
  const base = 'flex items-center justify-center transition ease-in-out duration-300 rounded-lg'
  return (
    <Link href={href}
      className={`${base} ${buttonVariants[variant]} ${className}`}{...props}>
      {children}
    </Link>
  )
}

