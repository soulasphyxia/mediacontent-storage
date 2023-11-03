import styles from'./App.module.scss'
import Header from '../header/header'
import CardItem from '../cardItem/cardItem'
import CardPage from './CardPage'
//missing provider now in main.jsx
import { useMyData } from '../servises/context'
import { Route, Routes } from 'react-router-dom'

function App() {

  const groups = useMyData()

  return (
      <>
        <Header/>
          <Routes>

            <Route path="/" element={
              <div className={styles.content}>
                <div className={styles.drawer}>
    
                </div>
    
                <div className={styles.display}>
                  {Object.keys(groups).map(key => (
                    <CardItem key={key} date={key} value={groups[key]}/>
                  ))}
                </div>
              </div>
            }/>

            <Route path="/card/:cardId" Component={CardPage}/>
          </Routes>
          
      </>
  )
}

export default App