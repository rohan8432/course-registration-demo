
const Course = (course) => {
    console.log(course.course)
    const {ImageURL,name, description, price, credit}= course.course;
    return (
          <div className="flex">
                <div className="bg-gray-300 h-8 w-64">
             <img src={ImageURL} alt="" />
             <p>{name}</p>
             <p><small>{description}</small></p>
             <div className="flex">
                <p>{price}</p>
                <p>{credit}</p>
             </div>
            </div>
          </div>
        
           
    );
};

export default Course;