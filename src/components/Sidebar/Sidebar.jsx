import headerData from '@/data/HeaderData';
import { useRootContext } from '@/Provider/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SidebarNewsletter from '../SidebarNewsletter/SidebarNewsletter';

const { icons, links, logo_light, sidebarOneText, social } = headerData

const Sidebar = () => {
    const { openSidebar, toggleSidebar } = useRootContext()
    return (
        <aside className={`sidebar-one ${openSidebar ? "active" : ""}`}>
            <div onClick={toggleSidebar} className="sidebar-one__overlay"></div>
            <div className="sidebar-one__content">
                <div onClick={toggleSidebar} className="sidebar-one__close"><i className="icon-close"></i></div>
                <div className="sidebar-one__logo">
                    <Link href="/" aria-label="logo image">
                        <Image src={logo_light} alt="Tolak HTML" width={184} />
                    </Link>
                </div>
                <p className="sidebar-one__text">
                    {sidebarOneText}
                </p>
                <h4 className="sidebar-one__title">Contact Info:</h4>
                <ul className="sidebar-one__info">
                    <li>
                        <span className="fas fa-map-marker-alt"></span>
                        <a href="https://maps.app.goo.gl/krah5ayC1HnUvKSx7" target='_blank'>Karachi, Pakistan</a>
                    </li>
                    <li>
                        <span className="fas fa-phone" style={{ transform: 'rotate(90deg)' }}></span>
                        <Link href="tel:+923462488254">+923462488254</Link>
                    </li>
                    <li>
                        <span className="fas fa-envelope"></span>
                        <Link href="mailto:info@obliqware.pk">info@obliqware.pk</Link>
                    </li>
                </ul>
                <div className="sidebar-one__social">
                    {social.map(({ icon, link }, index) => (

                        <Link key={index} target='_blank' href={link}>
                            <FontAwesomeIcon icon={icon} />
                            <span className="sr-only">Facebook</span>
                        </Link>

                    ))}

                </div>
                <h4 className="sidebar-one__title">Newsletter:</h4>
                <SidebarNewsletter />

            </div>
        </aside>
    );
};

export default Sidebar;