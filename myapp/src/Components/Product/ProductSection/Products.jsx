
import ProductCard from "./ProductCard";
import useCustomHook from "../../../LayoutHook/UseCustomHook";
import Loading from "../../Loading/Loading ";




const Products = () => {


    let datas = useCustomHook(`https://api.escuelajs.co/api/v1/products`)
    const { data, err, isloading } = datas


    return (
        <div>

            <h1 className="font-bold text-4xl text-center m-10 ">Product list</h1>
            <div className="md:grid grid-cols-5 gap-4 text-center ">

                {isloading? <Loading />:
                    data.map(data => <ProductCard key={data.id} data={data}></ProductCard>)
                }


            </div>
        </div>
    );
};

export default Products;