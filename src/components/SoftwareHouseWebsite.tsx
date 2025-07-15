"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Code, Smartphone, Server, Mail, MapPin, ExternalLink, Menu, X, Instagram } from 'lucide-react';

const SoftwareHouseWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const services = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "Web Development",
      description: "Custom web applications using modern frameworks like React, Next.js, Node.js, and Laravel — built to be fast, scalable, and user-friendly."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-teal-400" />,
      title: "Mobile Development",
      description: "Seamless native and cross-platform mobile apps for iOS and Android, crafted with React Native and Flutter for maximum performance and flexibility."
    },
    {
      icon: <Server className="w-12 h-12 text-pink-400" />,
      title: "Network & Server",
      description: "Reliable networking setups and server maintenance services designed to keep your systems secure, stable, and always online."
    }
  ];

  const team = [
    {
      name: "Renaldy Bilal",
      role: "Backend Developer",
      image: "/images/team/renaldy.png",
      skills: ["React", "Node.js", "Python"]
    },
    {
      name: "Imam Arsyawalfa",
      role: "Backend Developer",
      image: "/images/team/uus.jpeg",
      skills: ["React Native", "Flutter", "Swift"]
    },
    {
      name: "Arif Widi Atmaja",
      role: "Frontend Developer",
      image: "/images/team/arip.jpg",
      skills: ["AWS", "Docker", "Kubernetes"]
    },
    {
      name: "Roidah",
      role: "Frontend Developer",
      image: "#",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    },
    {
      name: "Mufaret",
      role: "DevOps Engineer",
      image: "#",
      skills: ["Figma", "Adobe XD", "Prototyping"]
    }
  ];

  const portfolio = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      image: "#",
      description: "Full-featured e-commerce platform with payment integration and admin dashboard",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Food Delivery App",
      category: "Mobile Application",
      image: "#",
      description: "Cross-platform food delivery app with real-time tracking and payments",
      tech: ["React Native", "Firebase", "Google Maps"],
      link: "#"
    },
    {
      title: "Enterprise CRM",
      category: "Web Application",
      image: "#",
      description: "Customer relationship management system for enterprise clients",
      tech: ["Next.js", "PostgreSQL", "Redis", "AWS"],
      link: "#"
    },
    {
      title: "Fitness Tracker",
      category: "Mobile Application",
      image: "#",
      description: "Health and fitness tracking app with wearable device integration",
      tech: ["Flutter", "Firebase", "HealthKit"],
      link: "#"
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps & Server",
      image: "#",
      description: "Scalable cloud infrastructure setup for a fintech startup",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "#"
    },
    {
      title: "Real Estate Platform",
      category: "Web Application",
      image: "#",
      description: "Property listing and management platform with virtual tours",
      tech: ["React", "Python", "PostgreSQL", "AWS S3"],
      link: "#"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    // Create email body
    const emailBody = `Hi Strugg House Team,

    Name: ${name}
    Email: ${email}
    Subject: ${subject}

    Message:
    ${message}

    Best regards,
    ${name}`;

    // Create mailto link
    const mailtoLink = `mailto:strugghouse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Clear form after sending
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-blue-400">
              STRUGG HOUSE
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors font-medium ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-700'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-400 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative"
      >
        {/* Background with opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg-hero2.jpg')",
            opacity: 0.7,
          }}
        ></div>
        
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center">
            {/* Logo in Hero */}
            <div className="mb-2 flex justify-center">
              <Image 
                src="/images/sh-logo.png" 
                alt="Strugg House" 
                width={256}
                height={256}
                className="h-48 w-auto md:h-64 lg:h-72"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Where Ideas Meet Innovation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              We blend creativity and tech to power your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
              >
                View Our Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-md bg-white/20 backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Optional scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re a passionate team of developers and designers dedicated to building smart, reliable, and user-focused digital solutions. Whether it&apos;s web applications, mobile apps, or backend systems, we combine creative thinking with proven technical skills to deliver results that work on time and beyond expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  "5+ years of hands-on experience in delivering digital products",
                  "Over 30 successfully completed projects across industries",
                  "Agile development approach for faster, smarter delivery",
                  "Round-the-clock support to keep your systems running smoothly",
                  "Fair pricing and flexible plans tailored to your needs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">30+</div>
                    <div className="text-gray-600">Tailored Projects Successfully Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
                    <div className="text-gray-600">Client-First Commitment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400 mb-2">24/7</div>
                    <div className="text-gray-600">Always-On Support, Whenever You Need Us</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                    <div className="text-gray-600">Years of Proven Industry Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end digital solutions tailored to help your business grow, adapt, and thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-all group hover:scale-105 shadow-md">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our recent projects and see how we&apos;ve helped businesses achieve their digital goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:scale-105 transition-transform group shadow-md">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="p-6">
                  <div className="text-sm text-teal-400 mb-2 font-medium">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-blue-400 hover:text-blue-500 transition-colors font-medium">
                    View Project <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of developers, designers, and engineers who bring your ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-8">
            {/* Top row - 3 people */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
              {team.slice(0, 3).map((member, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all group hover:scale-105 shadow-md">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom row - 2 people */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              {team.slice(3, 5).map((member, index) => (
                <div key={index + 3} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all group hover:scale-105 shadow-md">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-blue-400 mb-4 font-medium">{member.role}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your next project? Let&apos;s discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-700">strugghouse@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                  <span className="text-gray-700">Surabaya, East Java, Indonesia</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-400 hover:text-blue-500 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors text-gray-800"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors resize-none text-gray-800"
                  ></textarea>
                </div>
                <button
                  onClick={handleSendMessage}
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-md"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-bold text-blue-400 mb-4">
            STRUGG HOUSE
          </div>
          <p className="text-gray-300 mb-4">
            Crafting digital experiences that make a difference.
          </p>
          <p className="text-gray-500">
            © 2024 STRUGG HOUSE. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SoftwareHouseWebsite;