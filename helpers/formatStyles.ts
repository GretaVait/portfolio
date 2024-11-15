export interface SpacingData {
  sm?: number
  lg?: number
}

export const formatStyles = (
  spacing?: number,
  size?: 'sm' | 'lg',
  prefix?: string
) => {
  if (spacing) {
    return `${prefix}-${size}-${spacing}`
  } else {
    return 0
  }
}
