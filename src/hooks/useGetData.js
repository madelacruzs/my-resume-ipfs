import { useState, useEffect } from "react";

const useGetData = (api) => {
    const [myData, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return myData;
};

export default useGetData;
