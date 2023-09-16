// import React from 'react';


// const Cart = ({ selectedCourses }) => {

//     // console.log(selectedCourses);
//     return (
//         <div>
//            {
//             selectedCourses.map((course=>{

//             }))
//            }
//         </div>
//     );
// };

// export default Cart;


import React from 'react';

const Cart = ({ selectedCourses, remaining }) => {
    return (
        <div className='bg-red-300 ml-3 rounded-md w-64 h-80'>
           <h3>Credit Hour Remaining: {remaining}</h3>
             {
                selectedCourses.map((course=>(
                    <div key={course.id}>
                     
                        <h2>{course.name}</h2>
                    </div>
                )))
             }
        </div>

          
                
    );
};

            export default Cart;
