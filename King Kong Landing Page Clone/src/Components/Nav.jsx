

const Nav = () => {
    return ( 
        <nav className="w-full"> {/* container */}
            <div className="max-w-7xl flex justify-between items-center px-4 py-2.5 mx-auto">
                <div className="z-30">
                    {/* <img src="" alt="" />  */} {/* phone logo  */}
                    <a href="tel:+1300858250" className="text-gray-50">1300 858 250</a>
                </div>
                <div className="z-30">
                    <span className="font-bold text-[#aed100]">King Kong<sup>&reg;</sup></span>
                </div>
                <div className="z-30">
                    <span className="text-gray-50">menu</span>
                    {/* <img src="" alt="" /> */} {/* menu svg */}
                </div>
            </div>
        </nav>
     );
}
 
export default Nav;
{/*  */}