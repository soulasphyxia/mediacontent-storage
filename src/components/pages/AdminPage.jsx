import { useEffect, useState } from "react"
import styles from "./AdminPage.module.scss"
import { useMyData } from '../servises/context'
import { Link } from "react-router-dom"
import axios from "axios"

function AdminPage() {
const {items, itemsActions} = useMyData()

    const deletePost = async(id) => {
        await axios.delete(`https://video-storage-api-production.up.railway.app/api/v1/dashboard/delete/${id}`)
    }

    return (
        <>
        <div className={styles.wrapper}>
            <h1>Admin!!!</h1>
            <Link to={"/createPost"}>
                <h2>Добавить пост!</h2>
            </Link>
            
            {items.map(el => (
                <div className={styles.post}>
                    <p>{el.title}</p>
                    <p>{el.createdAt}</p>
                    <Link to={`/editPost/${el.id}`}>
                        <h3>Редачить</h3>
                    </Link>
                    <h3 onClick={() => deletePost(el.id)}>Удалить</h3>
                </div>   
            ))}
        </div>
        </>
    )
}

export default AdminPage