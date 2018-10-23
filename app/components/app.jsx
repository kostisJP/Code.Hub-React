import React from "react";
import Header from "./Header";
import Course from "./course";

function App(){
    return (
        // <div className="jumbotron">
        //     <h1 className="display-4">Hello</h1>
        //     <div>
        //         <Hero />
        //         <Box title="Students" number={50} />
        //         <Box title="Teachers" number={10} />
        //     </div>
        // </div>
        <div>
            {/* <Header title="Code.Hub Dashboard" /> */}
            <Course />
        </div>
    );
} 

export default App;