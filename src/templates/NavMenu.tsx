import Link from 'next/link';

import { Section } from '@/layout/Section';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Logo } from './Logo';

const NavMenu = () => {
  return (
    <div>
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo />}>
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/explore">explore</Link>
          </li>
        </NavbarTwoColumns>
      </Section>
    </div>
  );
};

export { NavMenu };
