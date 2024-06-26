import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown  } from 'react-icons/fa';

// const AccordionItem = ({ header, ...rest }) => (
//   <Item
//     {...rest}
//     header={({ state: { isEnter } }) => (
//       <>
//           <h3 className="text-lg font-semibold">{header}</h3>
//         <div
//           className={`ml-auto transition-transform duration-200 ease-out ${
//             isEnter && "rotate-180"
//           }`}
//         ><FaChevronDown /></div>
          
//       </>
//     )}
//     className="border-b"
//     buttonProps={{
//       className: ({ isEnter }) =>
//         `flex w-full p-2 text-left hover:bg-slate-100 ${
//           isEnter && "bg-slate-200"
//         }`
//     }}
//     contentProps={{
//       className: "transition-height duration-200 ease-out"
//     }}
//     panelProps={{ className: "p-4" }}
//   />
// );

const AccordionItem = ({ question, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
          <h3 className="text-lg">{question}</h3>
        <div
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
        >
          <FaChevronDown />
        </div>
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
      `flex w-full p-4 text-left hover:bg-slate-600 ${
        isEnter ? "bg-slate-600" : "bg-transparent"
      } transition-colors duration-200`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4 text-white" }}
  />
);

export default function FQA() {

  const questionsAndAnswers = [
    {
      question: 'What Technologies and Frameworks Do You Use?',
      answer:
        'I specialize in React, Angular, Vue, Svelte, HTML, CSS, and JavaScript. I also use supporting libraries like Tailwind CSS, Redux, and Axios for enhanced functionality and efficient development.',
    },
    {
      question: 'How Do You Ensure Cross-Browser Compatibility?',
      answer:
        'I ensure cross-browser compatibility by using best practices like responsive design, CSS resets, and thorough testing on major browsers like Chrome, Firefox, Safari, and Edge.',
    },
    {
      question: 'How Do You Approach Responsive Design?',
      answer:
        'I follow a mobile-first approach, using responsive frameworks like Bootstrap or custom media queries to ensure the website looks good on both desktop and mobile.',
    },
    {
      question: 'How Do You Ensure Good User Experience (UX)?',
      answer:
        'I focus on intuitive navigation, clean design, fast load times, and user feedback. Accessibility is a key consideration to ensure all users can engage with the website.',
    },
    {
      question: 'How Do You Handle Project Timelines and Communication?',
      answer:
        'I use project management tools like Trello, Asana, or Slack for communication and task tracking. Regular check-ins ensure clear communication and address concerns.',
    },
    {
      question: 'What Is Your Approach to Performance Optimization?',
      answer:
        'I focus on optimizing images, minimizing JavaScript and CSS, and leveraging caching strategies. I also use performance tools like Lighthouse to identify and address bottlenecks.',
    },
    {
      question: 'Do You Implement SEO Best Practices?',
      answer:
        'I incorporate SEO best practices, such as semantic HTML, proper use of meta tags, and structured data. Page load speed and mobile responsiveness are also key factors for SEO.',
    },
    {
      question: 'How Do You Handle Security?',
      answer:
        'I follow security best practices, including secure HTTP (HTTPS), input validation, and protection against common vulnerabilities like XSS and CSRF.',
    },
  ];
  

  return (
<section className="bg-slate-900 text-white py-12 md:py-12 relative">
<div className="flex flex-col md:flex-row items-center gap-8 lg:mx-10">
  <div className="md:w-2/4 py-8 md:py-12 md:mb-0 text-center md:text-left">
    <div className="flex items-center space-x-4">
      <div className="text-justify">
      <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#149ddd]">
  Frequently Asked <br/> Questions
</h2>
<p className="text-gray-100 mt-4 md:mt-6 text-base md:text-lg">
  Navigating the world of web development can be complex. I'm here to simplify the process and provide clear guidance. Below, i have compiled a list of common questions and answers to help you understand my development practices, technologies, and project management approach.
</p>

      </div>
    </div>
  </div>

  <div className="md:w-2/3 md:mb-0 my-4 border-t">
  <Accordion transition transitionTimeout={200}>
      {questionsAndAnswers.map(({ question, answer }, i) => (
        <AccordionItem  question={question} key={i}>
          <p className="text-justify">
          {answer}
          </p>
        </AccordionItem>
      ))} 
      </Accordion>
  </div>
  </div>
</section>
  );
}

