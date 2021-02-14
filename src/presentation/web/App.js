import "bootstrap";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import http from "./api/http";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [credential, setCredential] = useState({});

    async function authenticate() {
        setIsLoading(true);

        const { status, data } = await http.post("/api/authenticate", { username: "admin", senha: "123" });

        if (status === 200) {
            window.alert("ok");
        }

        setIsLoading(false);
    }

    const handleChange = ({ target: { name, value } }) => setCredential((credential) => ({ ...credential, [name]: value }));

    useEffect(() => {
        // fetchData();
    }, []);

    return (
        <>
            <div class="container login-container">
                <div class="row align-items-center">
                    <div class="col login-form">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2>CRUD</h2>
                            <h4>Acesso ao sistema</h4>
                        </div>
                        <div class="form">
                            <div class="form-group">
                                <label class="px-1">Usuário</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Seu nome de usuário *"
                                    name="usuario"
                                    value={credential.usuario}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form-group">
                                <label class="px-1">Senha</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    placeholder="Sua senha *"
                                    name="senha"
                                    value={credential.senha}
                                    onChange={handleChange}
                                />
                            </div>
                            <br />
                            <div class="form-group">
                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <button type="button" className="btn-submit" onClick={authenticate}>
                                            Acessar
                                        </button>
                                    </div>
                                    <div className="col-12 col-sm-6 py-4 py-md-0 d-flex justify-content-center align-items-center">
                                        <a href="#" class="link-forget-password">
                                            Esqueceu a senha?
                                        </a>
                                    </div>
                                    <div className="loading-gif col-12 py-4 d-flex justify-content-center align-items-center">
                                        {isLoading && <div class="spinner-border text-primary" role="status"></div>}
                                    </div>
                                    <div class="alert alert-info col-12 text-center mt-4" role="alert">
                                        A simple info alert—check it out!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

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
