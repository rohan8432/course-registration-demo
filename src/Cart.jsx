import { useState } from "react";
import { useEffect } from "react";


const Cart = () => {
    const [course, setCourse] = useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then(res => res.json())
        .then(data =>setCourse(data));
    },[])
    return (
        <div>
            <div>
                <p>{course.length}</p>
            </div>
            <div className="h-72 w-56 bg-gray-200 m-3">
                <img className="p-2" src="https://i.ibb.co/jVM8wHr/Rectangle-2-2.png" alt="" />
                <h4 className="text-center">Introduction to programming</h4>
                 <small className="ml-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</small>
                <div className="flex justify-evenly">
                    <p>price</p>
                    <p>Credit</p>
                </div>
                

            </div>
        </div>
    );
};

export default Cart;