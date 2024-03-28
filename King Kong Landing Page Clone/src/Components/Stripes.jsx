

const Stripes = () => {
    return ( 
        <div className="grid grid-cols-10 grid-rows-10 min-w-[768px] z-40 -skew-y-12">
            <span className="border-solid border[#ecfec6] col-start-1 row-start-1 col-span-1 bg-black">1</span>
            <span className="bg-[#ecfec6] col-start-3 row-start-4 col-span-3">2</span>
            <span className="bg-[#6ee268] row-start-5 col-span-2">3</span>
            <span className="bg-[#6ee268] col-end-11 row-start-5 col-span-2">4</span>
            <span className="bg-[#ecfec6] col-start-8 row-start-6 col-span-3">5</span>
            <span className="bg-[#6ee268] col-end-10 row-start-9 col-span-3">6</span>
            <span className="bg-[#b4fa88] col-end-11 row-start-10 col-span-2">7</span>
            {/* <span className="border-solid border[#ecfec6] col-start-1 row-start-1 col-span-1 bg-black">1</span>
            <span className={`bg-[#ecfec6] ${colStart1} row-start-4 col-span-3`}>2</span>
            <span className="bg-[#6ee268] row-start-5 col-span-2">3</span>
            <span className="bg-[#6ee268] col-end-11 row-start-5 col-span-2">4</span>
            <span className="bg-[#ecfec6] col-start-8 row-start-6 col-span-3">5</span>
            <span className="bg-[#6ee268] col-end-10 row-start-9 col-span-3">6</span>
            <span className="bg-[#b4fa88] col-end-11 row-start-10 col-span-2">7</span> */}
        </div>
     );
}
 
export default Stripes;