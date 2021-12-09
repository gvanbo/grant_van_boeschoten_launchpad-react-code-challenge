import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../navbar/NavBar";
import Header from "../../components/Header"
import{ fetchUniversities, universitySelectors, } from "./universitySlice";
import UniversityListItem from "../../components/UniversityListItem"

const University = () => {
    const dispatch = useDispatch();
    const universityPosts = useSelector(universitySelectors.selectAll);

    useEffect(() => {
        dispatch(fetchUniversities())
    }, [])

    const showSelectedCountry = universityPosts.map((university) => <UniversityListItem key={university.id} university={university} /> )

    const universityImage = "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F607590ba05bd6e626df132b2%2FCheerful-college-students-walking-out-of-campus-together--posing-outdoors%2F960x0.jpg%3Ffit%3Dscale"
    
    return(
        
        <div>
            <NavBar />
            <Header headerText="university" />
            <div className="row justify-content-center">
                <div class="col-6">
                    {showSelectedCountry}
                </div>
                <div className="col-6">
                    <img src={universityImage} alt="Diverse University Students" width="80%"/>
                </div>
            </div>
        </div>
        )
}

export default University;