import { useLocation } from "react-router-dom"
import { useMyData } from '../servises/context'

function CardPage() {
    const location = useLocation()
    const id = location.pathname.split('/')[2]
    const groups = useMyData()

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}

export default CardPage