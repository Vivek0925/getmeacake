import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-36 pb-20 px-6 max-w-6xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-24">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-linear-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6 flex justify-center items-center gap-4">
          About Get Me a Cake <span>🎂</span>
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering creators to turn their passion into reality, one slice at a
          time.
        </p>
      </div>

      {/* Mission */}
      <div className="text-center mb-24">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We believe every creator deserves support. Get Me a Cake connects
          creators with their community. Artists, developers, writers, musicians
          and content creators can receive support directly from the people who
          love their work.
        </p>
      </div>

      {/* Features */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            emoji="💜"
            title="Direct Support"
            desc="Fans support you directly without middlemen."
          />

          <Feature
            emoji="🚀"
            title="Easy Setup"
            desc="Create your page and start receiving support in minutes."
          />

          <Feature
            emoji="🔒"
            title="Secure Payments"
            desc="Razorpay powered secure and reliable transactions."
          />

          <Feature
            emoji="🎨"
            title="For All Creators"
            desc="Artists, developers, musicians and creators welcome."
          />

          <Feature
            emoji="📊"
            title="Track Support"
            desc="Dashboard to monitor supporters and payments."
          />

          <Feature
            emoji="🌟"
            title="Build Community"
            desc="Create stronger relationships with your supporters."
          />
        </div>
      </div>

      {/* How it works */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <Step
            number="1"
            title="Create Profile"
            desc="Sign up and create your creator page."
          />

          <Step
            number="2"
            title="Share Your Link"
            desc="Share your page with your audience."
          />

          <Step
            number="3"
            title="Receive Support"
            desc="Fans support you with cakes (donations)."
          />
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-linear-to-r from-purple-600 to-blue-600 rounded-3xl p-14 text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>

        <p className="text-lg mb-10 opacity-90 max-w-xl mx-auto">
          Join creators who are already receiving support from their community.
        </p>

        <a href="/login">
          <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-semibold hover:scale-105 transition">
            Start Your Journey
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;

/* Components */

const Feature = ({ emoji, title, desc }) => (
  <div className="text-center p-6 hover:scale-105 transition">
    <div className="text-4xl mb-4">{emoji}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const Step = ({ number, title, desc }) => (
  <div>
    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
);

export const metadata = {
  title: "About - Get Me A Cake",
  description:
    "Learn more about Get Me A Cake and our mission to support creators.",
};