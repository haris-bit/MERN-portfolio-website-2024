import React from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';

export default function Buttons(props) {
    return (
        <div className="button_slide slide_right text-base flex items-center justify-center px-10 py-2 relative">
           
                {props.text}
                <IoIosArrowRoundForward className='inline-block text-3xl scale-x-[1.5] ml-2'/>
            
        </div>
    );
}
