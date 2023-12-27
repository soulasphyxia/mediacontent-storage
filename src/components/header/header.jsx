import styles from './header.module.scss'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <header>
      <div className={styles.textRight}>
        <Link to={"/"}>Home page</Link>
      </div>

      <div className={styles.signIn}>
        <Link to={"/"}>Sign in</Link>
      </div>
    </header>
  )
}

export default Header