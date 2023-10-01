import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="interested in helping us build femida?"
      subtitle="let's get in touch"
      button={
        <Link
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfUUFEa8fT-5PA8F_DOMKtY4PuKWu_BDD19AwoTy2PU66y_Sw/viewform?usp=sf_link"
        >
          <Button>contribute</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
