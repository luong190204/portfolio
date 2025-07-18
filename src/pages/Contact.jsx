import React, { useRef, useState } from 'react'
import { contactPageData } from '../data/portfolioData'
import { Contact2, Facebook, Github, Mail, MapPinned, Phone, Send } from 'lucide-react';

import emailjs from "@emailjs/browser";
const Contact = () => {

  const formRef = useRef()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill in all fields");
    return;
    }
    console.log(formData);
    emailjs
      .sendForm(
        "service_vs30ewp",
        "template_22j3kmu",
        formRef.current,
        "eLDIjjalfLGUqeuMH"
      )
      .then (
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");

          // Reset form sau khi gửi
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong.");
        }
      )
  }

  return (
    <div className="py-24 md:py-24 bg-base-200 text-base-content">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            {contactPageData.title}
          </h2>
        </div>

        <div className=" flex flex-col md:flex-row gap-10 mx-6 lg:mt-4">
          {/* Left - Text */}
          <div className="md:basis-1/3 w-full bg-base-100 p-8 rounded-box shadow-xl">
            <h3 className="text-2xl font-bold text-base-content mb-6 border-b-2 border-primary pb-2">
              Don't be shy
            </h3>
            <p className="text-base-content/90 ">
              {contactPageData.description}
            </p>

            <div className="flex items-center gap-4 my-10">
              <div className="rounded-full flex items-center justify-center text-primary-content font-medium">
                <Mail className="w-10 h-10 text-base-content" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-base-content/95">{contactPageData.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 my-10">
              <div className="rounded-full flex items-center justify-center text-primary-content font-medium">
                <Phone className="w-10 h-10 text-base-content" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-base-content/95">{contactPageData.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 my-10">
              <div className="rounded-full flex items-center justify-center text-primary-content font-medium">
                <MapPinned className="w-10 h-10 text-base-content" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-base-content/95">
                  {contactPageData.address}
                </p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-lg 
                   text-base-200 
                   bg-primary
                   hover:bg-primary/70 hover:text-base-100 
                   transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-lg 
                text-base-200 
                bg-purple-600 
                hover:text-base-100 hover:bg-purple-400 
                transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="w-12 h-12 flex items-center justify-center rounded-lg 
                text-base-200 
                bg-red-600
                hover:bg-red-400 hover:text-base-100
                transition-all duration-300 hover:scale-110 shadow-md"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:basis-2/3 bg-white/5 rounded-2xl p-8 shadow-2xl lg:mr-28 ">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Your name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input input-bordered w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Subject</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration"
                  className="input input-bordered w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-300"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-semibold">Message</span>
                </label>

                <textarea
                  className="textarea textarea-bordered w-full placeholder:text-gray-500 focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  aria-label="To enrich screen reader interactions, please activate Accessibility in Grammarly extension settings"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full lg:w-44 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-4 
                rounded-lg font-light lg:text-base transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
