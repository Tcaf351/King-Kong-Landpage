import HeroVideo from '../assets/hero-bg-video-2021.mp4';
import HeroSmallVideo from '../assets/hero-video-v2.mp4';

const Hero = () => {
    return ( 
        <div> {/* Hero Container */}
                <div className=''>
                    <video src={ HeroVideo }
                    autoPlay
                    loop
                    muted
                    className=''
                    />
                </div>

            <div className="">
                <div className=''>
                    <p className="text-9xl font-bold tracking-tighter text-center">LIKE STEROIDS<sup>*</sup>
                    <br /> 
                    FOR BUSINESS</p>

                    <p className='text-center'>Growing a business is hard. We make it a whole lot easier, more predictable, less stressful, and more fun.</p>

                    <div className=''> {/* email input section */}
                        <form className=''>
                            <label htmlFor="email"></label>
                            <input type="text" placeholder="👋 Enter your email here and we'll send you some 'magic'..." 
                            className=''
                            />
                            <button className='' type='submit'>Do it</button>
                            <div>→</div> {/* arrow */}
                        </form>
                    </div>

                        <div className=''>
                            <span className='mx-10 my-5'>*But it&apos;s 100% legal (pinky promose)</span>
                            
                            <span className='mx-10 my-5'>5 stars 4.8 stars out of 5,399 reviews</span>
                        </div>

                    
                        {/* Video section */}
                        <div className=""> {/* diagonal */}
                            <video
                                src={ HeroSmallVideo }
                                autoPlay
                                loop
                                muted
                                className=""
                                />
                        </div>
                </div>
            </div>
        </div>
     );
}

 
export default Hero;
{/*  */}