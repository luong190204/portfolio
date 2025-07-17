import React from 'react'
import { contactPageData } from '../data/portfolioData'
import { Contact2, Facebook, Github, Mail, MapPinned } from 'lucide-react';
const Contact = () => {
  return (
    <div className="py-16 md:py-24 bg-base-200 text-base-content">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold">
            {contactPageData.title}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mx-10">
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
                <Contact2 className="w-10 h-10 text-base-content" />
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
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-base-content hover:text-purple-400 transition-all duration-300 hover:scale-110 hover:bg-white/20 "
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-base-content hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Github className="w-6 h-6" />
              </a>

              <a
                href="#"
                className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-base-content hover:text-red-400 transition-all duration-300 hover:scale-110 hover:bg-white/20"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="md:basis-2/3"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact
