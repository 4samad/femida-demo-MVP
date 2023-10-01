import Image from 'next/image';

const Logo = () => {
  return (
    <span className="inline-flex items-center">
      <Image
        src="/logo-transparent.png"
        alt="Femida Logo"
        height={80}
        width={200}
      />
    </span>
  );
};

export { Logo };
