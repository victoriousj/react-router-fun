import React from "react";
import Course from "./Course";

const CourseContainer = ({ data }) => {
  const courses = data.map(course => {
    const { title, description, img_src, id } = course;
    return <Course title={title} desc={description} img={img_src} key={id} />;
  });

  return (
    <div>
      <ul>{courses}</ul>
    </div>
  );
};

export default CourseContainer;
