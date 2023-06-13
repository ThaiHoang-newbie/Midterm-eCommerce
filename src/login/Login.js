    import React, { useEffect, useState } from "react";
    import { Link, useNavigate } from "react-router-dom";

    const Login = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const navigate = useNavigate();

        useEffect(() => {
            sessionStorage.clear();
        }, []);

        const proceedLogin = (e) => {
            e.preventDefault();

            if (validate()) {
                fetch(`http://localhost:3000/user?username=${username}`)
                    .then((res) => res.json())

                    .then((resp) => {
                        if (Object.keys(resp).length === 0) {
                            alert('Not have any that username');
                        } else {
                            if (resp[0].password === password) {
                                alert('Login successful');
                                sessionStorage.setItem('username', username);

                                setTimeout(() => {
                                    window.location = "http://localhost:3001";
                                }, 1000);
                            } else {
                                alert('Wrong password');
                            }
                        }
                    })
                    .catch((err) => {
                        alert('Login failed due to: ' + err.message);
                    });
            }
        };

        const validate = () => {
            let result = true;
            if (username === '' || username === null) {
                result = false;
                alert('Please enter a username');
            }
            if (password === '' || password === null) {
                result = false;
                alert('Please enter a password');
            }
            return result;
        };

        return (
            <div className="row">
                <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
                    <form onSubmit={proceedLogin} className="container">
                        <div className="card">
                            <div className="card-header">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>User Name <span className="errmsg">*</span></label>
                                    <input value={username} onChange={e => setUsername(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Password <span className="errmsg">*</span></label>
                                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Login</button> |
                                <Link className="btn btn-success" to={'/register'}>New User</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    export default Login;
