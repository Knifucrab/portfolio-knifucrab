import { HERO_CONTENT } from '../constants';

import Technologies from './Technologies';

const Hero = () => {
  return (
    <div className="lg:mb-20">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl">
            Mauro Bringas
          </h2>
          <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
            {' '}
            Front End Developer
          </span>
          <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            {HERO_CONTENT}
          </p>
          <a
            href="/Mauro_Bringas_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
          >
            Download Resume
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

export default Hero;
