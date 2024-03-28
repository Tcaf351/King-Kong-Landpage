import KKSVG from '../assets/kingkong.svg';
import GrayscaleLogos from '../assets/as-seen-in-grayscale-2.svg';

const OurOffering = () => {
    return ( 
        <div>
            <h4 className='text-center'>OUR OFFERING</h4>
            <div className='flex'>
                <div className='text-center'>
                    <img src={KKSVG} alt="king kong logo" />
                    <p>HIRE US TO DO IT FOR YOU</p>
                    <p>AGENCY</p>
                    <p>Managed and 'done-for-you' digital marketing services for mid-to-large companies looking to accelerate 'hyper-growth'. And yes, we guarentee results and smell fantastic *wink*.</p>
                    <button>Get Started</button>
                    <div>
                        stars svg
                    </div>
                    <span>4.5 stars out of 383 reviews</span>
                </div>

                <div className='text-center'>
                    <img src={KKSVG} alt="king kong logo" />
                    <p>LEARN HOW TO DO IT YOURSELF</p>
                    <p>COURSES</p>
                    <p>Managed and 'done-for-you' digital marketing services for mid-to-large companies looking to accelerate 'hyper-growth'. And yes, we guarentee results and smell fantastic *wink*.</p>
                    <button>Get Started</button>
                    <div>
                        stars svg
                    </div>
                    <span>4.5 stars out of 383 reviews</span>
                </div>
            </div>
            <img src={GrayscaleLogos} alt="grayscale logos" />
        </div>
     );
}
 
export default OurOffering;