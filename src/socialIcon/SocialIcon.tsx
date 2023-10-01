import className from 'classnames';
import type { ReactNode } from 'react';

type ISocialIconProps = {
  color: string;
  children: ReactNode;
};

const SocialIcon = (props: ISocialIconProps) => {
  return (
    <div className="opacity-80 hover:opacity-90">
      <div className={className(`text-${props.color}`)}>{props.children}</div>
    </div>
  );
};

export { SocialIcon };
