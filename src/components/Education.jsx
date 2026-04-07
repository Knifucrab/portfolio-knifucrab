import { EDUCATION } from '../constants';

const Education = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {EDUCATION.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap items-start lg:justify-center">
            <div className="mb-4 flex w-full justify-center lg:mb-0 lg:w-1/4 lg:justify-start">
              {item.logo ? (
                <div
                  className={`h-20 w-20 overflow-hidden rounded-xl border border-stone-700 ${
                    item.institution === 'Universidad Santo Tomas de Aquino'
                      ? 'bg-white'
                      : 'bg-stone-900/60'
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={item.logoAlt || `${item.institution} logo`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-stone-700 bg-stone-900/60 text-center text-xs text-stone-400">
                  Logo
                </div>
              )}
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-stone-400">{item.institution}</p>
              <p className="mt-1 text-sm text-stone-500">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;