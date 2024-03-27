import Image from 'next/image';

const FeatureItem = ({ title, text, imgSrc }) => {
  return (
    <div className='flex flex-col items-center space-y-2 md:w-1/2'>
      <div className='flex items-center justify-center h-24 mb-6'>
        <Image src={imgSrc} width={50} height={50} />
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <p className='max-w-sm'>{text}</p>
    </div>
  );
};

export default FeatureItem;
