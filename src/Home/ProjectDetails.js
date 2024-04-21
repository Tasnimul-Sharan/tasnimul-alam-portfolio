// import React, { useEffect, useState } from "react";
// import { Button, Card, Carousel } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import useProject from "./Hooks/useProject";

// const ProjectDetails = () => {
//   const { projectId } = useParams();
//   // const [project, setProject] = useState([]);
//   // const [projects] = useProject(projectId);
//   // useEffect(() => {
//   //   fetch(`https://tasnimul-portfolio-server.vercel.app/projects/${projectId}`)
//   //     .then((res) => res.json())
//   //     .then((data) => setProject(data));
//   // }, []);
//   // const [reload, setReload] = useState(true);
//   const [projects, setProjects] = useState([]);
//   useEffect(() => {
//     fetch(`https://tasnimul-portfolio-server.vercel.app/projects/${projectId}`)
//       .then((res) => res.json())
//       .then((data) => setProjects(data));
//     // setReload(!reload);
//   }, []);

//   return (
//     <section className="">
//       <h1 className="text-primary">Project Details </h1>
//       <div class="container my-5">
//         <div class="row gy-4">
//           <div class="col-lg-8">
//             <Carousel>
//               <Carousel.Item interval={1000}>
//                 <img
//                   className="d-block w-100"
//                   src={projects?.picture}
//                   alt="First slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item interval={500}>
//                 <img
//                   className="d-block w-100"
//                   src={projects?.pictureTwo}
//                   alt="Second slide"
//                 />
//               </Carousel.Item>
//               <Carousel.Item>
//                 <img
//                   className="d-block w-100"
//                   src={projects?.pictureThree}
//                   alt="Third slide"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>

//           <div class="col-lg-4">
//             <Card
//               className="shadow-lg bg-dark text-white"
//               style={{ width: "20rem" }}
//             >
//               {/* <h3>Project information</h3> */}
//               <h5> {projects?.name}</h5>
//               <ul>
//                 <li>{projects?.detailsOne}</li>
//                 <li>{projects?.detailsTwo}</li>
//                 <li>{projects?.detailsThree}</li>
//                 <li>{projects?.detailsFour}</li>
//                 <li>{projects?.detailsFive}</li>
//               </ul>
//               <Card.Footer className="border-0 d-flex justify-content-between">
//                 <a target="_blank" rel="noreferrer" href={projects?.ProjectUrl}>
//                   <Button variant="outline-primary">Live Website</Button>
//                 </a>
//                 <a target="_blank" rel="noreferrer" href={projects?.gitHubLink}>
//                   <Button variant="outline-success">Github Link</Button>
//                 </a>
//               </Card.Footer>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;

// import React, { useEffect, useState } from "react";

// import { Link, useParams } from "react-router-dom";
// import useProject from "./Hooks/useProject";
// import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
// import 'react-awesome-slider/dist/custom-animations/open-animation.css';
// import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
// import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
// import 'react-awesome-slider/dist/styles.css';
// import AwesomeSlider from 'react-awesome-slider';

// const ProjectDetails = () => {

//   const AutoplaySlider = withAutoplay(AwesomeSlider);

//   const photos = [
//     {
//       src: "https://i.ibb.co/dgHM5tf/Project-3.png",
//       // width: 1600,
//       // height: 900,
//     },
//     {
//       src: "https://i.ibb.co/rxXgbmv/picture-Two.png",
//       // height: 900,
//     },
//     {
//       src: "https://i.ibb.co/3yR839P/picture-Three.png",
//       // width: 1600,
//       // height: 900,
//     },
   
//   ];

