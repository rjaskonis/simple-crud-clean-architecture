import "./style.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useHttp from "hooks/http";

function Usuario({ history, match: { params } }) {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({});
    const [usuario, setUsuario] = useState({});
    const [usuarios, setUsuarios] = useState([]);
    const [loadUsuariosAPI, loadUsuarios] = useHttp(
        () => http.get("/api/usuarios"),
        (usuarios) => (usuarios.constructor === Array ? setUsuarios(usuarios) : null)
    );
    const [loadUsuarioAPI, loadUsuario] = useHttp((id) => http.get(`/api/usuarios/${id}`), setUsuario);

    async function registrarUsuario() {
        if (!usuario.nome || !usuario.sobrenome || !usuario.username || !usuario.senha || !usuario.salt) {
            setMessage({ show: true, type: "warning", text: "Certifique-se de ter preenchido todos os campos" });

            await sleep(2500);

            setMessage({ show: false });

            return;
        }

        setIsLoading(true);

        const { status, data } = await http.post("/api/usuarios", usuario);

        await sleep(600);

        setIsLoading(false);

        if (status !== 200) {
            setMessage({ show: true, type: "danger", text: "Houver algum problema para efetuar o registro" });

            await sleep(2500);

            setMessage({ show: false });

            return;
        }

        setMessage({ show: true, type: "success", text: "Registro efetuado com sucesso" });

        await sleep(2000);

        setMessage({ show: false });

        history.push("/usuarios");
    }

    async function excluirUsuario(usuario) {
        if (!window.confirm("Deseja realmente excluir este usuário?")) return;

        setIsLoading(true);

        const { status } = await http.delete("/api/usuarios", usuario);

        await sleep(600);

        setIsLoading(false);

        if (status !== 200) {
            setMessage({ show: true, type: "danger", text: "Houver algum erro para excluir o registro" });

            await sleep(2000);

            setMessage({ show: false });

            return;
        }

        setMessage({ show: true, type: "warning", text: "Registro excluído" });

        loadUsuarios();

        await sleep(2000);

        setMessage({ show: false });
    }

    const handleChange = ({ target: { name, value } }) => setUsuario((usuario) => ({ ...usuario, [name]: value }));

    useEffect(() => {
        if (params.id) {
            if (params.id == 0) {
                setUsuario((u) => ({}));
            } else {
                loadUsuario(params.id);
            }
        } else {
            loadUsuarios();
        }
    }, [params.id]);

    if (params.id) {
        return (
            <>
                <div class="container usuario-container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col col-sm-6 usuario-form">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h2>CRUD</h2>
                                <h4>Registro de usuário {params.id == 0 ? "*Novo*" : ""}</h4>
                            </div>
                            <div class="form">
                                <div class="form-group">
                                    <label class="px-1">Nome *</label>
                                    <input type="text" class="form-control" name="nome" value={usuario.nome || ""} onChange={handleChange} />
                                </div>
                                <div class="form-group">
                                    <label class="px-1">Sobrenome *</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="sobrenome"
                                        value={usuario.sobrenome || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="px-1">Nome de login do usuário *</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="username"
                                        value={usuario.username || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="px-1">Senha *</label>
                                    <input
                                        type="password"
                                        class="form-control"
                                        name="senha"
                                        value={usuario.senha || ""}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="px-1">Salt *</label>
                                    <input type="text" class="form-control" name="salt" value={usuario.salt || ""} onChange={handleChange} />
                                </div>
                                <div class="form-group">
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <button type="button" className="btn-submit" onClick={registrarUsuario}>
                                                Registrar
                                            </button>
                                        </div>
                                        <div className="col-12 col-sm-6 py-4 py-md-0 d-flex justify-content-center align-items-center">
                                            <Link className="link-voltar" to="/usuarios">
                                                Voltar
                                            </Link>
                                        </div>
                                        <div className="loading-gif col-12 py-4 d-flex justify-content-center align-items-center">
                                            {isLoading && <div class="spinner-border text-primary" role="status"></div>}
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
            </>
        );
    }

    return (
        <>
            <div class="container usuario-container">
                <div class="row align-items-center">
                    <div class="col p-4">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h2>CRUD</h2>
                            <h4>Listagem de usuários</h4>
                        </div>
                        <div className="container">
                            <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
                                <button className="btn-novo-usuario" onClick={() => history.push("/usuarios/0")}>
                                    Novo usuário
                                </button>
                            </div>
                            <div className="col usuarios mt-4">
                                {usuarios && usuarios.length ? (
                                    usuarios.map((usuario) => (
                                        <div className="usuario d-flex flex-row align-items-center justify-content-between">
                                            <div className="columns d-flex flex-grow-1 flex-row align-items-center">
                                                <div className="column id mx-4">{usuario.id}</div>
                                                <div className="column nome">
                                                    {usuario.nome} {usuario.sobrenome}
                                                </div>
                                            </div>
                                            <div className="options">
                                                <button className="btn-editar mx-4" onClick={() => history.push(`/usuarios/${usuario.id}`)}>
                                                    <i className="mdi mdi-24px mdi-pencil"></i>
                                                </button>
                                                <button className="btn-excluir" onClick={() => excluirUsuario(usuario)}>
                                                    <i className="mdi mdi-24px mdi-delete"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="d-flex py-4 align-items-center justify-content-center">
                                        <h6>Nenhum usuário registrado</h6>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {loadUsuariosAPI.isLoading ||
                (isLoading && (
                    <>
                        <div className="loading-gif col-12 py-4 d-flex justify-content-center align-items-center">
                            {isLoading && <div class="spinner-border text-primary" role="status"></div>}
                        </div>
                    </>
                ))}
            {message.show && (
                <div className="col-12 text-center mt-4 d-flex justify-content-center align-items-center">
                    <div class={`alert alert-${message.type} `} role="alert">
                        {message.text}
                    </div>
                </div>
            )}
        </>
    );
}

export default Usuario;
