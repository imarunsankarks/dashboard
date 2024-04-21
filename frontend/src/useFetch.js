import { useState, useEffect } from "react";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    // const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            // console.log(url);
            const response = await fetch(url);
            const json = await response.json();

            if (response.ok) {
                setData(json);
                // console.log(json)
                setLoading(false);
            } else {
                console.log('unable to get data');
            }
        }

        fetchAllData()

    }, [url])
    return { loading, data };
}

export default useFetch;