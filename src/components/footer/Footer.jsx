import ContactInfo from './ContactInfo';
import FooterMenu from './FooterMenu';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className='bg-darkBlue2 text-white'>
      <div className='container mx-auto px-5 pb-10'>
        <div className='flex flex-col items-center justify-between space-y-24 md:flex-row md:space-y-0'>
          <ContactInfo />
          <FooterMenu />
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
