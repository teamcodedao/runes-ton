'use client';

import clsx from 'clsx';

import {useHash} from '@/lib/use-hash';
import {useMounted} from '@/lib/use-mounted';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger}: NavProps) {
  const hash = useHash();
  const isMounted = useMounted();

  return (
    <ul
      className={clsx(
        className,
        'text-[2rem]',
        '[&_a]:multi-[`block;whitespace-nowrap;transition;border-y-2;border-transparent`]',
        'hover:[&_a]:multi-[`border-white/60`]',
        {
          'flex gap-x-10': !isHamburger,
          '[&_a[aria-current=true]]:multi-[`text-primary`]': isMounted,
        }
      )}
    >
      <li>
        <a href='#' aria-current={!hash || hash === '#'}>
          Home
        </a>
      </li>
      {/* <li>
        <a href='/#about' aria-current={hash === '#about'}>About</a>
      </li> */}
      <li>
        <a href='/#vision' aria-current={hash === '#vision'}>
          Vision
        </a>
      </li>
      <li>
        <a href='/#tokenomics' aria-current={hash === '#tokenomics'}>
          Tokenomics
        </a>
      </li>
      <li>
        <a href='/#contact' aria-current={hash === '#contact'}>
          Contact Us
        </a>
      </li>
    </ul>
  );
}
