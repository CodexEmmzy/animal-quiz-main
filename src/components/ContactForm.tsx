import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      action="/contact/submit/"
      method="POST"
      data-cloudcannon-form
      className="max-w-lg mx-auto bg-background-light p-8 rounded shadow"
      onSubmit={() => setSubmitted(true)}
    >
      <h2 className="text-2xl font-heading mb-4">Contact Us</h2>
      <label className="block mb-2">Name
        <input name="name" type="text" required className="w-full p-2 mb-4 rounded" />
      </label>
      <label className="block mb-2">Email
        <input name="email" type="email" required className="w-full p-2 mb-4 rounded" />
      </label>
      <label className="block mb-2">Message
        <textarea name="message" required className="w-full p-2 mb-4 rounded" />
      </label>
      <button type="submit" className="btn btn-primary">Send</button>
      {submitted && <p className="mt-4 text-green-500">Thank you for your message!</p>}
    </form>
  );
};

export default ContactForm;
