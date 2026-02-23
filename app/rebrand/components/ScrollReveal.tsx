'use client'

import { useScrollReveal } from '../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: string
  duration?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = '40px',
  duration = 700,
  threshold = 0.15,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  const getTransform = () => {
    if (direction === 'none') return 'translate(0, 0)'
    const transforms = {
      up: `translateY(${distance})`,
      down: `translateY(-${distance})`,
      left: `translateX(${distance})`,
      right: `translateX(-${distance})`,
    }
    return transforms[direction]
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0, 0)' : getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
