import Image from 'next/image';
import Link from 'next/link';

const SocialLinks = () => {
  return (
    <div className='flex justify-center pb-10 space-x-3'>
      <Link href='#'>
        <Image
          src='/images/facebook.svg'
          width={40}
          height={40}
          alt='Facebook'
          className='p-2 bg-darkBlue rounded-full ficon'
        />
      </Link>
      <Link href='#'>
        <Image
          src='/images/twitter.svg'
          width={40}
          height={40}
          alt='Twitter'
          className='p-2 bg-darkBlue rounded-full ficon'
        />
      </Link>
      <Link href='#'>
        <Image
          src='/images/instagram.svg'
          width={40}
          height={40}
          alt='Instagram'
          className='p-2 bg-darkBlue rounded-full ficon'
        />
      </Link>
    </div>
  );
};
export default SocialLinks;
