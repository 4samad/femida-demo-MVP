import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavMenu } from './NavMenu';

const Hero = () => (
  <Background color="bg-gray-900" image="/assets/images/bg-children.jpg">
    <NavMenu />

    <Section yPadding="py-32">
      <HeroOneButton
        title={<>{'turn donations into assets you can get back'}</>}
        button={
          <Link href="/explore">
            <Button xl>explore fundraisers</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
