import React from "react";
import { NavLink, Route, Redirect } from "react-router-dom";

import CourseContainer from "./courses/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from "../data/courses";

const Courses = ({ match }) => {
  const { url, path } = match;

  return (
    <div className="main-content courses">
      <div className="course-header group">
        <h2>Courses</h2>
        <ul className="course-nav">
          <li>
            <NavLink to={`${url}/html`}>HTML</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/css`}>CSS</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/javascript`}>JavaScript</NavLink>
          </li>
        </ul>
      </div>

      <Route
        exact
        path={path}
        render={() => <Redirect to={`${match.path}/html`} />}
      />
      <Route
        path={`${path}/html`}
        render={() => <CourseContainer data={HTMLCourses} />}
      />
      <Route
        path={`${path}/css`}
        render={() => <CourseContainer data={CSSCourses} />}
      />
      <Route
        path={`${path}/javascript`}
        render={() => <CourseContainer data={JSCourses} />}
      />
    </div>
  );
};

export default Courses;
