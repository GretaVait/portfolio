'use client'

// Base
import { forwardRef } from 'react'

// Helpers
import { formatStyles } from '@helpers/formatStyles'

// Styles
import styles from './Flex.module.sass'

type FlexDirection = 'row' | 'column' | 'column-reverse' | 'row-reverse' | false

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  display?: 'flex' | 'inline-flex'
  alignItems?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'baseline'
    | 'stretch'
  justifyContent?:
    | 'normal'
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'stretch'
  flexDirection?: FlexDirection
  columnGap?: {
    sm?: number
    lg?: number
  }
  rowGap?: {
    sm?: number
    lg?: number
  }
  spacing?: {
    sm?: number
    lg?: number
  }
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  fullHeight?: boolean
  fullWidth?: boolean
  center?: boolean
  stackMobile?: boolean
  stackDesktop?: boolean
}

type Ref = HTMLDivElement

const Flex = forwardRef<Ref, FlexProps>(
  (
    {
      children,
      display = 'flex',
      alignItems = 'normal',
      justifyContent = 'normal',
      flexDirection = 'row',
      columnGap,
      rowGap,
      spacing,
      wrap = 'nowrap',
      fullHeight,
      fullWidth,
      center,
      stackMobile,
      stackDesktop,
      ...rest
    },
    ref
  ) => {
    const { style, className, ...restProps } = rest

    return (
      <div
        ref={ref}
        className={`
          ${styles.flex}
          ${display ? styles[`display-${display}`] : ''}
          ${alignItems ? styles[`alignItems-${alignItems}`] : ''}
          ${justifyContent ? styles[`justifyContent-${justifyContent}`] : ''}
          ${flexDirection ? styles[`flexDirection-${flexDirection}`] : ''}
          ${wrap ? styles[`wrap-${wrap}`] : ''}
          ${fullHeight ? styles.fullHeight : ''}
          ${fullWidth ? styles.fullWidth : ''}
          ${center ? styles.center : ''}
          ${stackMobile ? styles.stackMobile : ''}
          ${stackDesktop ? styles.stackDesktop : ''}
          ${
            columnGap?.sm
              ? styles[formatStyles(columnGap.sm, 'sm', 'columnGap')]
              : ''
          }
          ${
            columnGap?.lg
              ? styles[formatStyles(columnGap.lg, 'lg', 'columnGap')]
              : ''
          }
          ${rowGap?.sm ? styles[formatStyles(rowGap.sm, 'sm', 'rowGap')] : ''}
          ${rowGap?.lg ? styles[formatStyles(rowGap.lg, 'lg', 'rowGap')] : ''}
          ${
            spacing?.sm ? styles[formatStyles(spacing.sm, 'sm', 'spacing')] : ''
          }
          ${
            spacing?.lg ? styles[formatStyles(spacing.lg, 'lg', 'spacing')] : ''
          }
          ${className ?? ''}
        `}
        style={{ ...style }}
        {...restProps}
      >
        {children}
      </div>
    )
  }
)

Flex.displayName = 'Flex'

export default Flex
