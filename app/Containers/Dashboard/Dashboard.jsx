import React from "react";
import { getAllCourses, getDashboardStats } from '../../api/calls';
import "./Dashboard.css";
import CourseTable from '../../components/CourseTable/CourseTable';
import StatItem from '../../components/StatItem/StatItem';
import Hero from '../../components/Hero/Hero';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supertitle: "Welcome to Dashboard!",
      supergrad: "Code.hub",
      subtitle: "Manage everything and have fun!",
      courses: [],
      stats: []
    };
  }

  componentDidMount() {
    getAllCourses().then(data => this.setState({ courses: data }));
    getDashboardStats().then(data => this.setState({ stats: data }));
  }

  capitalizeText = (str) => {
    return str.toUpperCase();
  }

  render() {
    return (

      <div>
        <Hero supertitle={this.state.supertitle} supergrad={this.state.supergrad} subtitle={this.state.subtitle} />
          <div className="stat_wrapper flex_wrapper inner_wrapper">
            {this.state.stats.map((item, index) => {
              return <StatItem key={item.id} title={this.capitalizeText(item.title)} count={item.amount} image={item.picture} />;
            })}
          </div>
        <CourseTable title="Last 5 Courses" courses={this.state.courses} />
      </div>
    );
  }
}

export default Dashboard;