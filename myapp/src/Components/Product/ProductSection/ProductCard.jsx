

const ProductCard = (props) => {

    const{id,title,price,description,images}=props.data;
    return (
        <div className="shadow-lg">
        <img className="rounded-lg" src={images[2]} alt=" Image nai" />
        <p className="font-semibold text-xl">{title}</p>
        <p className="font-semibold "> <span className="text-red-500 font-bold">price</span>:$ <span>{price}</span></p>
        <p className="font-semibold "> $ <span>{description}</span></p>

    </div>
    );
};

export default ProductCard;