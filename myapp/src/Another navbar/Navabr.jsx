// import Link from 'react-dom'
import Button from './Button';
import NavLink from './NavLink';

const Navabr = () => {
    return (
        <nav className="bg-white ">
            <div className="flex items-center font-medium justify-around">
                <div className="md:cursor">
                    <h1 className="font-bold tex-5xl ">LOGO</h1>
                </div>
                {/* ul start */}
                <ul className='md:flex md:block hidden itmes-center uppercase gap-8 font-semibold '>
                    <li>
                        Home
                    </li>
                    <NavLink/>
                </ul>
                <div className='md:block hidden '>
                    <Button />
                </div>
            </div>

        </nav>
    );
};

export default Navabr;