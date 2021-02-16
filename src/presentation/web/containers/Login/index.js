import "./style.scss";
import { useState, useEffect } from "react";
import http from "api/http";

function Login({ history }) {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [credential, setCredential] = useState({});

    async function authenticate() {
        setIsLoading(true);

        const { status, data } = await http.post("/api/authenticate", credential);

        await sleep(600);

        setIsLoading(false);

        if (status === 200) {
            document.cookie = `token=${data.token}`;
            localStorage.setItem("n-auth", JSON.stringify(data));

            setMessage({ show: true, type: "success", text: "Login efetuado com sucesso" });

            await sleep(2000);

            history.push("/usuarios");
        } else {
            setMessage({ show: true, type: "warning", text: "Falha na autenticação" });

            await sleep(3000);

            setMessage({ show: false });
        }
    }

    const handleChange = ({ target: { name, value } }) => setCredential((credential) => ({ ...credential, [name]: value }));

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
                                    name="username"
                                    value={credential.username}
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
                                    {message.show && (
                                        <div class={`alert alert-${message.type} col-12 text-center mt-4`} role="alert">
                                            {message.text}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loading-gif col-12 py-4 d-flex justify-content-center align-items-center">
                {isLoading && <div class="spinner-border text-primary" role="status"></div>}
            </div>
        </>
    );
}

export default Login;
