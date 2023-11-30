import styles from'./App.module.scss'
import Header from '../header/header'
import CardItem from '../cardItem/cardItem'
import CardPage from './CardPage'
//missing provider now in main.jsx
import { useMyData } from '../servises/context'
import { Route, Routes } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import debounce from 'lodash.debounce';

function App() {
  const {ref, inView} = useInView({
    threshold: 0.9,
  })
  
  const {items, itemsActions} = useMyData()

  const groups = items.reduce((acc, curr) => { //no sort first - first date that was found
    const date = curr.date.split('T')[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(curr);
    return acc;
  }, [])

  const test1 = debounce(() => {
    itemsActions.loadNext()
  }, 500)

  useEffect(() => {
    if(inView){
      test1()
    }
  }, [inView])

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
                  <div ref={ref} className={styles.intersection}></div>
                </div>
              </div>
              
            }/>

            <Route path="/card/:cardId" Component={CardPage}/>
          </Routes>
          
      </>
  )
}

export default App