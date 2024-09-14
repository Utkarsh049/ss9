import time from "../assets/timeline.svg";

const Timeline = () => {
  return (
    <>
        <div className='relative  overflow-x-hidden overflow-y-hidden' id="timeline">
            <h1 className=' text-white text-[2rem] md:text-[4rem] mx-auto mb-6 md:mb-12 text-center font-Goldman '>TIMELINE</h1>
            <div>
            <img src={time} alt='Timeline' className='mx-auto h-[72rem] w-auto object-contain'></img>
            </div>
            <div className='text-white absolute top-[15rem] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold text-right font-Goldman'>1:30PM</h1>
                <p className='md:[1.5rem] xl:text-[2.5rem]'>Reporting of participants</p>
            </div>
            <div className='text-white right-0 absolute top-[32rem] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] text-right tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold text-left font-Goldman'>1:30PM</h1>
                <p className='md:[1.5rem] xl:text-[2.5rem]'>Reporting of participants</p>
            </div>
            <div className='text-white absolute top-[48rem] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold text-right font-Goldman'>1:30PM</h1>
                <p className='md:[1.5rem] xl:text-[2.5rem]'>Reporting of participants</p>
            </div>
            <div className='text-white right-0 absolute top-[65rem] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] text-right tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[4rem] xl:text-[6rem] font-bold text-left font-Goldman'>1:30PM</h1>
                <p className='md:[1.5rem] xl:text-[2.5rem]'>Reporting of participants</p>
            </div>
            <div className='hidden md:block h-[20rem] w-[20rem] bg-secondary rounded-full blur-[1000rem] absolute -z-10 -left-48 top-0 '></div>
            <div className='hidden md:block h-[16rem] w-[16rem] bg-secondary rounded-full blur-[600rem] absolute -z-10 -right-0 md:-right-24 bottom-64'></div>
        </div>
    </>
  )
}

export default Timeline