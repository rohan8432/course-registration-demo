import { useEffect, useState } from "react";
import Course from "./course";

const Courses = () => {
    const [courses, setCourses]=useState([])


    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data));
    },[])
   
    return (
      
      <div className="flex bg-red-400">
           <div className="grid grid-cols-3 gap-56">
        {
         courses.map(course => <Course key={courses.id} course={course}></Course>) 
        }
        
        </div>
        <div>
            <h3 className="text-4xl">This is card</h3>
        </div>
      </div>
        
      
         
    );
    
};

export default Courses;