import React from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import contract from "../../src/images/contract.jpg";

const Contract = () => {
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_38i0g0r",
        "template_qurk0ng",
        e.target,
        "Bt4fEQO7x7yDOUxOd"
      );
      swal("Thank you", "Email sent", "success");
      e.target.reset();
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <section className="py-16">
      <h1 className="text-primary text-4xl text-center">Contact Me</h1>
      <h3 className="text-info text-2xl text-center">Stay Connected With Me</h3>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center mt-10">
        <div
          className="md:w-2/3 md:mr-10 mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <img className="w-full md:w-4/5 mx-auto" src={contract} alt="Contract" />
        </div>
        <div
          className="md:w-1/3"
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="1000"
        >
          <form onSubmit={sendEmail} className="p-5 rounded-lg shadow-lg">
            <div className="mb-4">
              <input
                type="text"
                name="user_name"
                placeholder="Enter Name"
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contract;
