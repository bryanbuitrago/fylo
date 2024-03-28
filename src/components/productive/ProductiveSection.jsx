import Image from 'next/image';
import Link from 'next/link';

const Productive = () => {
  return (
    <section id='productive' className='bg-white dark:bg-darkBlue1 pt-24'>
      {/* Productive Container  */}
      <div
        className='container flex flex-col items-center mx-auto px-6 
                   pt-24 pb-32 md:flex-row md:space-x-16'
      >
        {/*  Image  */}
        <div className='md:w-1/2'>
          <Image
            src='/images/illustration-stay-productive.png'
            width={592}
            height={448}
            className='mb-10'
          />
        </div>
        {/* Content  */}
        <div className='flex flex-col items-start md:w-1/2'>
          <div className='flex flex-col space-y-5'>
            <h4 className='max-w-md text-xl font-bold md:text-4xl'>
              Stay productive, wherever you are
            </h4>
            <p className='text-md md:text-lg'>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className='text-md md:text-lg'>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            {/*  Link  */}
            <div className='block mt-4'>
              <Link
                href='#'
                className='border-b border-accentCyan text-accentCyan hover:cursor-pointer group text-lg'
              >
                See how Fylo works
                <Image
                  src='/images/icon-arrow.svg'
                  width={30}
                  height={30}
                  className='inline ml-1 pb-1 hover:cursor-pointer group-hover:translate-x-2 
                             transition duration-500 ease-in-out'
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productive;
