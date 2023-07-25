import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Form submitted!");
  };

  return (
   
    <div className="max-w-md mx-auto p-4 mt-28 shadow-md shadow-cyan-500/50 rounded-md" style={{
      background: 'url(https://media.istockphoto.com/id/911633218/vector/abstract-geometric-medical-cross-shape-medicine-and-science-concept-background.jpg?s=612x612&w=0&k=20&c=eYz8qm5xa5wbWCWKgjOpTamavekYv8XqPTA0MC4tHGA=) center/cover',
    }}>>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src="data:image/jpeg;base64,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" alt="" width={90}/></div>
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">Subscribe To AINJ</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-black"
          ></textarea>
        </div>
        <div className="flex justify-center">
        <button
  type="submit"
  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-red-500 "
>
  Submit
</button>

        </div>
      </form>
      <footer>
  <p className="text-footer background3">
  Office No. 19, Ground Floor, Aman Prestige, CTS No. 604, Shaniwar Peth, Behind Narayan Peth Police Chowky, Pune-411030, Pune, India, Maharashtra <br />Contact: 8484823138
  </p>
</footer>

    </div>
  );
};

export default Contact;
