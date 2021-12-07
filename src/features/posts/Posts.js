import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { store } from "../../app/store"
import { getPosts } from "./postsSlice"

const Posts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())       
    }, [dispatch])

    console.log(store.getState())

    return (
        <div>
            <h2>posts...</h2>
            {/* <p>{list}</p> */}
        </div>
    )
}

export default Posts;