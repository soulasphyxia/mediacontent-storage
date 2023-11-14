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
            <svg class={styles.spinner} viewBox="0 0 50 50">
                <circle class={styles.path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
            </svg>
        </div>
        ) : (
        <div className={styles.wrapper}>
            <h1>{obj.title}</h1>
            <div className={styles.content}>
                <p>{obj.content}</p>
                <video controls preload width="500px"src={obj.mediaFilePath}></video>
            </div>
        </div>
        )}
        </>
    )
}

export default CardPage