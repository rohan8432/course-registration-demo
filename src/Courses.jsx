import { useEffect, useState } from "react";

import Courses from './Courses';


const Courses = () => {
    const [courses, setCourses] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
   
//   const handleCourseSelect=()=>{
//     console.log('hello')
//   }
    return (

        <div className="flex mx-20">

            <div className="grid grid-cols-3 gap-6">
                {
                    courses.map(course =>(
                       
                        
                       <div key={course.id}>
                             <div className="w-64 p-3 bg-white rounded-md h-[350px]">
                                <div>
                                    <img src={course.ImageURL} alt="" className="mb-3" />
                                </div>
                                <h3 className="text-center mb-3">{course.name}</h3>
                                <p className="mb-3"><small>{course.description}</small></p>
                                <div className="flex justify-evenly mb-3">
                                    <p>{course.price}</p>
                                    <p>{course.credit}</p>
                                </div>
                                <div className="text-center mb-3" >
                                {/* <button onClick={handleCourseSelect} className="bg-blue-400 h-10 w-52 rounded-md text-white font-bold">Select</button> */}
                                </div>
                            </div>
                    
                       </div>
                    ) )
                
                    }
            </div>

            <div>
                <h3 className="text-4xl">This is card</h3>
            </div>
        </div>



    );

};

export default Courses;