import bannerimage from './image/bannerImage.jpg'

const Banner = () => {
    return (
        <div className="container mx-auto  h-full">
            <img className='w-full rounded-lg ' src={bannerimage} alt="" />
        </div>
    );
};

export default Banner;