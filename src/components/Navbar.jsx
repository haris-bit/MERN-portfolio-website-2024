import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import logoipsum from '../assets/logo-ipsum.svg';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function Navbar() {
    return (
        <div className='flex flex-row justify-between'>
            <div>
                <img src={logoipsum} alt="" className='w-[60%] md:w-[70%] lg:w-[80%]' />
            </div>
            <HiOutlineMenuAlt3 className=' text-4xl  md:text-5xl' />
        </div>
    )
}
