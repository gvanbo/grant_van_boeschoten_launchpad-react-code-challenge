import React from "react";
const UniversityListItem = ({ university }) => {

  return (
    <div
      className="card bg-transparent"
      style={{ margin: 15, border: "solid" }}
    >
      <div className="card-body">
        <h2 className="mb-2">{university.name}</h2>
        <p >{university.country}</p>
        <a href={university.web_pages}> {university.web_pages}</a>
      </div>
    </div>
  );
};

export default UniversityListItem;
