import React from 'react';
import { fallDown as Menu } from 'react-burger-menu';
import { HiMenu } from 'react-icons/hi';
import { styles } from '../styling';


const Sidebar = () => {
    return (
        <section className={`hidden md:block bg-[${styles.blue}] h-[100vh] w-[100%] fixed top-0 right-0 flex items-center justify-center z-50 text-[${styles.green}] text-lg`}>
            <div className='flex flex-col'>
                <a className="menu-item py-4" href="/">
                    Home
                </a>
                <a className="menu-item menu-item py-4" href="/about">
                    About
                </a>
                <a className="menu-item menu-item py-4" href="/services">
                    Services
                </a>
                <a className="menu-item menu-item py-4" href="/contact">
                    Contact us
                </a>
            </div>
        </section>
    );
};

export default Sidebar;