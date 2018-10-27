import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Dashboard from "./components/Dashboard/dashboard";
import Courses from "./Containers/Courses";
import Course from "./Containers/Course";
import AddNewCourse from "./Containers/AddNewCourse";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import {BrowserRouter, Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Header/>
    <Dashboard/>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/courses" component={Courses}/>
        <Route exact path="/courses/:id" component={Course}/>
        <Route exact path="/add-course" component={AddNewCourse}/>
        <Route path="*" component={NotFound} />
  </BrowserRouter>,
  document.getElementById("app")
);
