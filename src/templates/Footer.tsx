import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

import { SocialIcon } from '@/socialIcon/SocialIcon';

import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <CenteredFooter
        logo={
          <span className="inline-flex items-center">
            <Image
              className="p-2"
              src="/logo-transparent-black.png"
              alt="Femida Logo"
              height={80}
              width={200}
            />
          </span>
        }
        iconList={
          <>
            <a
              href="https://www.linkedin.com/company/femida-app/"
              target="_blank"
            >
              <SocialIcon color="dark">
                <FaLinkedin />
              </SocialIcon>
            </a>
            <a href="https://x.com/femida_app" target="_blank">
              <SocialIcon color="dark">
                <FaTwitter />
              </SocialIcon>
            </a>
            <a href="https://instagram.com/femida.app" target="_blank">
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
