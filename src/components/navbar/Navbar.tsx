'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

const navLink = [
  { name: 'home', route: '/' },
  { name: 'film', route: '/film' },
  { name: 'photography', route: '/photography' },
  { name: 'blog', route: '/blog' },
  { name: 'about', route: '/about' },
  { name: 'contact', route: '/contact' },
  { name: 'newsletter', route: '/newsletter' },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className='h-138px w-full px-16 flex items-center justify-center bg-white_color/90 absolute top-0 left-0 right-0'>
      <div className='w-full max-w-800px flex items-center justify-between'>
        <Image
          className='ml-4'
          src={'/assets/images/logo.png'}
          width={170}
          draggable={false}
          height={128}
          alt='art by tha-toe'
          priority={false}
        />

        <nav>
          <ul className='flex items-center'>
            {navLink.map((item, index) => (
              <li key={index}>
                <Link
                  className={classNames('uppercase px-10px transition-colors duration-500 hover:text-yellow_color', {
                    'text-cyan_color': item.route === pathname,
                  })}
                  href={item.route}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
