import React from 'react'

interface TextEffectProps {
  preset?: string
  speedSegment?: number
  delay?: number
  per?: string
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
}

export const TextEffect: React.FC<TextEffectProps> = ({
  preset = 'fade-in-blur',
  speedSegment = 0.3,
  delay = 0,
  per = 'word',
  as: Component = 'div',
  className = '',
  children,
  ...props
}) => {
  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
