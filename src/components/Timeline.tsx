import time from "../assets/timeline.svg";

const Timeline = () => {
  return (
    <>
        <div className='relative  overflow-x-hidden overflow-y-hidden' id="timeline">
        <h1 className=' text-white text-[2rem] md:text-[4rem] mx-auto mb-6 md:mb-12 text-center font-Goldman '>TIMELINE</h1>
            <div>
            <img src={time} alt='Timeline' className='mx-auto h-[100vh] md:h-[150vh] w-auto object-contain'></img>
            <div className='text-white absolute top-[20vh] md:top-[35vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>1:30 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            <div className='text-white absolute right-0 top-[43vh] md:top-[70vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>1:30 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            <div className='text-white absolute md:top-[105vh] top-[66vh] xl:ml-[20rem] md:ml-[10rem] ml-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold text-right font-Goldman'>1:30 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            <div className='text-white absolute right-0 top-[90vh] md:top-[140vh] xl:mr-[20rem] md:mr-[10rem] mr-[0.8rem] tracking-tighter'>
                <h1 className='text-secondary text-[2rem] md:text-[2rem] xl:text-[4rem] font-bold font-Goldman'>1:30 PM</h1>
                <p className='md:[1rem] xl:text-[2rem]'>Reporting of Participants</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Timeline