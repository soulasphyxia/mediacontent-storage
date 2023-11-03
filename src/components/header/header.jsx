import styles from './header.module.scss'
import { Link } from 'react-router-dom'
function Header() {

  return (
    <header>
      <div className={styles.textRight}>
        <Link to={"/"}>Home page</Link>
        
      </div>
      <div className={styles.signIn}>
        sign in 
      </div>
    </header>
  )
}

export default Header