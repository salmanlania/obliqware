"use client";
import footerData from "@/data/FooterData";
import comingSoon from '@/assets/images/comingSoon/coming-soon-bg.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import Typed from "typed.js";
import toast from "react-hot-toast";
const {
    widgetSocial,
} = footerData;

const ComingSoon = () => {
    const [progress, setProgress] = useState(40); // Example progress %
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState("");

    // useEffect(() => {
    //     // Auto increase progress slowly (optional)
    //     const interval = setInterval(() => {
    //         setProgress((prev) => (prev < 100 ? prev + 1 : prev));
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        // Typing animation
        const typed = new Typed(".typed-text", {
            strings: [
                "Erplix ERP System",
                "FBR e-Invoice Integration",
                "E-commerce Management",
                "HR Management System",
                "Accounting System",
                "RetailPOS",
            ],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    const validateEmail = (value) => {
        if (!value) {
            return "Email is required.";
        } else {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) {
                return "Please enter a valid email address.";
            }
        }
        return "";
    };

    const handleNotifyMe = async (e) => {
        e.preventDefault();

        const error = validateEmail(email);
        if (error) {
            setEmailError(error);
            toast.error(emailError);
            return;
        }

        setEmailError("");
        setLoading(true);

        const data = {
            email: email,
        };

        try {
            const response = await fetch('https://backend-api.obliqware.pk/send-notify-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success('Email Notify sent successfully!');
            } else {
                toast.error('Failed to send email notify.');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Failed to send email notify.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="coming-soon d-flex align-items-center text-center">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        {/* Title */}
                        <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
                            We’re Launching Soon!
                        </h1>
                        <p className="lead mb-4">
                            Simplifying Business With <span className="typed-text"></span>
                        </p>

                        {/* Progress Bar */}
                        <div className="mb-5">
                            <ProgressBar
                                now={progress}
                                // label={`${progress}% Ready`}
                                variant="info"
                                striped
                                animated
                                style={{ height: "30px", fontSize: "16px" }}
                            />
                        </div>

                        {/* Newsletter */}
                        <form className="newsletter d-flex justify-content-center mb-1">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control w-50 rounded-start"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                            <button className="btn btn-primary rounded-end" onClick={handleNotifyMe}>
                                {loading ? 'Notifying...' : 'Notify Me'}
                            </button>
                        </form>

                        {/* Social Links */}
                        {/* <div className="social-links d-flex justify-content-center gap-3 mb-4">
                            <Link href="https://facebook.com">
                                <i className="fab fa-facebook fa-2x"></i>
                            </Link>
                            <Link href="https://twitter.com">
                                <i className="fab fa-twitter fa-2x"></i>
                            </Link>
                            <Link href="https://linkedin.com">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </Link>
                        </div> */}
                        <div className='footer-widget__socials d-flex justify-content-center'>
                            {widgetSocial.map(({ id, href, icon, title }) => (
                                <Link href={href} key={id}>
                                    <FontAwesomeIcon icon={icon} style={{ color: '#0d6efd', fontSize: '1.5rem', background: 'none !important' }} />
                                    <span className='sr-only'>{title}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Back to Home */}
                        <Link href="/" className="btn btn-outline-light px-4 py-2">
                            ⬅ Back to Home
                        </Link>
                    </Col>
                </Row>
            </Container>

            {/* Background Overlay */}
            <style jsx>{`
        .coming-soon {
          min-height: 100vh;
          background: linear-gradient(
              rgba(0, 0, 0, 0.6),
              rgba(0, 0, 0, 0.6)
            ),
            url(${comingSoon}) center/cover no-repeat;
          color: #fff;
        }
        .form-control {
          border: none;
          padding: 0.8rem;
        }
        .btn {
          padding: 0.8rem 1.5rem;
        }
      `}</style>
        </section>
    );
};

export default ComingSoon;