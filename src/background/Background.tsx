import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
  image?: string; // Optional background image
};

const Background = (props: IBackgroundProps) => {
  const router = useRouter();

  return (
    <div className={`${props.color} relative`}>
      {props.image && (
        <Image
          src={`${router.basePath}${props.image}`}
          fill
          className="z-0 object-cover"
          alt=""
        />
      )}
      <div className="relative z-10">{props.children}</div>
    </div>
  );
};

export { Background };
