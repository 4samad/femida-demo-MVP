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
          description="Lorem ipsum doler sit amet"
          amount="$1000"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
        />
        <BoxFeature
          id="2"
          title="Help us dasdasasd Femida"
          image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
          description="Lorem ipsum doler sit amet"
          amount="$400"
        />
      </div>
    </Section>
  </section>
);

export { ExploreCauses };
