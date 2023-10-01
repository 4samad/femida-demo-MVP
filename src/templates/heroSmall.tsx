import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavMenu } from './NavMenu';

const HeroSmall = () => (
  <Background color="bg-gray-900">
    {/* <Background color="bg-gray-900" image="/assets/images/bg-children.jpg"> */}
    <NavMenu />

    <Section yPadding="py-6 pb-10">
      <HeroOneButton title={<>{'explore causes'}</>} />
    </Section>
  </Background>
);

export { HeroSmall };
