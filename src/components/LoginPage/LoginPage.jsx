'use client'
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const LoginPage = () => {
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ email: '', password: '' });


    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { email, password } = loginData;

        console.log('Login:', { email, password });

    };


    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const { email, password } = registerData;

        console.log('Register:', { email, password });

    };


    const handleInputChange = (event, formType) => {
        const { name, value } = event.target;
        if (formType === 'login') {
            setLoginData({ ...loginData, [name]: value });
        } else if (formType === 'register') {
            setRegisterData({ ...registerData, [name]: value });
        }
    };

    return (
        <section className="login-page">
            <Container>
                <div className="login-page__info">
                    <p>
                        We have a demo account setup. <span>Username:</span> <a href="login">demo</a> and <span>
                            Password:</span> <a href="login">demo</a>
                    </p>
                </div>
                <Row>
                    <Col lg={6} className="wow fadeInUp animated" data-aos="fade-up" data-aos-delay="300">
                        <div className="login-page__wrap">
                            <h3 className="login-page__wrap__title">Login</h3>
                            <form className="login-page__form" onSubmit={handleLoginSubmit}>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Username or email *"
                                        value={loginData.email}
                                        onChange={(e) => handleInputChange(e, 'login')}
                                    />
                                </div>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password *"
                                        value={loginData.password}
                                        onChange={(e) => handleInputChange(e, 'login')}
                                    />
                                </div>
                                <div className="login-page__checked-box">
                                    <input type="checkbox" name="save-data" id="save-data" />
                                    <label htmlFor="save-data"><span></span>Remember Me?</label>
                                </div>
                                <div className="login-page__form-btn-box">
                                    <button type="submit" className="tolak-btn tolak-btn--base">
                                        <b>Login</b><span></span>
                                    </button>
                                    <div className="login-page__form-forgot-password">
                                        <a href="login">Forgot your Password?</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col lg={6} className="wow fadeInUp animated" data-aos="fade-up" data-aos-delay="400ms">
                        <div className="login-page__wrap">
                            <h3 className="login-page__wrap__title">Register</h3>
                            <form className="login-page__form" onSubmit={handleRegisterSubmit}>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        value={registerData.email}
                                        onChange={(e) => handleInputChange(e, 'register')}
                                    />
                                </div>
                                <div className="login-page__form-input-box">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={registerData.password}
                                        onChange={(e) => handleInputChange(e, 'register')}
                                    />
                                </div>
                                <div className="login-page__checked-box">
                                    <input type="checkbox" name="accept-policy" id="accept-policy" />
                                    <label htmlFor="accept-policy"><span></span>I accept the company privacy policy.</label>
                                </div>
                                <div className="login-page__form-btn-box">
                                    <button type="submit" className="tolak-btn">
                                        <b>Register</b><span></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default LoginPage;
