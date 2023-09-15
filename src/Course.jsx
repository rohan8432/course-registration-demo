
const Course = (course) => {
    console.log(course.course)
    const { ImageURL, name, description, price, credit } = course.course;
    return (
   <div>
         <div className="w-64 p-3 bg-white rounded-md h-[350px]">
            <div>
                <img src={ImageURL} alt="" className="mb-3" />
            </div>
            <h3 className="text-center mb-3">{name}</h3>
            <p className="mb-3"><small>{description}</small></p>
            <div className="flex justify-evenly mb-3">
                <p>{price}</p>
                <p>{credit}</p>
            </div>
            <div className="text-center mb-3" >
            <button className="bg-blue-400 h-10 w-52 rounded-md text-white font-bold">Select</button>
            </div>
        </div>

   </div>
    );
};

export default Course;