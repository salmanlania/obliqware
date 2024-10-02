import { footerDemoData } from "@/data/FooterDemo";
import Image from "next/image";
import Link from "next/link";

const FooterDemo = () => {
    const {
        bgImage,
        shapeImage,
        title,
        text,
        button,
        copyright
    } = footerDemoData;


    const year = new Date().getFullYear()

    return (
        <footer className="main-footer">
            <div className="main-footer__bg" style={{ backgroundImage: `url(${bgImage.src})` }}>
            </div>
            <div className="main-footer__shape" style={{ backgroundImage: `url(${shapeImage.src})` }}>

            </div>
            <div className="container text-center">
                <h2 className="main-footer__title">{title}</h2>
                <p className="main-footer__text">{text}</p>
                <Link
                    href={button.href}
                    rel={button.rel}
                    target={button.target}
                    className="tolak-btn"
                >
                    <b>{button.text}</b><span></span>
                </Link>
            </div>

            <div className="container">
                <div className="main-footer__copyright text-center">
                    <p>
                        © Copyright <span className="dynamic-year">{year}</span> {copyright.text}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterDemo;
