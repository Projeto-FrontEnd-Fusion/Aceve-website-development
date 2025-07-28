import Link from "next/link"
import React, { ComponentProps } from "react"

interface GlobalLinkProps extends ComponentProps<'a'> {
  variant: 'primary' | 'text' | 'outlined-primary-400'
  children: React.ReactNode
  href: string
  className?: string
}

export const GlobalLink = ({ variant, children, href, className, ...props }: GlobalLinkProps) => {
  const base = 'flex items-center justify-center transition ease-in-out duration-300 rounded-lg'
  const variants = {
    'primary': 'text-white-normal bg-primary-600 focus:outline-primary-400 hover:bg-primary-700 active:bg-[bg-primary-800]',
    'text': 'bg-grey-100 text-gray-400 hover:bg-gray-100 active:bg-gray-300 focus:outline-grey-400',
    'outlined-primary-400': 'bg-grey-100 border-2 border-primary-400 hover:bg-primary-200 focus:outline-primary-800 active:bg-primary-400'
  }

  return (
    <Link href={href}
      className={`${base} ${variants[variant]} ${className}`}{...props}>
      {children}
    </Link>
  )
}

