import Image from 'next/image';
import clsx from 'clsx';

import Nav from './nav';
import Hamburger from './hamburger';

import banner1Img from './banner-1.png';
import buyNowImg from './buy-now.svg';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <section className='relative'>
        {/* Background */}
        <div className='relative'>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload='auto'
            className='absolute inset-0 size-full object-cover mix-blend-screen'
          >
            <source src='/matrix.mp4' type='video/mp4' />
          </video>
          <Image
            src={banner1Img}
            quality={100}
            priority
            alt=''
            className='min-h-[300px] w-full object-cover'
          />
        </div>
        {/* Content */}
        <div className='absolute inset-0'>
          <header className='relative after:multi-[`absolute;inset-0;bg-black;opacity-50`]'>
            <div
              className={clsx(
                'mx-auto max-w-screen-desktop  max-desktop:px-5',
                'relative z-10  flex items-center gap-x-10 py-5 '
              )}
            >
              <a
                href='/'
                className='block shrink-0 font-sans text-4xl drop-shadow-text transition hover:drop-shadow-xl-text'
              >
                RUNESTONE BLUE
              </a>
              <Nav className='max-[1085px]:hidden' />
              <div className='relative ml-auto shrink-0'>
                <Image src={buyNowImg} alt='' />
                <a
                  href='/'
                  className={clsx(
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                    'whitespace-nowrap text-3xl transition',
                    'hover:multi-[`drop-shadow-white-text;text-primary`]'
                  )}
                >
                  BUY NOW
                </a>
              </div>
              <div className='hidden max-[1085px]:multi-[`block`]'>
                <Hamburger />
              </div>
            </div>
          </header>
          <h1 className='absolute bottom-9 w-full text-center text-4xl'>
            <p>Runes are here...</p>
            <p>Bring Runeston To Diamond Class!</p>
          </h1>
        </div>
      </section>
    </div>
  );
}
