import { Logo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>          
            <img
              src={Logo}
              alt='logo'
              width={50}
              height={46}
              className='m-0'
            />          
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm text-white'>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>        

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white hover:text-gray-500 cursor-pointer'
                    key={link.name}
                  >
                    <p>{link.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}          
        </div>
      </div>

      <div className="max-container flex justify-between items-center max-lg:flex-col gap-10 mt-12">
        <div className="flex items-center gap-5 mt-8">
          <p className="font-semibold text-montserrat text-white">Made by Deepan. All right reserved</p>
        </div>

      
        <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon) => (
            <div
              className='flex justify-center items-center w-12 h-12 rounded-full'
              key={icon.alt}
            >
              <img src={icon.src} alt={icon.alt} width={40} height={40} />
            </div>
          ))}
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;