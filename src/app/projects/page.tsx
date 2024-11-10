import Navbar from '../component/navbar';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Project 1 */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/calculator.jpg" 
              alt="A screenshot of a CLI Simple Calculator built with Node.js" 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-bold text-gray-300 mb-4">CLI Simple Calculator</h3>
            <p className="text-lg text-gray-400 mb-4">
              A simple command-line interface (CLI) calculator built with Node.js. It performs basic arithmetic operations like addition, subtraction, multiplication, and division.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/number.jpeg" 
              alt="A screenshot of a Number Guessing Game built with JavaScript" 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Number Guessing Game</h3>
            <p className="text-lg text-gray-400 mb-4">
              An interactive number guessing game built with JavaScript. The game prompts the user to guess a number within a certain range, providing feedback on whether the guess is too high or too low.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/figma.jpeg" 
              alt="A screenshot of a Figma E-commerce Store Clone built with Next.js and TailwindCSS" 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Figma E-commerce Store Clone</h3>
            <p className="text-lg text-gray-400 mb-4">
              A clone of an e-commerce store designed in Figma. Built with Next.js, TailwindCSS, and TypeScript, it mimics the layout, interactions, and visual design of a modern e-commerce website.
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/blog.jpeg" 
              alt="A screenshot of a Blog Website built with Next.js" 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Blog Website</h3>
            <p className="text-lg text-gray-400 mb-4">
              A blog website built with Next.js and React featuring a responsive and user-friendly design.
            </p>
          </div>

          {/* Project 5 */}
          <div className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Image 
              src="/portfolio.png" 
              alt="A screenshot of my personal portfolio website" 
              width={500} 
              height={300} 
              className="w-full h-48 object-cover rounded-t-lg mb-6" 
            />
            <h3 className="text-2xl font-bold text-gray-300 mb-4">Portfolio</h3>
            <p className="text-lg text-gray-400 mb-4">
              My personal portfolio website where I showcase my skills, projects, and accomplishments as a UI/UX Designer and Developer.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
