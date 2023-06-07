
import { HiViewList } from "react-icons/hi";




const Navbar = () => {
 

    let links = [
        { n: 'HOME' },
        { n: 'PRODUCT' },
        { n: 'ABOUT' },
        { n: 'CONTACT' },
        { n: 'BLOG' },

    ]

    return (

        <div className="fixed top-0 w-full h-full md:h-0 ">
            <div className="md:flex items-center justify-between shadow-lg md:py-10  px-4 bg-green-500 h-full hiden">
                <div className="">
                    <h1 className="text-4xl font-bold">Logo</h1>
                </div>
                <div  className="md:hidden absolute right-2 text-3xl top-3">
                    <HiViewList></HiViewList>
                </div>
                <div className="mt-4 md:mt-0">
                    <ul className="font-semibold md:flex gap-10 items-center space-y-4 md:space-y-0 ">
                        {
                            links.map((link, idx) => <li key={idx} >{link.n}</li>)

                        }
                    </ul>
                </div>
                <div className=" mt-4 md:mt-0 ">
                    <button className="px-4 py-2 border rounded-md font-semibold">
                        LOG IN
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;