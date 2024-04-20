import Image from 'next/image';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

import Nav from './nav';
import Hamburger from './hamburger';

import banner1Img from './banner-1.png';
import banner2Img from './banner-2.png';
import banner3Img from './banner-3.png';
import banner4Img from './banner-4.png';
import buyNowImg from './buy-now.svg';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <section id='home' className='relative'>
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
                className={clsx(
                  'block shrink-0 font-sans text-4xl drop-shadow-text transition hover:drop-shadow-xl-text',
                  'max-[560px]:multi-[`text-5xl;-translate-y-2`] max-[560px]:[&>span:not(:first-child)]:hidden'
                )}
              >
                {'RUNESTONE BLUE'.split('').map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </a>
              <Nav className='max-[1085px]:hidden' />
              <div className='relative ml-auto shrink-0'>
                <Image src={buyNowImg} alt='' />
                <a
                  href='https://dedust.io/swap/TON/EQAX78CALFiYhNpM29dJGtQJJne2YEHinj8K_6Jwu8xkEvDH'
                  target='_buy'
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
          <h1 className='absolute bottom-11 w-full text-center text-4xl'>
            <p>Runes are here...</p>
            <p>Bring Runeston To Diamond Class!</p>
          </h1>
        </div>
      </section>
      <section className='bg-secondary py-5 lg:py-6'>
        <Marquee autoFill className='overflow-y-hidden'>
          <span className='inline-block px-8 font-sans text-3xl text-white drop-shadow-text lg:text-4xl'>
            <span className='font-mono'>$</span>RUNESTONE BLUE
          </span>
        </Marquee>
      </section>
      <section className='relative'>
        {/* Background */}
        <div className='relative'>
          <Image
            src={banner2Img}
            quality={100}
            priority
            alt=''
            className='w-full object-cover'
          />
          <img
            src='/runestone-1.gif'
            alt=''
            className='absolute left-1/2 top-0 h-[627px] max-h-[80%] -translate-x-1/2 lg:-top-16'
          />
        </div>
        {/* Content */}
        <div className='absolute inset-0'>
          <h2 className='absolute bottom-14 w-full text-center text-4xl sm:bottom-20'>
            <p>Runes are here...</p>
            <p>Bring Runestons To Diamond Class!</p>
          </h2>
        </div>
      </section>
      <section id='vision' className='relative'>
        {/* Background */}
        <Image
          src={banner3Img}
          quality={100}
          priority
          alt=''
          className='min-h-[440px] w-full object-cover'
        />
        <div className='absolute inset-0'>
          <div
            className={clsx(
              'mx-auto max-w-screen-desktop  max-desktop:px-5',
              'py-10 lg:py-16'
            )}
          >
            <h2 className='text-5xl uppercase text-primary lg:text-6xl xl:text-[64px]'>
              Vision <br /> statement
            </h2>
            <ul className='mt-14 list-inside list-["◆"] text-[10px] md:mt-20 lg:mt-32 [&_span]:multi-[`text-2xl;pl-4;translate-y-1;inline-block`]'>
              <li>
                <span>No presale</span>
              </li>
              <li>
                <span>No farming</span>
              </li>
              <li>
                <span>No secret algo</span>
              </li>
              <li>
                <span>No claim process</span>
              </li>
              <li>
                <span>No paid marketing</span>
              </li>
              <li>
                <span>No team allocation</span>
              </li>
              <li>
                <span>No favoritism to whales</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id='tokenomics' className='relative'>
        <div
          className={clsx(
            'mx-auto max-w-screen-desktop max-desktop:px-5',
            'mb-28 mt-12 flex items-center justify-between max-sm:flex-col sm:mt-20'
          )}
        >
          <h2 className='mb-0 flex-1 text-5xl uppercase text-primary sm:mb-28 lg:text-6xl xl:text-[64px]'>
            Tokenomics
          </h2>
          <div className='relative flex flex-1 items-center justify-center'>
            <img src='/runestone-1.gif' alt='' className='max-w-[50%]' />
            <video
              autoPlay
              muted
              loop
              playsInline
              preload='auto'
              className='absolute -bottom-20 w-full object-cover mix-blend-screen'
            >
              <source src='/runestone.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </section>
      <section id='contact' className='relative'>
        {/* Background */}
        <div>
          <Image
            src={banner4Img}
            quality={100}
            priority
            alt=''
            className='min-h-[440px] w-full object-cover'
          />
        </div>
        <div className='absolute inset-0 flex flex-col justify-end'>
          <div className='relative space-y-2 py-7 after:multi-[`absolute;inset-0;bg-black;opacity-50`] lg:space-y-5 lg:py-12 [&>*]:multi-[`relative;z-10`]'>
            <h2 className='text-center text-7xl lg:text-8xl'>Contact us</h2>
            <div className='flex justify-center gap-x-12 py-4 lg:gap-x-20 lg:py-8 xl:py-12'>
              <a href='https://twitter.com/RunesTon_' target='_twitter'>
                <img src='/twitter.svg' alt='' className='max-sm:w-[80px]' />
              </a>
              <a href='https://t.me/Runeston_portal' target='_telegram'>
                <img src='/telegram.svg' alt='' className='max-sm:w-[80px]' />
              </a>
            </div>
            <div className='text-center text-2xl sm:text-3xl lg:text-[32px]'>
              Email:{' '}
              <a
                href='mailto:RuneBlueStone@gmail.com'
                className='hover:multi-[`drop-shadow-text`]'
              >
                RuneBlueStone@gmail.com
              </a>
            </div>
          </div>
          <footer className='px-5 py-3 text-center text-lg uppercase'>
            © 2024 by runebluestone. All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
}
