import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  button?: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="grid gap-6 text-center">
    <h1 className="m-auto mb-8 max-w-3xl whitespace-pre-line text-4xl font-bold text-white lg:text-6xl lg:leading-hero">
      {props.title}
    </h1>
    {props.button && <>{props.button}</>}
  </header>
);

export { HeroOneButton };
