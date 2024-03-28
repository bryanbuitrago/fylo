import { FEATURE_ITEMS_DATA } from './featuresData';
import FeatureItem from './FeatureItem';

const FeaturesSection = () => {
  return (
    <section
      id='features'
      className='pt-12 bg-gray-50 dark:bg-darkBlue1 mx-auto'
    >
      <div className='container mx-auto px-6 pb-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-24 text-center'>
          {FEATURE_ITEMS_DATA.map((item, index) => (
            <FeatureItem
              key={index}
              imgSrc={item.imgSrc}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
