// Styles
import styles from './Grid.module.sass'

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  column: number
  gutter: number
  children: React.ReactNode
}

const Column = ({ children, column, gutter, ...rest }: ColumnProps) => {
  const { className, ...restProps } = rest

  return (
    <div
      className={`
      ${styles[`column-${column}-${gutter}`]}
      ${className ?? ''}
    `}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Column
