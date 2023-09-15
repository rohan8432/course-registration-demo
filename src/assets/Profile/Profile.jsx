import profile from '../../assets/Profile/mypic.jpeg'

const Profile = () => {
    return (
        <div className='flex justify-between mx-20 py-10'>
            <p className='text-4xl font-bold'>Course registration</p>
            <img className='h-14 w-14 rounded-full' src={profile} alt="" />
        </div>
     
    );
};

export default Profile;