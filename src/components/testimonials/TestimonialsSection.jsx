import Image from 'next/image';
import TestimonialCard from './TestimonialCard';
import { TESTIMONIALS_DATA } from './testimonialsData';

const TestimonialsSection = () => {
  return (
    <section id='testimonials' className='bg-gray-50 dark:bg-darkBlue'>
      <div className='mx-auto px-20 pt-12 pb-80 md:pb-96'>
        <div className='relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12'>
          <Image
            src='/images/bg-quotes.png'
            width={60}
            height={60}
            alt='quotes'
            className='absolute left-1 -top-2 w-10 md:-top-16 md:w-20'
          />
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonialText={testimonial.testimonialText}
              img={testimonial.img}
              customerName={testimonial.customerName}
              companyTitle={testimonial.companyTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
