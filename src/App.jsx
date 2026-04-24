import React, { useState } from 'react';
import { Menu, X, ArrowRight, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ProServices</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-700">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Professional Services You Can Trust
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We deliver excellence in every project. Expert solutions tailored to your business needs.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 inline-flex items-center gap-2"
          >
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Consulting', desc: 'Expert advice to grow your business' },
              { title: 'Design', desc: 'Beautiful, functional design solutions' },
              { title: 'Development', desc: 'Cutting-edge technology implementation' },
              { title: 'Support', desc: '24/7 customer support and maintenance' },
              { title: 'Analytics', desc: 'Data-driven insights for success' },
              { title: 'Training', desc: 'Empower your team with skills' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <CheckCircle className="text-blue-600 mb-4" size={32} />
                <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-gray-900">About Us</h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                With over 10 years of experience, we've helped hundreds of businesses achieve their goals. Our team of experts is dedicated to delivering results.
              </p>
              <p className="text-lg text-gray-600">
                We believe in building long-term partnerships with our clients and creating value that extends far beyond the initial project.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">500+</h4>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">98%</h4>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">15+</h4>
                  <p className="text-gray-600">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-blue-600">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h3 className="text-4xl font-bold mb-8">Get In Touch</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-500 p-6 rounded-lg">
              <Phone size={32} className="mx-auto mb-4" />
              <p className="font-semibold mb-2">Phone</p>
              <p>(555) 123-4567</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg">
              <Mail size={32} className="mx-auto mb-4" />
              <p className="font-semibold mb-2">Email</p>
              <p>hello@proservices.com</p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg">
              <MapPin size={32} className="mx-auto mb-4" />
              <p className="font-semibold mb-2">Location</p>
              <p>123 Business St, City, State</p>
            </div>
          </div>

          <form className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded text-gray-900"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded text-gray-900"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 mb-4 rounded text-gray-900"
            ></textarea>
            <button className="w-full bg-white text-blue-600 font-bold py-3 rounded hover:bg-gray-100">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 text-center">
        <p>&copy; 2024 ProServices. All rights reserved.</p>
      </footer>
    </div>
  );
}