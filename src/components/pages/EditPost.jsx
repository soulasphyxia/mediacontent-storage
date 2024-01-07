import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./CardPage.module.scss"

function EditPost() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const [obj, setObj] = useState({title: "", content: "", tags: "", ceratedAt: "", mediaFilePath: ""})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getItem(){
            await axios.get(`https://video-storage-api-production.up.railway.app/api/v1/posts/${id}`).then((response) => (setObj(response.data), setLoading(false)));
        }
        getItem()
    }, [])

    const saveEdit = async(evt) => {
        evt.preventDefault()
        const myFormData = new FormData()
        myFormData.append("title", evt.target[0].value)
        myFormData.append("content", evt.target[1].value)

        await axios.patch(`https://video-storage-api-production.up.railway.app/api/v1/dashboard/patch/${id}`, myFormData)
    }

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
            <form method="post" onSubmit={saveEdit}>
                <span>
                    <p>Title: </p>
                    <input type="text" placeholder={obj.title}/>
                </span>
                <span>
                    <p>Content: </p>
                    <textarea rows={10} cols={50} placeholder={obj.content}/>
                </span>
                <input type="submit"/>
                
            </form>
        </div>
        )}
        </>
    )
}

export default EditPost