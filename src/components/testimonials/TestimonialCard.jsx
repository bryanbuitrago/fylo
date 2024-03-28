import Image from 'next/image';

const TestimonialCard = ({
  testimonialText,
  img,
  customerName,
  companyTitle,
}) => {
  return (
    <div className='flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3'>
      {/* === Testimonail Text === */}
      <p className='text-sm leading-5 md:text-lg'>{testimonialText}</p>
      {/* === Customer Image ===*/}
      <div className='flex space-x-4'>
        <Image
          src={img}
          width={40}
          height={40}
          alt='customer'
          className='w-10 h-10 rounded-full'
        />
        <div>
          <h5 className='text-sm font-semibold'>{customerName}</h5>
          <p className='text-xs font-extralight'>{companyTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
