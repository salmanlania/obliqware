'use client'
import headerData from "@/data/HeaderData";
import { useRootContext } from "@/Provider/context";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import SingleNavItems from "../NavItems/SingleNavItems";
const { main_logo, singleNavItemsThree } = headerData;

const HeaderThreeSingleCloned = () => {
  const { handleToggle } = useRootContext();
  const scrollTop = useScroll(130)



  return (
    <header className={`main-header-three sticky-header sticky-header--one-page sticky-header--cloned  ${scrollTop ? " active " : ""}`}>
      <div className='container'>
        <div className='main-header-three__inner'>
          <div className='main-header-three__logo'>
            <Link href='/'>
              <Image
                src={main_logo}
                alt='Tolak HTML'
                width={184}
                style={{ height: "auto" }}
              />
            </Link>
          </div>

          <nav className='main-header-three__nav main-menu'>
            <ul className='main-menu__list'>


              {singleNavItemsThree.map((item, index) => (
                <SingleNavItems key={index} item={item} />
              ))}



            </ul>
          </nav>
          <div className='main-header-three__right'>
            <div
              onClick={handleToggle}
              className='mobile-nav__btn mobile-nav__toggler'
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <a href='contact' className='tolak-btn main-header-three__btn'>
              <b>Discover More</b>
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderThreeSingleCloned;
