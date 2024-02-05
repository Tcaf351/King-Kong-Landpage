import HeroVideo from '../assets/hero-bg-video-2021.mp4';

const Hero = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center text-gray-50 bg-blend-darken">
            <div className='z-30'>
                <p className="text-9xl font-bold">LIKE STEROIDS<sup>*</sup>
                <br /> FOR BUSINESS</p>

                <p>Growing a business is hard. We make it a whole lot easier, more predictable, less stressful, and more fun.</p>
            </div>

            <video src={ HeroVideo }
            autoPlay
            loop
            muted
            className='absolute z-10 w-auto min-w-full min-h-full max-w-none '
            />
        </div>
     );
}
 
export default Hero;