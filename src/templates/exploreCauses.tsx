import { BoxFeature } from '@/feature/BoxFeature';

import { Section } from '../layout/Section';

const ExploreCauses = () => (
  <section id="explore-causes">
    <Section>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        <BoxFeature
          id="1"
          title="Help us Build Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Femida can be a massive contribution to solving world poverty or climate crisis by compelling people to invest more in these causes. Help us make this a reality."
          amount="$1000"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
          link="https://donate.stripe.com/cN215t5HG9Lrc809AK"
        />
      </div>
    </Section>
  </section>
);

export { ExploreCauses };
