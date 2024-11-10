import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-32 pb-48 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-light text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 shadow-sm p-2 border text-black font-light outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-light text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-gray-300 shadow-sm p-2 border text-black font-light outline-none"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-light text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border text-black font-light outline-none"
            placeholder="Enter your message"
          />
        </div>

        <button
          type="submit"
          className="w-full border border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-black transition-colors duration-200"
        >
          Send Message
        </button>

        {status && (
          <div className="mt-4 text-center text-green-600 font-medium">
            {status}
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
