'use client';
import React from 'react';
import {useAnimate} from 'framer-motion';
import Image from 'next/image';

export const ClipLinks = () => {
    return (
        <div className=" bg-neutral-50 px-0 py-12 w-full">
            <div className="w-full">
                <ClipPathLinks />
            </div>
        </div>
    );
};

const ClipPathLinks = () => {
    return (
        <div className="border border-neutral-900 divide-y divide-neutral-900 w-full border-l-0 border-r-0">
            <div className="grid grid-cols-2 divide-x divide-neutral-900">
                <LinkBox text="React" href="#" image="react"/>
                <LinkBox text="NextJS" href="#" image="nextjs"/>
            </div>
            <div className="grid grid-cols-4 divide-x divide-neutral-900">
                <LinkBox text="Javascript" href="#" image="javascript"/>
                <LinkBox text="Typescript" href="#" image="typescript"/>
                <LinkBox text="Framer Motion" href="#" image="framer-motion"/>
                <LinkBox text="Tailwind" href="#" image="tailwind"/>  
            </div>
            <div className="grid grid-cols-3 divide-x divide-neutral-900">
                <LinkBox text="Vercel" href="#" image="vercel"/>
                <LinkBox text="Netlify" href="#" image="netlify"/>
                <LinkBox text="Figma" href="#" image="figma"/>
            </div>
        </div>
    );
};

const NO_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
const BOTTOM_RIGHT_CLIP = 'polygon(0 0, 100% 0, 0 0, 0% 100%)';
const TOP_RIGHT_CLIP = 'polygon(0 0, 0 100%, 100% 100%, 0% 100%)';
const BOTTOM_LEFT_CLIP = 'polygon(100% 100%, 100% 0, 100% 100%, 0% 100%)';
const TOP_LEFT_CLIP = 'polygon(0 0, 100% 0, 100% 100%, 100% 0)';

const ENTRANCE_KEYFRAMES = {
    left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
    bottom: [BOTTOM_LEFT_CLIP, NO_CLIP],
    right: [BOTTOM_LEFT_CLIP, NO_CLIP],
    top: [TOP_LEFT_CLIP, NO_CLIP] 
};

const EXIT_KEYFRAMES = {
    left: [NO_CLIP, TOP_RIGHT_CLIP],
    bottom: [NO_CLIP, TOP_RIGHT_CLIP],
    right: [NO_CLIP, TOP_LEFT_CLIP],
    top: [NO_CLIP, TOP_LEFT_CLIP]
};


const LinkBox = ({text, href, image}) => {
    const [scope, animate] = useAnimate();

    const handleMouseEnter = (e) => {
        const side = getNeartestSide(e);
        animate(scope.current, {clipPath: ENTRANCE_KEYFRAMES[side]});
    };
    const handleMouseLeave = (e) => {
        const side = getNeartestSide(e);
        animate(scope.current, {clipPath: EXIT_KEYFRAMES[side]});
    };

    const getNeartestSide = e => {
        const box = e.target.getBoundingClientRect();

        const proximityToLeft = {
            proximity: Math.abs(box.left - e.clientX),
            side: 'left'
        };
        const proximityToRight = {
            proximity: Math.abs(box.right - e.clientX),
            side: 'right'
        };
        const proximityToBottom = {
            proximity: Math.abs(box.bottom - e.clientY),
            side: 'bottom'
        };
        const proximityToTop = {
            proximity: Math.abs(box.top - e.clientY),
            side: 'top'
        };

        const sortedProximity = [proximityToLeft, proximityToRight, proximityToBottom, proximityToTop].sort((a, b) => a.proximity - b.proximity);

        return sortedProximity[0].side;
    };

    return (
        <a
            onMouseEnter={(e) => {
                handleMouseEnter(e);
            }}
            onMouseLeave={(e) => {
                handleMouseLeave(e);
            }}
            href={href} 
            className="relative grid h-20 w-full place-content-center sm:h-28 md:h-44">
            <div>
                <Image src={`/${image}-dark.svg`} alt={image} width={80} height={80} />
            </div>
            <div ref={scope} style={{clipPath: BOTTOM_RIGHT_CLIP}} className="absolute inset-0 grid place-content-center bg-neutral-900">
                <div className='z-10 absolute inset-0'>
                    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%'}}>
                        <text x="50" y="50" fill="white" fillOpacity="0.2" textAnchor="middle" dominantBaseline="middle" fontSize="20">{text}</text>
                    </svg>
                </div>
                <div className='z-20'>
                    <Image src={`/${image}.svg`} alt={image} width={120} height={120} />
                </div>
            </div>
        </a>
    );
};