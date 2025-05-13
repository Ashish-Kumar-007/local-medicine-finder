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

import { FaSearch, FaMapMarkerAlt, FaClipboardCheck } from "react-icons/fa";

const steps = [
  {
    title: "Search Medicine",
    icon: <FaSearch className="text-3xl text-blue-600" />,
    desc: "Enter the name of the medicine you’re looking for.",
  },
  {
    title: "View Nearby Pharmacies",
    icon: <FaMapMarkerAlt className="text-3xl text-green-600" />,
    desc: "See which nearby stores have it in stock.",
  },
  {
    title: "Compare & Purchase",
    icon: <FaClipboardCheck className="text-3xl text-purple-600" />,
    desc: "Compare prices and pick the best option to purchase or pick up.",
  },
];

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

const testimonials = [
  {
    name: "Amit R.",
    role: "College Student",
    image: "/users/amit.jpg", // or use a placeholder service like https://i.pravatar.cc/150?img=3
    quote:
      "MediMap saved me a lot of time when I urgently needed medicine. It found nearby stores instantly!",
  },
  {
    name: "Neha S.",
    role: "Working Professional",
    image: "/users/neha.jpg",
    quote:
      "I used to call 4-5 pharmacies for one medicine. Now I just check MediMap and walk to the right place!",
  },
  {
    name: "Dr. Rajiv M.",
    role: "General Physician",
    image: "/users/rajiv.jpg",
    quote:
      "As a doctor, I recommend MediMap to patients. It ensures they get medicines quickly and affordably.",
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

      {/* Problem & Solution Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
            The Problem & Our Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem Section */}
            <div className="bg-red-50 p-6 rounded-2xl shadow-md border border-red-200">
              <h3 className="text-2xl font-semibold text-red-600 mb-4">
                The Problem
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>❌ Difficulty finding specific medicines nearby</li>
                <li>❌ Wasting time calling multiple pharmacies</li>
                <li>❌ Unawareness of price differences</li>
                <li>❌ No real-time availability data</li>
              </ul>
            </div>

            {/* Solution Section */}
            <div className="bg-green-50 p-6 rounded-2xl shadow-md border border-green-200">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                The MediMap Solution
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✅ Real-time search for medicines in local pharmacies</li>
                <li>✅ Availability check before visiting</li>
                <li>✅ Price comparison from nearby stores</li>
                <li>✅ Save time, save money, stay informed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof/Testimonials Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
            What Our Users Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        t.name
                      )}&background=0D8ABC&color=fff`;
                    }}
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Medicines Instantly?
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Start using MediMap and locate nearby pharmacies in seconds.
          </p>
          <a
            href="/search"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 transition duration-300"
          >
            Start Finding Medicines Now
          </a>
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
