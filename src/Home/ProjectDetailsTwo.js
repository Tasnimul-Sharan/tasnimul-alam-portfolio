
import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from 'react-awesome-slider';

const ProjectDetailsTwo = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const projects =   {
    _id: "62a105ec26cac1f2d147d879",
    picture: "https://i.ibb.co/x1zfN61/projects-2.png",
    pictureThree: "https://i.ibb.co/QQJnsx1/picture-Four.png",
    pictureTwo: "https://i.ibb.co/3f0H2sK/picture-Five.png",
    name: "The Gadget gone",
    description: "It's a warehouse related website.Electronics product related.In this website first i have created a simple navbar.In the navbar there are home, gadget, blogs, about, my item, add item, manage item etc pages.in the home page there are five sections.In the gadget section you can see all the gadget items.",
    path: "/projetdetail",
    detailsOne: "Implemented add items, my items, manage items, and delete button.",
    detailsTwo: "Implemented firebase authentication system and one social authentication system.",
    detailsThree: "Implemented update and restock product quantity.",
    detailsFour: "Make the full website responsive for mobile and large device",
    detailsFive: "implemented jwt token in client side and verify it in server side.",
    ProjectUrl: "https://warehouse-management-264df.web.app/",
    gitHubLink: "https://github.com/Tasnimul-Sharan/warehouse-management-client-side"
  };

  const photos = [
    {
      src: projects.picture,
    },
    {
      src: projects.pictureTwo,
    },
    {
      src: projects.pictureThree,
    },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-primary mb-8">
          Project Details
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={3000}
              animation="cubeAnimation"
            >
              {photos.map((photo, idx) => (
                <div
                  key={idx}
                  data-src={photo.src}
                  alt={`Project Image ${idx + 1}`}
                  className="w-auto rounded-md"
                />
              ))}
            </AutoplaySlider>
          </div>

          <div className="lg:col-span-1 bg-white rounded-lg p-6 shadow-md">
            <h5 className="text-xl font-semibold mb-4">{projects.name}</h5>
            <ul className="list-disc text-justify pl-6">
              <li>{projects.detailsOne}</li>
              <li>{projects.detailsTwo}</li>
              <li>{projects.detailsThree}</li>
              <li>{projects.detailsFour}</li>
              <li>{projects.detailsFive}</li>
            </ul>

            <div className="mt-6 flex justify-center">
              <a
                target="_blank"
                rel="noreferrer"
                href={projects.ProjectUrl}
                className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
              >
                Live Website
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href={projects.gitHubLink}
                className="inline-flex items-center justify-center px-4 py-2 ml-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
              >
                GitHub Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsTwo;