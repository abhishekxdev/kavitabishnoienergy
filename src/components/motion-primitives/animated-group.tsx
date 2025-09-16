import React from 'react'

interface AnimatedGroupProps {
  variants?: {
    container?: any
    item?: any
  }
  className?: string
  children: React.ReactNode
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({
  variants,
  className = '',
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  )
}
