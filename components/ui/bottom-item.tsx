'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Icon from './icon'

const ButtonItem: React.FC<{
  name: string
  icon: string
  href: string
}> = ({ name, icon, href }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex flex-col items-center justify-center px-5  group transition-colors hover:bg-accent',
        pathname === href
          ? 'text-accent-foreground bg-accent'
          : 'text-accent-foreground',
        'focus:outline-none'
      )}
    >
      <Icon
        name={icon}
        className={cn(`w-5 h-5 mb-2`, 'group-hover:text-accent-foreground')}
      />
      <span className="text-xs text-forceground group-hover:text-accent-foreground ">
        {name}
      </span>
    </Link>
  )
}

export default ButtonItem
