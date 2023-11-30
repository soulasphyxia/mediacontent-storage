import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./CardPage.module.scss"

function CardPage() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [obj, setObj] = useState({title: "", content: "", tags: "", date: "", mediaFilePath: ""})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getItem(){
            await axios.get(`http://localhost:8081/api/v1/articles/${id}`).then((response) => (setObj(response.data), setLoading(false)));
        }
        getItem()
    }, [])

    return (
        <>
        {loading ? (
        <div className={styles.loading}>
            <svg className={styles.spinner} viewBox="0 0 50 50">
                <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        </div>
        ) : (
        <div className={styles.wrapper}>
            <h1>{obj.title}</h1>
            <div className={styles.content}>
                <p>{obj.content}</p>

                <div className={styles.media}>
                    {obj.mediaFilePath.includes(".mp4") ? 
                    <video controls preload src={obj.mediaFilePath}></video> :
                    <img src={obj.mediaFilePath} alt="" />}
                </div>
                
            </div>
        </div>
        )}
        </>
    )
}

export default CardPage