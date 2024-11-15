// Styles
import styles from './Grid.module.sass'

interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: 'space-between' | 'center' | 'flex-start' | 'flex-end'
  align?: 'center' | 'flex-start' | 'flex-end' | 'baseline'
  children: React.ReactNode
}

const Row = ({ children, position, align, ...rest }: RowProps) => {
  const { className, ...restProps } = rest

  return (
    <div
      className={`
    ${styles.row}
    ${position ? styles[`position-${position}`] : ''}
    ${align ? styles[`align-${align}`] : ''}
    ${className ?? ''}
  `}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Row
