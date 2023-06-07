 // const [datas, setDatas] = useState([])
    // useEffect(() => {
    //     try {
    //         const getData = async () => {
    //             const result = await fetch(`https://api.escuelajs.co/api/v1/products`)
    //             const data = await result.json()
    //             setDatas(data)
    //             setLoading(false)
    //             // setLoading(true)
    //         }
    //         getData()
    //         setLoading(true)
    //     } catch (err) {
    //         console.log(err)
    //         alert('somthing went wrong')
    //     }

    // }, [])

    // let [offset, setOffset] = useState(0)
    // let limit = 20


    // const handleScroling = () => {
    //     window.addEventListener('scroll', () => {
    //         const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    //         if (scrollTop + clientHeight >= scrollHeight) {
    //             console.log('bottom')
    //              offset= offset + 20;
    //             setOffset(offset)
    //         }
    //     })
    // // }


    // useEffect(() => {
    //     try {

    //         // fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
    //         fetch(`https://api.escuelajs.co/api/v1/products`)
    //             .then(res => res.json())
    //             .then(data => setDatas(data))
    //     }

    //     catch (err) {
    //         console.log(err)
    //         alert('something is Wrong !')
    //     }
    // }, [])
    // // handleScroling()

    
     // useEffect(() => {
    //     if (datas.length > 0) {
    //         setLoading(false)
    //     }
    // }, [datas])
    // if (!datas.length) {
    //     return <div className="text-xl font-bold text-center">Loading...</div>;
    // }
