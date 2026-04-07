
import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">

      {/* 1. NAVBAR SECTION (Logo Left, Menu Right) */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto ">
        {/* Logo */}
        <div className="text-2xl font-bold text-black-600 cursor-pointer hover:text-blue-500">
          YN
        </div>


        {/* Menu Items */}
        <ul className="flex gap-8 font-medium">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-500">Education</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>


      {/* 2. HERO SECTION (Text Left, Image Right) */}
      <header className=" max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Side: Text Content */}

        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-blue-600">Yogisha Niraula</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            <p>
              I am a self-motivated IT graduate with a strong interest in web development, SEO, and digital marketing.
            </p>
          </p>

          <div className="flex gap-4">

            <a href="#contact me">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg">
                Contact Me
              </button>
            </a>


            <a href="/yogishaniraulacv.pdf" download>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center border-4 border-blue-100 shadow-xl overflow-hidden">
            {/*  image */}
            <img
              src="/yogiimag.jpg"
              alt="Yogisha"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


      </header>

      {/* 3. ABOUT ME SECTION (Simple Text Block) */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-10 items-center">



          {/* Left Side - Big Title */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-black-600">
              About Me
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

            <p>
              I am a self-motivated IT graduate with a strong interest in web development, SEO, and digital marketing.
            </p>

            <p>
              I enjoy learning new technologies, building creative projects, and continuously improving my skills in real-world environments.
            </p>

            <p>
              I value teamwork, adaptability, and consistency, and I always aim to deliver high-quality work within deadlines.
            </p>

          </div>

        </div>

      </section>


      {/* 3. EXPERIENCE SECTION  */}
      <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-12">
          {/* Digital Gurkha */}
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-2xl font-bold">SEO Intern</h3>
            <p className="text-blue-600 font-medium">Digital Gurkha | 2025</p>
            <ul className="mt-4 text-gray-600 list-disc ml-4 space-y-2">
              <li>Assisted in on-page SEO, keyword research, and metadata implementation.</li>
              <li>Conducted SEO audits and analyzed website performance using Google Search Console.</li>
            </ul>
          </div>


          {/* Foreveryng */}
          <div className="border-l-4 border-gray-300 pl-6">
            <h3 className="text-2xl font-bold">Content Creation Intern</h3>
            <p className="text-blue-600 font-medium">Foreveryng | 2024</p>
            <ul className="mt-4 text-gray-600 list-disc ml-4 space-y-2">
              <li>Managed customer inquiries and created engaging social media content.</li>
              <li>Collaborated with marketing teams to align content strategies.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* 3. SKILLS SECTION (Boxes with Icons/Text) */}

      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">My Skills</h2>

          {/* Grid setup: Mobile ma 2 ota, Laptop ma 4 ota box dekhinchha */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white shadow rounded-lg">HTML / CSS</div>
            <div className="p-4 bg-white shadow rounded-lg">SEO (On-page, Keywords)</div>
            <div className="p-4 bg-white shadow rounded-lg">Google Search Console</div>
            <div className="p-4 bg-white shadow rounded-lg">WordPress CMS</div>
            <div className="p-4 bg-white shadow rounded-lg">Figma / Canva</div>
            <div className="p-4 bg-white shadow rounded-lg">React (Learning)</div>
          </div>
        </div>
      </section>


      {/* 4. EDUCATION SECTION (Simple Cards) */}
      <section id="education" className=" py-20 max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Left Side - Big Title */}
          <div>
            <h2 className="text-5xl px-10 py-10 md:text-6xl font-extrabold text-black-600">
              Education
            </h2>
          </div>

          {/* Right Side - Description */}
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold">Bachelor of Computer Science (CSIT)</h3>
              <p className="text-gray-600">Madan Bhandari Memorial College (2022 - 2026)</p>
              <hr className="my-4" />
              <h3 className="text-xl font-bold">High School</h3>
              <p className="text-gray-600">United Academy (2019 - 2021)</p>
            </div>
          </div>
        </div>

      </section>


      {/* 5. CONTACT SECTION (Simple Contact Info) */}

      <section id="contact me" className=" bg-gray-50 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <form className="flex flex-col gap-4 max-w-md mx-auto">

          <input
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Your Message"
            className="border p-3 rounded"
            rows="4"
          ></textarea>

          <button className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
            Send
          </button>

        </form>
      </section>

      {/* 5. FOOTER SECTION (The Bottom Bar) */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-400 text-center md:text-left">My Portfolio</h2>
            <p className="text-gray-400 mt-2">© 2026 Yogisha Niraula. All rights reserved.</p>
          </div>

          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/yogisha-niraula-9a1b2525b/" className="hover:text-blue-400 transition">LinkedIn</a>

            <a href="https://github.com/yogishaaniraula" className="hover:text-blue-400 transition">GitHub</a>

          
          </div>
        </div>
      </footer>


    </div>
  )
}
export default App

