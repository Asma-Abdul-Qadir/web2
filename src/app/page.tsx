"use client"
import Navbar from './component/navbar';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/background1.jpg')" }}
    >
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black via-transparent to-black bg-opacity-70">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <Typewriter
              words={['ASMA']}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="text-2xl md:text-3xl font-medium mb-8 animate-fadeIn">
            UI/UX Designer and Developer
          </p>
          <div>
            <Link href="/contact">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition transform hover:scale-105">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
