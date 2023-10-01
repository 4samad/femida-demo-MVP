import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

import { SocialIcon } from '@/socialIcon/SocialIcon';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={<Logo />}
        iconList={
          <>
            <a href="https://vm.tiktok.com/ZSLTYjakE/" target="_blank">
              <SocialIcon color="dark">
                <FaLinkedin />
              </SocialIcon>
            </a>
            <a href="https://vm.tiktok.com/ZSLTYjakE/" target="_blank">
              <SocialIcon color="dark">
                <FaTwitter />
              </SocialIcon>
            </a>
            <a href="https://vm.tiktok.com/ZSLTYjakE/" target="_blank">
              <SocialIcon color="dark">
                <FaInstagram />
              </SocialIcon>
            </a>
          </>
        }
      >
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/explore">explore</Link>
        </li>
        <li>
          <Link href="https://github.com/4samad/femida-demo-MVP">gitHub</Link>
        </li>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
