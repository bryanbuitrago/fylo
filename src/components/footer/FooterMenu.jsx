const FooterMenu = () => {
  return (
    <div className='flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row'>
      <div className='flex flex-col space-y-3'>
        <a href='#'>About Us</a>
        <a href='#'>Jobs</a>
        <a href='#'>Press</a>
        <a href='#'>Blog</a>
      </div>
      <div className='flex flex-col space-y-3'>
        <a href='#'>Contact Us</a>
        <a href='#'>Terms</a>
        <a href='#'>Privacy</a>
      </div>
    </div>
  );
};
export default FooterMenu;
