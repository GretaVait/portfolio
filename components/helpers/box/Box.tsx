// Base
import { forwardRef } from 'react'

// Helpers
import { formatStyles } from '@helpers/formatStyles'

// Styles
import styles from './Box.module.sass'

type Overflow = 'hidden' | 'visible' | 'scroll' | 'auto'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  backgroundColor?: string
  opacity?: number
  overflow?: Overflow
  spacing?: {
    sm?: number
    lg?: number
  }
  padding?: {
    sm?: number
    lg?: number
  }
}

type Ref = HTMLDivElement

const Box = forwardRef<Ref, BoxProps>(
  (
    {
      children,
      backgroundColor = '',
      opacity = 100,
      overflow = 'visible',
      spacing,
      padding,
      ...rest
    },
    ref
  ) => {
    const { style, className, ...restProps } = rest

    return (
      <div
        ref={ref}
        className={`
          ${styles.box}
          ${
            backgroundColor
              ? styles[`backgroundColor-${backgroundColor}-${opacity}`]
              : ''
          }
          ${overflow ? styles[`overflow-${overflow}`] : ''}
          ${
            spacing?.sm ? styles[formatStyles(spacing.sm, 'sm', 'spacing')] : ''
          }
          ${
            spacing?.lg ? styles[formatStyles(spacing.lg, 'lg', 'spacing')] : ''
          }
          ${
            padding?.sm ? styles[formatStyles(padding.sm, 'sm', 'padding')] : ''
          }
          ${
            padding?.lg ? styles[formatStyles(padding.lg, 'lg', 'padding')] : ''
          }
          ${className ?? ''}
        `}
        style={style}
        {...restProps}
      >
        {children}
      </div>
    )
  }
)

Box.displayName = 'Box'

export default Box
