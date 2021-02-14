import "bootstrap";
import "./styles/main.scss";
import { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState();

    async function fetchData() {
        const response = await fetch("/api/data");
        const json = await response.json();

        setData(json);
    }

    useEffect(() => {
        // fetchData();
    }, []);

    return (
        <>
            <div class="jumbotron text-center">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
            <h4 style={{ color: "#2d63b5" }}>Hello from React</h4>
            <br />
            {data && <h3>{data.message}</h3>}
        </>
    );
}

export default App;
