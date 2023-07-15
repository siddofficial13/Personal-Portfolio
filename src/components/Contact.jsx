import React from "react";

const Contact = () => {
  return (
    <div
      name="connect"
      className="w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Connect
          </p>
          <p className="py-6">
            If my portfolio resonates with you, feel free to leave a message and
            get in touch with me...
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9f1bbd9e-76d3-4e0b-8e9e-83d2e0970214"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name....."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email Address..."
              className="my-5 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Drop Your Message..."
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b
             from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500"
            >
              Ping Me Up!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
