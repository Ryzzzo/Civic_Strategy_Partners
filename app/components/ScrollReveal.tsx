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
  scale?: boolean
  preserveBackdrop?: boolean
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = '60px',
  duration = 800,
  threshold = 0.1,
  scale = false,
  preserveBackdrop = false,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  const getTransform = () => {
    const scaleVal = scale ? ' scale(0.95)' : ''
    if (direction === 'none') return `translate(0, 0)${scaleVal}`
    const transforms = {
      up: `translateY(${distance})${scaleVal}`,
      down: `translateY(-${distance})${scaleVal}`,
      left: `translateX(${distance})${scaleVal}`,
      right: `translateX(-${distance})${scaleVal}`,
    }
    return transforms[direction]
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: preserveBackdrop ? 1 : (isVisible ? 1 : 0),
        transform: isVisible ? 'translate(0, 0) scale(1)' : getTransform(),
        transition: preserveBackdrop
          ? `transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
          : `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
