import Image from 'next/image';

const ContactInfo = () => {
  return (
    <div className='mt-10 space-y-6'>
      <div className='flex items-center space-x-3 md:-mt-10'>
        <Image
          src='/images/icon-phone.svg'
          width={24}
          height={24}
          alt='Phone'
        />
        <span>+1-543-123-4567</span>
      </div>
      <div className='flex items-center space-x-3'>
        <Image
          src='/images/icon-email.svg'
          width={24}
          height={24}
          alt='Email'
        />
        <span>email@fylo.com</span>
      </div>
    </div>
  );
};
export default ContactInfo;
