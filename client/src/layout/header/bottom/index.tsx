import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { HeaderLinkProps } from '../../../interface';
import { COMMON, LAYOUT_STYLES } from '../../../constants';
import { Button } from '../../../components';

const STYLES = LAYOUT_STYLES;

export const HeaderBottom: FC = () => {
  const links: HeaderLinkProps[] = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'About',
      to: '/about',
    },
    {
      name: 'Latest Causes',
      to: '/causes',
    },
    {
      name: 'Social Events',
      to: '/social-events',
    },
    {
      name: 'Contact',
      to: '/contact',
    },
    {
      name: 'Blog',
      to: '/blog',
    }
  ];

  return (
    <header className="bg-white py-2.5 w-full smooth-shadow">
      <div className="container mx-auto w-full pr-10">
        <div className="flex items-center justify-between max-w-full">
          <div>
            <img src={COMMON.LOGO} alt="Logo" className="w-36" />
          </div>
          <div className="flex items-center gap-x-12">
            <ul className="flex items-center gap-x-12">
              {links.map((link, index) => (
                <li className={STYLES.LINK} key={index}>
                  <Link to={link.to}>{link.name}</Link>
                </li>
              ))}
            </ul>
            <Button
              value="Donate Now"
            />
          </div>
        </div>
      </div>
    </header>
  );
};