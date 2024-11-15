// Base
import React from 'react'

// Helpers
import { formatStyles } from '@helpers/formatStyles'

// Styles
import styles from './Text.module.sass'

export interface TextProps
  extends React.HTMLAttributes<
    [HTMLParagraphElement, HTMLHeadingElement, HTMLSpanElement]
  > {
  tagName?: React.ElementType
  variant?: string
  children: React.ReactNode
  decoration?: 'underline' | 'lineThrough'
  transform?: 'uppercase' | 'capitalize' | 'lowercase'
  fontWeight?: 400 | 500 | 600 | 700 | 800 | 900
  textColor?: string
  align?: 'center' | 'left' | 'right'
  spacing?: {
    sm?: number
    lg?: number
  }
}

const Text = ({
  tagName = 'p',
  variant,
  decoration,
  transform,
  fontWeight,
  textColor,
  align,
  children,
  spacing,
  ...rest
}: TextProps) => {
  const { style, className, ...restProps } = rest

  const Tag = ({
    ...props
  }: React.HTMLAttributes<
    [HTMLParagraphElement, HTMLHeadingElement, HTMLSpanElement]
  >) => React.createElement(tagName, props, children)

  return (
    <Tag
      className={`
      ${styles.text}
      ${styles[`variant-${variant}`]}
      ${textColor ? styles[`color-${textColor}`] : ''}
      ${align ? styles[`align-${align}`] : ''}
      ${decoration ? styles[`decoration-${decoration}`] : ''}
      ${transform ? styles[`transform-${transform}`] : ''}
      ${fontWeight ? styles[`fontWeight-${fontWeight}`] : ''}
      ${spacing?.sm ? styles[formatStyles(spacing.sm, 'sm', 'spacing')] : ''}
      ${spacing?.lg ? styles[formatStyles(spacing.lg, 'lg', 'spacing')] : ''}
      ${className || ''}
      `}
      style={style}
      {...restProps}
    >
      {children}
    </Tag>
  )
}

export default Text
