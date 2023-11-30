import styles from './cardItem.module.scss'
import { Route, Routes, Link } from 'react-router-dom'

function CardItem({date, value}) {

  return (
    <div className={styles.wrapper}>
        <p className={styles.date}>{date}</p>
        <div className={styles.border}>

            {value.map(el => el.mediaFilePath ? (
                <div className={styles.videoCard}>
                  <Link to={`/card/${el.id}`}>
                    <h2 className={styles.title}>{el.title}</h2>
                    <div className={styles.contentWrap}>
                      <p className={styles.content}>{el.content}</p>
                      <div className={styles.imgWrap}>
                        <img height='125px' src="2.png"/>
                      </div>
                    </div>
                  </Link>
                  <div className={styles.tagsWrap}>
                    <div className={styles.tag}>tag1</div>
                    <div className={styles.tag}>tag2</div>
                  </div>
                </div>
            ) : (
              <div className={styles.card}>
                <Link to={`/card/${el.id}`}>
                  <h2 className={styles.title}>{el.title}</h2>
                  <p className={styles.content}>{el.content}</p>
                </Link> 
                <div className={styles.tagsWrap}>
                  <div className={styles.tag}>tag1</div>
                  <div className={styles.tag}>tag2</div>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default CardItem