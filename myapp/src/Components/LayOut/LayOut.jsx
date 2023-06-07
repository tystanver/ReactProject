


import Footer from './Footer';

import Navbar from './Navbar';


import HomeContainer from '../Home/HomeContainer';
import Products from '../Product/ProductSection/Products';

const LayOut = () => {
    return (
        <div>
            <Navbar />
        
            <HomeContainer />
            <Products />
            <Footer />
        </div>
    );
};

export default LayOut;