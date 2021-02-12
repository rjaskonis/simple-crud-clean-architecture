import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState();

    async function fetchData() {
        const response = await fetch("/api/data");
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h4 style={{ color: "#2d63b5" }}>Hello from React</h4>
            <br />
            {data && <h3>{data.message}</h3>}
        </>
    );
}

export default App;
