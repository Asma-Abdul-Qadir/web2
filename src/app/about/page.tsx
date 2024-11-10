// pages/about.tsx
import Navbar from '../component/navbar';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen px-8 py-16">
        <div className="max-w-3xl bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-blue-400">About Me</h2>
          <p className="text-xl leading-relaxed mb-8 text-gray-200">
          I am a passionate UI/UX Designer and Developer, currently pursuing my studies under the Governor Sindh IT Initiative. With a strong foundation in HTML, CSS, TypeScript, Next.js, and React, I am committed to creating innovative and user-friendly web applications.

I hold a Bachelor’s degree in Science and have earned certifications in SEO, Digital Marketing, Virtual Assistance, WordPress, and Communication & Soft Skills, which have broadened my technical and interpersonal expertise. I am constantly exploring new technologies to enhance my skills and stay ahead in the ever-evolving tech landscape.

My goal is to leverage my skills to build impactful projects that not only solve problems but also provide seamless user experiences. I am driven by a passion for coding and design, and I am eager to take on new challenges and grow as a developer.
          </p>
          
        </div>
      </div>
    </div>
  );
}
