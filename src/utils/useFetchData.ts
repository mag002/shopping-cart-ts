import { useEffect, useState } from "react";

const useFetchData = (url: string) => {
    // BTVN: Update typescript for useFetchData (hint: Generic Type)
    // build global state for cartData
    // build darkmode for application
    const [data, setData] = useState<any>({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // fetchData();
    }, [])

    const fetchData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch(url);
            const data = await res.json()
            setData(data);
            setIsLoading(false);
        } catch (e) {

            console.log(e)
        }
    }
    return { data, isLoading, fetchData };
}

export default useFetchData;