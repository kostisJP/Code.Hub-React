import React from "react";
import ReactDOM from "react-dom";
import "./app.css";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Courses from "./Containers/Courses/Courses";
import Course from "./Containers/Course/Course";
import AddNewCourse from "./Containers/AddNewCourse/AddNewCourse";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Grid } from "react-bootstrap";
import ThemeSwitcher from "./components/ThemeSwitcher/themeSwitcher";

ReactDOM.render(
  <BrowserRouter>
    <>
      <Header />
      <ThemeSwitcher/>
      <Grid>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/:id" component={Course} />
          <Route exact path="/add-course" component={AddNewCourse} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Grid>
      <Footer/>
    </>
  </BrowserRouter>,
  document.getElementById("app")
);
