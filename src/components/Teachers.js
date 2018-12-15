import React from "react";
import TeacherList from "../data/teachers";

const Teachers = () => {
  const teachers = TeacherList.map(teacher => {
    const { id, img_src, name, bio } = teacher;

    return (
      <li className="teacher" key={id}>
        <img className="teacher-img" src={img_src} alt="teacher" />
        <h3>{name}</h3>
        <p>{bio}</p>
      </li>
    );
  });

  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">{teachers}</ul>
    </div>
  );
};

export default Teachers;
