'use client';
import React, { useCallback, useMemo } from 'react';
import { useAnimate } from 'framer-motion';
import Image from 'next/image';

export const ClipLinks = () => {
  return (
    <div className=" bg-neutral-50 px-0 py-0 w-full">
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

const LinkBox = React.memo(({ text, href, image }) => {
  const [scope, animate] = useAnimate();

  const getNeartestSide = useCallback((e) => {
    const box = e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;

    const distances = [
      { side: 'left', distance: Math.abs(box.left - clientX) },
      { side: 'right', distance: Math.abs(box.right - clientX) },
      { side: 'top', distance: Math.abs(box.top - clientY) },
      { side: 'bottom', distance: Math.abs(box.bottom - clientY) },
    ];

    return distances.reduce((nearest, current) => 
      current.distance < nearest.distance ? current : nearest).side;
  }, []);

  const handleMouseEnter = useCallback((e) => {
    const side = getNeartestSide(e);
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[side] }, { duration: 0.3 });
  }, [animate, getNeartestSide, scope]);

  const handleMouseLeave = useCallback((e) => {
    const side = getNeartestSide(e);
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[side] }, { duration: 0.3 });
  }, [animate, getNeartestSide, scope]);

  const darkImageSrc = useMemo(() => `/${image}-dark.svg`, [image]);
  const lightImageSrc = useMemo(() => `/${image}.svg`, [image]);

  return (
    <a
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      href={href} 
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-44">
      <div>
        <Image src={darkImageSrc} alt={image} width={80} height={80} />
      </div>
      <div ref={scope} style={{ clipPath: BOTTOM_RIGHT_CLIP }} className="absolute inset-0 grid place-content-center bg-neutral-900">
        <div className='z-20'>
          <Image src={lightImageSrc} alt={image} width={120} height={120} />
        </div>
      </div>
    </a>
  );
});

LinkBox.displayName = 'LinkBox';