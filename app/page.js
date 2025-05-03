"use client";
import Image from "next/image";
import Head from "next/head";
import {
  MapPin,
  Home,
  ListChecks,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

import { useState } from "react";

const features = [
  {
    icon: <MapPin className="w-12 h-12 text-slate-700" />,
    title: "Find nearby medicines",
    description: "Search pharmacies in your area for required medicines",
  },
  {
    icon: <Home className="w-12 h-12 text-slate-700" />,
    title: "Check availability",
    description: "Ensure the medicine is in stock at local pharmacies",
  },
  {
    icon: <ListChecks className="w-12 h-12 text-slate-700" />,
    title: "Compare prices",
    description: "Find the best prices offered by different pharmacies",
  },
];

const faqs = [
  {
    question: "Is the service free?",
    answer: "Yes, our service is completely free of charge.",
  },
  {
    question: "How accurate is the availability data?",
    answer:
      "We update the data frequently but cannot guarantee its completeness.",
  },
  {
    question: "Can I order medicines through the platform?",
    answer:
      "No, we do not sell any medicines directly. Please contact a pharmacy.",
  },
];

export default function HomePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      <Head>
        <title>Local Medicine Finder</title>
        <meta
          name="description"
          content="Find local pharmacies and medicine availability near you."
        />
      </Head>

      {/* Hero Section */}
      <div className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Navbar */}
        <nav className="flex items-center justify-between py-6 px-10 shadow-md">
          <h1 className="text-2xl font-bold text-blue-800">
            Local Medicine Finder
          </h1>
          <div className="space-x-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>
            <a href="#" className="hover:text-blue-600">
              About
            </a>
            <a href="#" className="hover:text-blue-600">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-20">
          {/* Left Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Local Medicine Finder
            </h2>
            <h3 className="text-xl font-medium text-gray-700">
              Find Medicine Nearby
            </h3>
            <p className="text-gray-600 max-w-md">
              Easily search for local pharmacies and check the availability of
              medicines in your area.
            </p>
            {/* Icons */}
            <div className="flex space-x-6 pt-4">
              <div className="flex flex-col items-center">
                <img
                  src="/icons/pharmacy.png"
                  alt="Pharmacy Icon"
                  className="w-10 h-10 mb-1"
                />
                <span className="text-sm font-medium">Pharmacies</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/icons/medicine.png"
                  alt="Medicine Icon"
                  className="w-10 h-10 mb-1"
                />
                <span className="text-sm font-medium">Medicines</span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="/icons/location.png"
                  alt="Location Icon"
                  className="w-10 h-10 mb-1"
                />
                <span className="text-sm font-medium">Location Search</span>
              </div>
            </div>
            <button className="mt-6 px-6 py-3 w-sm bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Search
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/hero-image.png"
              alt="Medicine Finder Illustration"
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {feature.icon}
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */} 
      <section className="bg-white py-16 px-6 max-w-full mx-auto">
        <h2 className="text-4xl font-bold mb-4">About</h2>
        <p className="text-gray-800 text-lg leading-relaxed">
          A platform for finding medicine availability at pharmacies. It helps
          users save time by quickly locating the medications they need.
        </p>
      </section>

      {/* Proof/Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800">
          What Our Users Say
        </h2>
        <div className="container mx-auto max-w-4xl">
          <p className="text-xl text-gray-600 mb-8">
            "I saved so much time by finding a pharmacy with the exact medicine
            I needed! This app made it so easy and quick to purchase."
            <br />— Alex P., Happy Customer
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white px-6 max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-lg flex justify-between items-center">
                {faq.question}
                <span className="text-gray-500">
                  {openIndex === index ? "-" : "+"}
                </span>
              </h3>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 transition-all">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-10 bg-white text-gray-700">
        <div className="flex justify-center space-x-6 mb-4">
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <Linkedin className="w-5 h-5" />
        </div>

        <div className="flex justify-center items-center flex-wrap gap-4 text-sm mb-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@example.com</span>
          </div>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>

        <p className="text-sm mt-2">© 2024 Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
