
import React from 'react';

const Cart = ({ selectedCourses, remaining, priceValue, remainValue }) => {
    return (
        <div className='bg-white ml-3 pl-4 rounded-md w-64 h-80'>
           <h3 className='text-blue-600 font-bold mb-3'>Credit Hour Remaining {remainValue} hr</h3>
          
        
           <hr className='mb-3' />
           <h4 className='text-xl font-bold'>Course name</h4>
          
             {
                selectedCourses.map((course=>(
                    <div key={course.id}>
                     
                      <ol className='list-disc text-gray-500'>
                        <li>{course.name}</li>
                      </ol>
                    </div>
                )))
             }
              <hr className='mb-3' />
             <h3 className='mt-16 font-bold text-gray-400'>Total Credit: {remaining} hr</h3>
             <hr className='mb-3' />
             <h3 className='font-bold text-gray-400' >Total price value: {priceValue} USD</h3>
        </div>

          
                
    );
};

            export default Cart;





