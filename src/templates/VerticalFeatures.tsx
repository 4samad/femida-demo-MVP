import { FaHandshake, FaKey, FaStar } from 'react-icons/fa6';

import { Background } from '@/background/Background';
import { VerticalFeatureRowSmall } from '@/feature/VerticalFeatureRowSmall';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <>
    <Section>
      <VerticalFeatureRow
        title="why femida"
        description="Femida was born out of a shared belief in the transformative power of giving and the growing need for a solution that bridges the gap between philanthropy and personal financial security. Our journey began with a simple yet profound observation: Many individuals genuinely desire to support charitable causes but often hesitate due to the fear of needing those funds for themselves in the future. This hesitation, this 'giving dilemma', was the problem we set out to solve."
        image="/assets/images/katt-yukawa-K0E6E0a0R3A-unsplash(1).jpg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title="the problem"
        description="The charitable giving dilemma is a universal challenge. People want to make a positive impact on the world, but they also want to safeguard their financial well-being. The fear of future financial uncertainties often acts as a barrier to charitable giving. We recognized this dilemma as a significant barrier to philanthropy and set out to address it."
        image="/assets/images/ben-koorengevel-sjuLxUOEMY8-unsplash(1).jpg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="the solution"
        description="Femida offers a groundbreaking solution to the charitable giving dilemma by binging Non-Fungible Tokens (NFTs) into the world of philanthropy. When you donate through Femida, you receive NFT tokens that represent your contribution. These NFTs serve as a financial safety net, ensuring that your generosity today doesn't jeopardize your financial security tomorrow."
        image="/assets/images/claudia-raya-liJGb5bsVQU-unsplash(2).jpg"
        imageAlt="Third feature alt text"
      />
    </Section>
    <Background color="bg-neutral-100">
      <Section>
        <VerticalFeatureRowSmall
          title="secure"
          description="Donors can give confidently, knowing that their donations are not only making a difference in the world but also safeguarding their own future needs."
          reverse
          icon={<FaKey size={80} color="#d1d1d1" />}
        />
        <VerticalFeatureRowSmall
          title="transparent"
          description="Our use of blockchain technology and smart contracts ensures complete transparency and trust in the charitable process."
          reverse
          icon={<FaHandshake size={80} color="#d1d1d1" />}
        />
        <VerticalFeatureRowSmall
          title="impactful"
          description="We collaborate with a network of reputable NGOs to verify and support impactful projects, amplifying the positive change donors can make."
          reverse
          icon={<FaStar size={80} color="#d1d1d1" />}
        />
        <div className="h-10" />
      </Section>
    </Background>
    <Section title="f.a.q" yPadding="py-32">
      <div className="m-auto mt-10 max-w-5xl text-center">
        <h3 className="mb-4 text-3xl font-bold">
          What technology powers Femida?
        </h3>
        <p>
          Femida leverages blockchain technology and smart contracts to ensure
          transparency and trust in the donation process. We also use NFTs
          (Non-Fungible Tokens) to represent contributions.
        </p>
        <hr className="my-10" />
        <h3 className="mb-4 text-3xl font-bold">
          What are NFTs, and how do they work on Femida
        </h3>
        <p>
          NFTs, or Non-Fungible Tokens, are unique digital assets that represent
          your donations. When you make a donation on Femida, you receive an NFT
          that symbolizes your contribution and future financial security.
        </p>
        <hr className="my-10" />
        <h3 className="mb-4 text-3xl font-bold">
          Are there any fees associated with using Femida?
        </h3>
        <p>
          Femida may charge nominal transaction fees to cover blockchain network
          costs. These fees are transparently communicated during the donation
          process.
        </p>
        <hr className="my-10" />
        <h3 className="mb-4 text-3xl font-bold">
          Can I trade or sell my NFTs to others?
        </h3>
        <p>
          Yes, you have the flexibility to trade or sell your NFTs to others.
          They can be transferred to different wallet addresses if desired.
        </p>
        <hr className="my-10" />
        <h3 className="mb-4 text-3xl font-bold">
          How can I participate in Femida&apos;s token reward system?
        </h3>
        <p>
          To earn tokens, you can make your donations permanent by burning your
          NFTs. These tokens may also serve a governance function within the
          Femida platform.
        </p>
      </div>
    </Section>
  </>
);

export { VerticalFeatures };
