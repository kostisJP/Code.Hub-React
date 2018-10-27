import React from "react";
import axios from 'axios';
import {Row, Col} from "react-bootstrap";
import Hero from "../Hero/Hero";
import StatItem from "../StatItem/StatItem";
import Header from "../Header/Header";
import CourseTable from "../CourseTable/courseTable";


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      supertitle:"Welcome to Code.Hub Dashboard!",
      subtitle:"Manage everything and have fun!",
      courses:[],
      stats:[]
    }
  }

  componentDidMount(){
      axios.get('http://localhost:3000/courses').then(response=>{
        const courseData = response.data;
        this.setState({courses:courseData});
        //console.log(this.state.courses);
      });
      axios.get('http://localhost:3000/stats').then(response=>{
        const stats = response.data;
        this.setState({stats:stats});
        //console.log(this.state.stats);
      });
  }

  capitalizeText = (str)=>{
    return str.toUpperCase();
  }

  render(){
    return (
        
      <div>
      <Header/>
        <Hero supertitle={this.state.supertitle} subtitle={this.state.subtitle}/>
      <div className="row">
             <div className="col-md-10 col-md-offset-1">
                {this.state.stats.map((item,index)=>{
                  return <StatItem key={item.id} title={this.capitalizeText(item.title)} count={item.amount}/>
                })}
             </div>
        </div>
        <CourseTable title="Last 5 Courses" courses={this.state.courses}/>
        </div>
    );
  }
}
  
export default Dashboard;