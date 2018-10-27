import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Courses from "./Containers/Courses/Courses";
import Course from "./Containers/Course/Course";
import AddNewCourse from "./Containers/AddNewCourse/AddNewCourse";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <Dashboard />
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/courses" component={Courses} />
      <Route exact path="/courses/:id" component={Course} />
      <Route exact path="/add-course" component={AddNewCourse} />
      <Route path="*" component={NotFound} />
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
