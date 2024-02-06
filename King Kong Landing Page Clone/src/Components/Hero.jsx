import HeroVideo from '../assets/hero-bg-video-2021.mp4';
import HeroSmallVideo from '../assets/hero-video-v2.mp4';

const Hero = () => {
    return ( 
        <div> {/* Hero Container */}
                <div className='bg-[#0a0404] absolute w-auto min-w-full min-h-full max-w-none'>
                    <video src={ HeroVideo }
                    autoPlay
                    loop
                    muted
                    className='opacity-15 w-auto min-w-full min-h-full max-w-none'
                    />
                </div>

            <div className="text-gray-50 flex justify-center">
                <div className='z-30'>
                    <p className="text-9xl font-bold tracking-tighter">LIKE STEROIDS<sup>*</sup>
                    <br /> 
                    FOR BUSINESS</p>

                    <p>Growing a business is hard. We make it a whole lot easier, more predictable, less stressful, and more fun.</p>

                    <div className=''> {/* email input section */}
                        <form>
                            <label htmlFor="email"></label>
                            <input type="text" placeholder="👋 Enter your email here and we'll send you some 'magic'..." 
                            className='w-full rounded-full'
                            />
                            <button className='' type='submit'>Do it</button>
                            <div>→</div> {/* arrow */}
                        </form>
                    </div>

                    <div className='flex justify-center'>
                        <span>*But it&apos;s 100% legal (pinky promose)</span>
                        <div>5 stars</div>
                        <span>4.8 stars out of 5,399 reviews</span>
                    </div>

                    <div className='scale-50 -skew-y-12'> {/* Video section */}
                        <video src={ HeroSmallVideo }
                        autoPlay
                        loop
                        muted
                        className=' rounded-3xl'
                        />
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default Hero;
{/*  */}