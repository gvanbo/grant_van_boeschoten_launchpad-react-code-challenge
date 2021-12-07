import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, homeSelectors } from "./homeSlice"
import Post from '../../components/Post'

const Home = () => {
    const dispatch = useDispatch()
    const total = useSelector(homeSelectors.selectTotal)
    const allPosts = useSelector(homeSelectors.selectAll)

    useEffect(() => {dispatch(fetchPosts())}, [])
    return allPosts.map((post) => <Post key={post.id} post={post}/>)
}

export default Home