

import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link, useLocation} from "react-router-dom";
import { BiMenu } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import MobileNav from './MobileNav';
import Button from "./Button";
import YuliLogo from "../../assets/yulilogo.svg"
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';


interface NavigationItem {
  key: string;
  text: string;
  href: string;
}

interface NavigationProps {
    navigationItems?: NavigationItem[];
}

const Navbar: React.FC<NavigationProps> = () => {
  const { t } = useTranslation();
  const navigationItems = t('navigationItems', { returnObjects: true }) as { key: string; text: string, href: string }[];
  const buttonText = t('sellButton', { returnObjects: true }) as { text: string }[];
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  const dropdownItems = ['en', 'fr'];
  return (

    <nav className="z-10  w-full  bg-white fixed px-10 md:px-0 shadow-sm">
      <div className="flex z-10 justify-between py-4 container mx-auto items-center top-0 left-0 right-0">
        <div className="">
          <Link to="/">
            <LazyLoadImage
              src={YuliLogo}
              width={116}
              height={43}
              alt="logo"
            />
          </Link>

        </div>
        {/* {t(`${item.text}`)} */}
        <div className="space-x-10 hidden lg:flex" >
        <ul className='flex space-x-16  text-xl'>
        {navigationItems.map((item) => (

            <li className='' key={item.key}>
            <Link to={t(`${item.href}`)} className={location.pathname === `${t(`${item.href}`)}` ? 'border-b-4 border-b-[#4A9BDD] py-2 ' : ''}>{t(`${item.text}`)}</Link>
          </li>
        ))}
       
      </ul>
          
        </div>

        <div className=" gap-6 hidden lg:flex">
        <LanguageSwitcher lngs={dropdownItems}/>
          {/* <Link to="/login">
            <Button title="Login" bgColor="bg-button1"  />=
          </Link> */}
          <Link to="/download">
            <Button title={t(`${buttonText}`)} bgColor='bg-secondary2' />
          </Link>
        </div>
        <div className='lg:hidden '>
          <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
            {mobileNav ? (
              <MdClose className="text-3xl text-accent" />
            ) : (
              <BiMenu size={36} className="text-3xl text-accent" />
            )}
          </button>

          <div
            className={`${mobileNav ? "left-0" : "-left-full"
              } fixed top-0 w-[80vw] lg:hidden transition-all bottom-0 bg-[#FFF8EE] `}
          >
            <MobileNav />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
