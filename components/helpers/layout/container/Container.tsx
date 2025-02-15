// Styles
import styles from './Container.module.sass'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
