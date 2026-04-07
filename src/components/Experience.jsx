import { EXPERIENCES } from '../constants';

const Experience = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="flex w-full flex-col items-center justify-center text-center lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{experience.year}</p>
              {experience.companyLogo ? (
                <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border border-stone-700 bg-white">
                  <img
                    src={experience.companyLogo}
                    alt={`${experience.company} logo`}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              ) : null}
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} - {''}
                {experience.companyLink ? (
                  <a
                    href={experience.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-stone-500 underline-offset-4 hover:underline"
                  >
                    {experience.company}
                  </a>
                ) : (
                  <span className="text-sm text-stone-500">
                    {experience.company}
                  </span>
                )}
                <p className="mb-4 text-stone-400">{experience.description}</p>
                {experience.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
