import { Meta } from '@/layout/Meta';
import { Banner } from '@/templates/Banner';
import { ExploreCauses } from '@/templates/exploreCauses';
import { Footer } from '@/templates/Footer';
import { HeroSmall } from '@/templates/heroSmall';
import { AppConfig } from '@/utils/AppConfig';

const Explore = () => (
  <div className="text-gray-600 antialiased">
    <Meta
      title={`Explore - ${AppConfig.title}`}
      description={AppConfig.description}
    />
    <HeroSmall />
    <ExploreCauses />
    <Banner />
    <Footer />
  </div>
);

export default Explore;
