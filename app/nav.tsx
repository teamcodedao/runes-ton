import clsx from 'clsx';

interface NavProps extends React.ComponentProps<'ul'> {
  isHamburger?: boolean;
}

export default function Nav({className, isHamburger}: NavProps) {
  return (
    <ul
      className={clsx(className, 'text-[2rem]', '[&_a]:whitespace-nowrap', {
        '': isHamburger,
        'flex gap-x-10': !isHamburger,
      })}
    >
      <li>
        <a href='#'>Home</a>
      </li>
      {/* <li>
        <a href='/#about'>About</a>
      </li> */}
      <li>
        <a href='/#vision'>Vision</a>
      </li>
      <li>
        <a href='/#tokenomics'>Tokenomics</a>
      </li>
      <li>
        <a href='/#contact'>Contact Us</a>
      </li>
    </ul>
  );
}
