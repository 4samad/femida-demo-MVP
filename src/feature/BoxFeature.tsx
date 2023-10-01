import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button } from '@/button/Button';

type IBoxFeatureProps = {
  title: string;
  description?: string;
  image?: string;
  amount?: string;
  id: string;
};

const BoxFeature = (props: IBoxFeatureProps) => {
  const verticalFeatureClass = className(
    'min-h-64',
    'w-[480px] max-w-full',
    'bg-white',
    'drop-shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:drop-shadow-[0_10px_40px_rgba(0,0,0,0.12)]',
    'p-4',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      {props.image && (
        <Image
          src={`${router.basePath}${props.image}`}
          alt={props.title}
          height={300}
          width={480}
        />
      )}
      <div className="p-4">
        <div className="text-xl font-semibold text-[#444]">{props.title}</div>
        {props.description && <p className="mt-4">{props.description}</p>}
        <div className="mt-8 flex flex-row-reverse justify-between">
          <Button>donate now</Button>
          {props.amount && (
            <span className="text-2xl font-bold text-neutral-700">
              {props.amount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { BoxFeature };
