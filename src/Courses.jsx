

import React, { useEffect, useState } from "react";
import Cart from "./Cart";

// step:1  In this stage I am going to show how to hold data

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [priceValue, setPriceValue] = useState(0);
    const [remainValue, setRemainValue] = useState(20);
 
    // step 2: In this stage The data are loaded using fetch
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);


    // step: 3  In this stage The data from course value are running

    const handleCourseSelect = (course) => {
        const isExist = selectedCourses.find((item) => item.id === course.id);

        if (isExist) {
            return alert('Already exist');
        } else {
            const totalRemaining = course.remaining + remaining;
            const totalPrice = course.PriceValue + priceValue;

            if (totalRemaining <= remainValue) {
                setRemaining(totalRemaining);
                setPriceValue(totalPrice);

            
                const remainingValue = remainValue - totalRemaining;
                
        
                const CurrentRemainValue = Math.max(remainingValue, 0);
                
                setRemainValue(CurrentRemainValue);
                setSelectedCourses([...selectedCourses, course]);
            } else {
                alert("Cannot take - Not enough credits for taking course");
            }
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
                <Cart selectedCourses={selectedCourses} remaining={remaining} priceValue={priceValue} remainValue={remainValue}></Cart>
            </div>
        </div>
    );
};

export default Courses;




