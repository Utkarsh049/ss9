import { Link } from "react-router-dom"

const Register = () => {
  return (
    <>
     {/* <div className='flex justify-center'>
     <div className='h-[6rem] w-[18rem] border-[#A416C8] border-2 rounded-lg m-12 flex items-center justify-center hover:h-[8rem] hover:w-[24rem] text-lg hover:text-[2rem] duration-300 '>
    <h1 className='text-white font-bold '>Register Now!!</h1>
</div>
     </div> */}

     <div className='flex justify-center relative'>
     <button className='border-primary text-white border-2 px-12 py-6 text-base rounded-[1rem] mt-12 md:hover:text-[2rem] md:hover:p-8 duration-300 font-Goldman'>
       <Link to='/ss9/register'>Register Now!!</Link>
     </button>
     <div className='h-[20rem] w-[20rem] bg-secondary rounded-full blur-[100rem] absolute -z-10 -left-48'></div>
     </div>
    </>
  )
}

export default Register