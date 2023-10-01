import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IVerticalFeatureRowSmallProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  icon?: ReactNode;
};

const VerticalFeatureRowSmall = (props: IVerticalFeatureRowSmallProps) => {
  const verticalFeatureClass = className(
    'mt-24',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div
        className={className(
          'w-full sm:w-5/6 sm:px-6',
          props.reverse ? 'text-left' : 'text-right',
        )}
      >
        <h3 className="text-4xl font-bold text-[#091E5F]">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>

      <div className="w-full p-6 sm:w-1/6">
        {props.image && props.imageAlt && (
          <Image
            height={200}
            width={200}
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        )}
        {props.icon && props.icon}
      </div>
    </div>
  );
};

export { VerticalFeatureRowSmall };
