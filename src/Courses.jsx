
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState([]);
    

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    const handleCourseSelect = (course) => {
        const isExist = selectedCourses.find((item)=>item.id===course.id);
        let count = course.remaining;
        if(isExist){
          return alert('Already exist');
        }
        else{
             const newCredit = remaining + course.remaining;
             if(newCredit > 20){
                alert("Cannot take")
             }
            console.log(newCredit)
            setSelectedCourses([...selectedCourses, course]);
        }
        
    };


    return (
        <div className="flex mx-20">
            <div className="grid grid-cols-3 gap-6">
                {courses.map(course => (
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
                            <div className="text-center mb-3">
                                <button onClick={() => handleCourseSelect(course)} className="bg-blue-400 h-10 w-52 rounded-md text-white font-bold">Select</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Cart selectedCourses={selectedCourses} remaining={remaining}></Cart>
            </div>
        </div>
    );
};

export default Courses;
