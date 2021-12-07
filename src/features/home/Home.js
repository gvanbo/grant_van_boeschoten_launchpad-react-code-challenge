import React, { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, homeSelectors, deletePost } from "./homeSlice"
import Post from '../../components/Post'

const Home = () => {
    const dispatch = useDispatch()
    const allPosts = useSelector(homeSelectors.selectAll)
    const onDelete = useCallback((id) => {
        dispatch(deletePost(id))
    }, []) 

    useEffect(() => {dispatch(fetchPosts())}, [])
    return allPosts.map((post) => <Post key={post.id} post={post} onDelete={onDelete}/>)
}

export default Home