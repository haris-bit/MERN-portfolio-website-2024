import React from 'react'
import { styles } from '../styling'
import '.././index.css'
import SvgBackground from './SvgBackground'

export default function Section2() {
    return (
        <div className={`${styles.container} relative`}>
            {/* innerleft container */}
            {/* <SvgBackground /> */}
            <div className="left w-full min-h-fit py-10 flex items-center md:items-start relative">
                <div className={`innerLeft mt-16 ${styles.innerCont} relative z-50`}>
                    <h1 className={`${styles.h1} text-[${styles.blue}]`}>Designer</h1>
                    <p className={`${styles.para}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum libero minima, natus eum reiciendis magnam iste architecto sequi veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, numquam!
                    </p>
                </div>
                <SvgBackground />
            </div>
            {/* innerleft container */}
            <div className="right w-full min-h-fit py-10 flex items-center md:items-end">
                <SvgBackground />
                <div className={`innerRight mt-16 ${styles.innerCont}  relative z-50`}>
                    {/* <SvgBackground /> */}
                    <h1 className={`${styles.h1} text-[${styles.blue}]`}>Developer</h1>
                    <p className={`${styles.para}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nostrum libero minima, natus eum reiciendis magnam iste architecto sequi veritatis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, numquam!
                    </p>
                </div>
            </div>
        </div>
    )
}
