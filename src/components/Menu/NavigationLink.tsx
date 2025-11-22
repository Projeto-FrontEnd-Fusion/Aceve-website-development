'use client'
import { usePathname } from 'next/navigation'
import { GlobalLink, GlobalLinkProps } from '../GlobalLink/GlobalLink'

interface NavigationLinkProps extends GlobalLinkProps {

}

export const NavigationLink = ({variant, children, href, className}: NavigationLinkProps) => {
  const pathname = usePathname()

  return (
    <GlobalLink
      variant={href === pathname ? 'active-route' : 'text'}
      href={href}
      className={className}>
      {children}
    </GlobalLink>
  )
}
