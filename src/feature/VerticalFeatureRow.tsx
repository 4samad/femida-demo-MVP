import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
  icon?: ReactNode;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
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
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="text-3xl font-semibold text-gray-900">{props.title}</h3>
        <div className="mt-6 text-xl leading-9">{props.description}</div>
      </div>
      {props.image && props.imageAlt && (
        <div className="w-full p-6 sm:w-1/2">
          <Image
            className="rounded-lg"
            height={400}
            width={400}
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
          />
        </div>
      )}
    </div>
  );
};

export { VerticalFeatureRow };
