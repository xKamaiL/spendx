'use client'

import BottomNavigation from '@/components/ui/bottom-navigation'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      <div className="mx-auto max-w-lg px-2 md:px-0 h-full">{children}</div>
      <BottomNavigation />
    </div>
  )
}
