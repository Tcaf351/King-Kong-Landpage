import HeroVideo from '../assets/hero-bg-video-2021.mp4';

const Hero = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center text-gray-50">
            <div className='z-30 w-full justify-self-center px-3.5 mx-auto'>
                <p className="text-9xl font-bold min-w self-center">LIKE STEROIDS<sup>*</sup>
                <br /> FOR BUSINESS</p>

                <p>Growing a business is hard. We make it a whole lot easier, more predictable, less stressful, and more fun.</p>
            </div>

            <div className='bg-[#0a0404] absolute w-auto min-w-full min-h-full max-w-none'>
                <video src={ HeroVideo }
                autoPlay
                loop
                muted
                className='z-10 opacity-15 w-auto min-w-full min-h-full max-w-none'
                />
            </div>
        </div>
     );
}
 
export default Hero;