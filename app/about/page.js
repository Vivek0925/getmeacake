import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div className="min-h-screen pt-40 pb-24 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
          About Get Me A Cake 🎂
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Empowering creators to turn their passion into reality, one slice at a
          time.
        </p>
      </div>

      {/* Mission */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

        <p className="text-gray-600 text-lg leading-relaxed">
          Get Me A Cake connects creators with their community. Artists,
          developers, writers and creators can receive support directly from
          people who love their work.
        </p>
      </div>

      {/* Features */}
      <div className="mb-28">
        <h2 className="text-4xl font-bold text-center mb-14">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            icon="💜"
            title="Direct Support"
            desc="Fans support you directly without middlemen."
          />

          <Feature
            icon="🚀"
            title="Easy Setup"
            desc="Create your page and start receiving support in minutes."
          />

          <Feature
            icon="🔒"
            title="Secure Payments"
            desc="Razorpay powered safe and reliable transactions."
          />

          <Feature
            icon="🎨"
            title="For Creators"
            desc="Artists, developers, musicians and creators welcome."
          />

          <Feature
            icon="📊"
            title="Track Support"
            desc="Monitor supporters and track all received payments."
          />

          <Feature
            icon="🌟"
            title="Grow Community"
            desc="Build stronger connections with your audience."
          />
        </div>
      </div>

      {/* How it works */}
      <div className="mb-28">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <Step
            number="1"
            title="Create Profile"
            desc="Sign up and create your creator page."
          />

          <Step
            number="2"
            title="Share Link"
            desc="Share your page with fans and followers."
          />

          <Step
            number="3"
            title="Receive Support"
            desc="Fans support you with cakes."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-14 text-white shadow-xl">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>

        <p className="text-lg mb-10 opacity-90 max-w-xl mx-auto">
          Join creators who are already receiving support from their community.
        </p>

        <Link href="/login">
          <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg">
            Start Your Journey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;

/* Components */

const Feature = ({ icon, title, desc }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
};

const Step = ({ number, title, desc }) => {
  return (
    <div>
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">
        {number}
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      <p className="text-gray-600">{desc}</p>
    </div>
  );
};
