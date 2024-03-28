import Nav from './Components/Nav';
import Hero from './Components/Hero';
import Award2 from './assets/awards-2.webp';
import DescriptionSection from './Components/DescriptionSection';
import OurOffering from './Components/OurOffering';
// import Stripes from './Components/Stripes';
// import Awards from './Components/Awards';


import './App.css'

function App() {


  return (
      <div className='font-sans'>
        <Nav />
        <Hero />
        <img src={Award2} alt="awards" />
        <DescriptionSection />
        <OurOffering />
        {/* <Stripes />
        <Awards /> */}
      </div>
  )
}

export default App
{/* <span className="border-solid border[#ecfec6] col-start-1 row-start-1 col-span-1 bg-black">1</span>
            <span className="bg-[#ecfec6] col-start-3 row-start-4 col-span-3">2</span>
            <span className="bg-[#6ee268] row-start-5 col-span-2">3</span>
            <span className="bg-[#6ee268] col-end-11 row-start-5 col-span-2">4</span>
            <span className="bg-[#ecfec6] col-start-8 row-start-6 col-span-3">5</span>
            <span className="bg-[#6ee268] col-end-10 row-start-9 col-span-3">6</span>
            <span className="bg-[#b4fa88] col-end-11 row-start-10 col-span-2">7</span> */}