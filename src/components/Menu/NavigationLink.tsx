'use client'
import { usePathname } from 'next/navigation'
import { GlobalLink } from '../GlobalLink/GlobalLink'
import { ComponentProps } from 'react';

interface navigationLinkProps extends ComponentProps<'a'> {
  href: string;
  className?: string;
}
export const NavigationLink = ({ href, className, children, ...props }: navigationLinkProps) => {
  const pathname = usePathname()

  return (
    <GlobalLink
      variant={href === pathname ? 'active-route' : 'text'}
      href={href}
      className={className}
      {...props}>
      {children}
    </GlobalLink>

  )
}
