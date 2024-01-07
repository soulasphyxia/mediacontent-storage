import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from "./CardPage.module.scss"

function CreatePost() {

    const createNewPost = async(evt) => {
        evt.preventDefault()
        const myFormData = new FormData()
        myFormData.append("title", evt.target[0].value)
        myFormData.append("content", evt.target[1].value)
        myFormData.append("data", evt.target[2].files[0])
        await axios.post(`https://video-storage-api-production.up.railway.app/api/v1/dashboard/upload`, myFormData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }})
    }

    return (
        <div className={styles.wrapper}>
            <form method="post" onSubmit={createNewPost}>
                <span>
                    <p>Title: </p>
                    <input type="text" placeholder="Заголовок"/>
                </span>
                <span>
                    <p>Content: </p>
                    <textarea rows={10} cols={50} placeholder="Содержание"/>
                </span>
                <span>
                    <p>Media File: </p>
                    <input type="file" />
                </span>
                <input type="submit"/>
                
            </form>
        </div>
    )
}

export default CreatePost