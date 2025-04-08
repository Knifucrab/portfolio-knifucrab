import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Import React Icons

const Projects = ({ PROJECTS, Title }) => {
  const [currentIndexes, setCurrentIndexes] = useState(
    PROJECTS.map(() => 0) // Initialize an array of indexes for each project
  );

  const handlePrev = (projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? index === 0
            ? PROJECTS[projectIndex].media.length - 1
            : index - 1
          : index
      )
    );
  };

  const handleNext = (projectIndex) => {
    setCurrentIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? index === PROJECTS[projectIndex].media.length - 1
            ? 0
            : index + 1
          : index
      )
    );
  };

  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">{Title}</h2>
      <div>
        {PROJECTS.map((project, projectIndex) => (
          <div
            key={projectIndex}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <div className="w-full lg:w-1/2 relative flex justify-center items-center">
              {project.media[currentIndexes[projectIndex]].type === 'image' ? (
                <img
                  src={project.media[currentIndexes[projectIndex]].src}
                  alt={project.title}
                  className={`mb-6 rounded ${
                    Title === 'React Native Projects'
                      ? 'h-[600px] object-cover'
                      : ''
                  }`}
                />
              ) : (
                <iframe
                  height="600"
                  src={project.media[currentIndexes[projectIndex]].src}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mb-6 rounded"
                ></iframe>
              )}
              <button
                onClick={() => handlePrev(projectIndex)}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-stone-900 text-white p-4 rounded-2xl"
              >
                &#8592;
              </button>
              <button
                onClick={() => handleNext(projectIndex)}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-stone-900 text-white p-4 rounded-2xl"
              >
                &#8594;
              </button>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 lg:ml-5">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              <div className="flex flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    className="mr-2 mb-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Buttons Section */}
              <div className="mt-4 flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                )}
                {project.previewLink && (
                  <a
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-stone-900 text-white px-4 py-2 rounded-lg hover:bg-stone-700 transition"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Preview
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
