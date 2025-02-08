import React from 'react';
import { Link } from 'react-router-dom';
import { HandHelping as HandWaving, Activity, History, AlertTriangle, Heart, Brain } from 'lucide-react';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Holistic Emergency Response
              </h1>
              <p className="text-xl mb-8">
                Revolutionary gesture recognition system for emergency response and healthcare communication
              </p>
              <Link
                to="/gesture"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>

        {/* Origin Story */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <p className="text-gray-600 text-lg mb-6">
                The Holistic Emergency Response system was born during the Smart India Hackathon, where 
                we identified a critical need for improved communication in emergency situations. Using 
                MediaPipe's advanced gesture recognition technology, we developed a solution that bridges 
                the communication gap in critical scenarios.
              </p>
              <p className="text-gray-600 text-lg">
                What started as a hackathon project has evolved into a comprehensive system that can help 
                save lives by enabling quick and efficient non-verbal communication in emergency situations.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <HandWaving className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Real-time Recognition</h3>
                <p className="text-gray-600">
                  Advanced AI-powered gesture recognition for immediate response in critical situations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <AlertTriangle className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Emergency Response</h3>
                <p className="text-gray-600">
                  Quick and efficient communication system for emergency situations
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-center mb-4">
                  <Activity className="h-12 w-12 text-blue-600 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Health Monitoring</h3>
                <p className="text-gray-600">
                  Track and monitor emergency responses and health-related communications
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Register and Setup</h3>
                    <p className="text-gray-600">
                      Create your account with basic information and emergency contacts
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perform Gestures</h3>
                    <p className="text-gray-600">
                      Use our predefined gesture set for different emergency situations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Recognition</h3>
                    <p className="text-gray-600">
                      Our system instantly recognizes your gestures and takes appropriate action
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Making a Difference</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-600">
                  Enabling better communication between patients and healthcare providers
                </p>
              </div>
              <div className="text-center">
                <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Emergency Services</h3>
                <p className="text-gray-600">
                  Faster response times in critical situations
                </p>
              </div>
              <div className="text-center">
                <Brain className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-600">
                  Making emergency communication accessible to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;