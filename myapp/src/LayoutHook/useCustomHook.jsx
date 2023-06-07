
import { useEffect, useState } from "react";


const useCustomHook = (api) => {
    const [isloading, setisLoading] = useState(false)
    const [data, setData] = useState([]);
    const [err, setErr] = useState([])
   

    useEffect(() => {

        async function getData() {
            try {
                const result = await fetch(api)
                const data = await result.json()
                console.log(data)
                setData(data)
                setisLoading(false)
            }
            catch (err) {
                console.log(err)
                setErr(err)
            }

        }
        getData()
        setisLoading(true)





    }, [])


    return { data, isloading ,err}
};

export default useCustomHook;