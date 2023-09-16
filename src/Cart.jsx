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

const Cart = ({ selectedCourses }) => {
    return (
        <div className='w-64 h-80 bg-red-300 ml-3'>
            <div>
                <h3 className='text-center'>Course hour remaining 20 hr</h3>
            </div>
            <hr />
            <div>
                <h3 className='font-bold pl-4'>Course name</h3>
            </div>
            {
                selectedCourses.map((course) => (
                  <div key={course.id}>
                    <h2>{course.name}</h2>
                  </div>
                ))
            }
        </div>
    );
};

export default Cart;