//   const projects = {
//     _id: "62a105ec9ab49447dc1895e8",
//     picture: "https://i.ibb.co/dgHM5tf/Project-3.png",
//     pictureTwo: "https://i.ibb.co/rxXgbmv/picture-Two.png",
//       pictureThree: "https://i.ibb.co/3yR839P/picture-Three.png",
//     name: "Rapid Learner",
//     description:
//       "It's an individual service provider website. In the home page, there are only five sections...",
//     detailsOne: "Implemented Firebase Authentication System, Using a Private route.",
//     detailsTwo: "After login, when you enroll it will take you to the checkout page.",
//     detailsThree: "Make the full website responsive for mobile devices and large devices.",
//     ProjectUrl: "https://independent-service-prov-ba570.web.app/",
//     gitHubLink: "https://github.com/Tasnimul-Sharan/-independent-service-provider-website",
//   };

//   return (
//     <section className="bg-gray-100 py-8">
//       <div className="container mx-auto">
//         <h1 className="text-2xl font-semibold text-primary mb-8">Project Details</h1>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           <div className="lg:col-span-1">
//           <AutoplaySlider
//      play={true}
//      cancelOnInteraction={false} 
//      interval={3000}
//      animation="cubeAnimation"
//      // animation="openAnimation"
//      // animation="fallAnimation"
//    >

//        {photos.map((photo, idx) => (
//         <div
//         data-src={photo.src} 
//         key={idx}
//         alt={photo.alt}
//         className="cursor-pointer w-auto"
//         />
//         ))}

//   </AutoplaySlider>
//           </div>
//           <div className="lg:col-span-1 bg-white rounded-lg p-4 shadow-md">
//             <h5 className="text-xl font-semibold mb-4">{projects?.name}</h5>
//             <ul className="list-disc pl-4">
//               <li>{projects?.detailsOne}</li>
//               <li>{projects?.detailsTwo}</li>
//               <li>{projects?.detailsThree}</li>
//               <li>{projects?.detailsFour}</li>
//               <li>{projects?.detailsFive}</li>
//             </ul>
//             <div className="mt-4 flex justify-center">
//   <a
//     target="_blank"
//     rel="noreferrer"
//     href={projects?.ProjectUrl}
//     className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 text-white text-sm font-semibold rounded-md hover:bg-slate-700 transition-all duration-300 ease-in-out"
//   >
//     Live Website
//   </a>

//   <a
//     target="_blank"
//     rel="noreferrer"
//     href={projects?.gitHubLink}
//     className="inline-flex items-center justify-center px-4 py-2 ml-2 bg-green-500 text-white text-sm font-semibold rounded-md hover:bg-green-600 transition-all duration-300 ease-in-out"
//   >
//     GitHub Link
//   </a>
// </div>

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectDetails;



import React from "react";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const AutoplaySlider = withAutoplay(require("react-awesome-slider").default);

  const projects = {
    _id: "62a105ec9ab49447dc1895e8",
    picture: "https://i.ibb.co/dgHM5tf/Project-3.png",
    pictureTwo: "https://i.ibb.co/rxXgbmv/picture-Two.png",
    pictureThree: "https://i.ibb.co/3yR839P/picture-Three.png",
    name: "Rapid Learner",
    description:
      "It's an individual service provider website. In the home page, there are only five sections...",
    detailsOne: "Implemented Firebase Authentication System, Using a Private route.",
    detailsTwo: "After login, when you enroll, it will take you to the checkout page.",
    detailsThree:
      "Made the website responsive for mobile devices and large screens.",
    detailsFour:
      "Created a Blogs page, containing Q&A.",
    detailsFive: "Developed 'My Successful Students' and 'About Me' sections.",
    ProjectUrl: "https://independent-service-prov-ba570.web.app/",
    gitHubLink: "https://github.com/Tasnimul-Sharan/-independent-service-provider-website",
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
            <ul className="list-disc pl-6">
              <li>{projects.detailsOne}</li>
              <li>{projects.detailsTwo}</li>
              <li>{projects.detailsThree}</li>
              <li>{projects.detailsFour}</li>
              <li>{projects.detailsFive}</li>
            </ul>

            <div className="mt-6 flex">
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

export default ProjectDetails;
