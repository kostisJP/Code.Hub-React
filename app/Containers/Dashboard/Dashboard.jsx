import React from "react";
import { getAllCourses, getDashboardStats } from '../../api/calls';
import "./Dashboard.css";
import CourseTable from '../../Components/CourseTable/CourseTable';
import StatItem from '../../Components/StatItem/StatItem';
import Hero from '../../Components/Hero/Hero';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      supertitle:"Welcome to Code.Hub Dashboard!",
      subtitle:"Manage everything and have fun!",
      courses:[],
      stats:[]
    };
  }

  componentDidMount(){    
      getAllCourses().then(data => this.setState({courses: data}));
      getDashboardStats().then(data => this.setState({stats: data}));      
  }

  capitalizeText = (str)=>{
    return str.toUpperCase();
  }

  render(){
    return (
        
      <div>
      {/* <Header/> */}
        <Hero supertitle={this.state.supertitle} subtitle={this.state.subtitle}/>
      <div className="row">
             <div className="col-md-10 col-md-offset-1">
                {this.state.stats.map((item,index)=>{
                  return <StatItem key={item.id} title={this.capitalizeText(item.title)} count={item.amount}/>;
                })}
             </div>
        </div>
        <CourseTable title="Last 5 Courses" courses={this.state.courses}/>
        </div>
    );
  }
}
  
export default Dashboard;