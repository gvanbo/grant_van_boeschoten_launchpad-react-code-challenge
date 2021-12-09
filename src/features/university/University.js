import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/NavBar";
import Header from "../../components/Header"
import{ fetchUniversities, universitySelectors, } from "./universitySlice";
import UniversityList from "../../components/UniversityList"

const University = () => {
    const dispatch = useDispatch();
    const universityPosts = useSelector(universitySelectors.selectAll);

    useEffect(() => {
        dispatch(fetchUniversities())
    }, [])

    const showSelectedCountry = universityPosts.map((university) => <UniversityList key={university.id} university={university} /> )
    
    return(
        
        <div>
            <NavBar />
            <Header headerText="university" />
            <div>{showSelectedCountry}</div>
        </div>
        )
}

export default University;