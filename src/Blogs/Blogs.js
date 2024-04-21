import React from 'react';
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
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
    panelProps={{ className: "p-4" }}
  />
);

const Blogs = () => {
  const faqItems = [
    {
      header: "Why are you using Firebase? What other options do you have to implement authentication?",
      content: (
        <p>
          Firebase offers a complete set of tools and services for building applications. It includes a secure authentication system that enhances the user experience. 
          Alternative authentication options include Parse, Back4app, Kinvey, Backendless, and others.
        </p>
      ),
    },
    {
      header: "What other services does Firebase provide other than authentication?",
      content: (
        <p>
          Firebase provides various services in addition to authentication, including Cloud Firestore, Cloud Functions, Google Analytics, Hosting, Cloud Storage, Predictions, Remote Config, Dynamic Links, and Cloud Messaging.
        </p>
      ),
    },
    {
      header: "What is the difference between JavaScript and Node.js?",
      content: (
        <p>
          JavaScript is a client-side programming language, while Node.js is a server-side runtime environment. JavaScript is used for frontend development, and Node.js is used for backend applications.
        </p>
      ),
    },
    {
      header: "When should you use Node.js, and when should you use MongoDB?",
      content: (
        <p>
          Node.js is suitable for event-driven, non-blocking servers, often used in real-time applications. MongoDB, a NoSQL database, is ideal for document-centric data and large-scale applications.
        </p>
      ),
    },
    {
      header: "What is the difference between SQL and NoSQL databases?",
      content: (
        <p>
          SQL databases are relational and use structured query language, while NoSQL databases offer a dynamic schema and are non-relational. SQL databases are vertically scalable, and NoSQL databases are horizontally scalable.
        </p>
      ),
    },
    {
      header: "What is the purpose of JWT, and how does it work?",
      content: (
        <p>
          JWT (JSON Web Token) is an open standard for sharing security information between two parties, typically a client and a server. It contains encoded JSON objects with a set of claims and is signed using a cryptographic algorithm to ensure claims cannot be altered.
        </p>
      ),
    },
    {
      header: "What are the different ways to manage state in a React application?",
      content: (
        <p>
          State management in React involves local state, global state, server state, and URL state. Proper state management ensures a consistent user experience in React applications.
        </p>
      ),
    },
    {
      header: "How does prototypical inheritance work in JavaScript?",
      content: (
        <p>
          Prototypical inheritance allows an object to point to another object and inherit its properties. It promotes flexibility and code reuse, enabling objects to inherit properties and methods from other objects or constructor functions.
        </p>
      ),
    },
    {
      header: "Why shouldn't you set state directly in React?",
      content: (
        <p>
          Directly setting state in React can cause unexpected behavior and does not trigger React's re-rendering process. Always use `setState()` or other state management techniques to ensure consistent state updates.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-12 md:py-12 relative">
      <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#149ddd] mb-4">
        Some Important Questions And Answers
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 lg:mx-10">
        <div className="md:w-full md:mb-0 my-4 border-t">
          <Accordion transition transitionTimeout={200}>
            {faqItems.map(({ header, content }, i) => (
              <AccordionItem header={header} key={i}>
                <p className="text-justify">
                {content}
                </p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

