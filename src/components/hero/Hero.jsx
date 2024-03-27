import Image from 'next/image';
const Hero = () => {
  return (
    <div>
      <section
        id='hero'
        className='bg-curvy-light-mode dark:bg-curvy-dark-mode 
                     bg-no-repeat bg-contain bg-bottom'
      >
        <div className='container mx-auto px-6 text-center md:pt-4 pb-52'>
          <Image
            src='/images/illustration-intro.png'
            width={750}
            height={750}
            className='mx-auto'
          />
          <h1
            className='max-w-2xl mx-auto mb-10 text-3xl 
                       font-bold leading-normal mt-14 md:text-4xl'
          >
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className='max-w-sm mx-auto mb-10 text-sm md:max-w-xl md:text-lg'>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button
            type=''
            className='p-3 rounded-full w-52 bg-accentCyan hover:scale-95 duration-300'
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
