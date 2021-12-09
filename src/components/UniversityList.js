import React from "react"
const UniversityList = ({university}) => {
    console.log("university", university)
    return(
        <div className="container" >
            <div>Country: {university.country}</div>
            <div>WebPages : {university.web_pages}</div>
        </div>
    )
}

export default UniversityList