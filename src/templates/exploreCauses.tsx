import { BoxFeature } from '@/feature/BoxFeature';

import { Section } from '../layout/Section';

const ExploreCauses = () => (
  <section id="explore-causes">
    <Section>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <BoxFeature
          id="1"
          title="Help us build Femida"
          image="/assets/images/femida-cause-cover-image.png"
          description="Femida can be a massive contribution to solving world poverty or climate crisis by compelling people to invest more in these causes. Help us make this a reality."
          amount="$1000"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
        <BoxFeature
          id="1"
          title="Educate tribal children in India"
          image="/assets/images/femida-cause-cover-image.png"
          description="We educate poor tribal children in a sustainable way. We make sure they finish school, colleges and get decent jobs so that they empower themselves."
          amount="$6000"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
      </div>
    </Section>
  </section>
);

export { ExploreCauses };
