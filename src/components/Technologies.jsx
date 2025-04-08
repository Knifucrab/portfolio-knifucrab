import { RiReactjsLine } from 'react-icons/ri';
import {
  SiRedux,
  SiExpress,
  SiExpo,
  SiTypescript,
  SiMongodb,
} from 'react-icons/si';

const Technologies = () => {
  return (
    <div className="pb-12">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <SiTypescript className="text-7xl text-blue-500" />
        </div>
        <div className="p-4">
          <SiRedux className="text-7xl text-purple-500" />
        </div>
        <div className="p-4">
          <SiExpo className="text-7xl text-white" />
        </div>
        <div className="p-4">
          <SiExpress className="text-7xl" />
        </div>
        <div className="p-4">
          <SiMongodb className="text-7xl text-green-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
