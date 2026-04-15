import { useEffect } from 'react';
import gsap from 'gsap';

function App() {
  useEffect(() => {
    // Scroll-triggered animations for all elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Determine animation based on class
          if (entry.target.classList.contains("my-heading")) {
            gsap.from(entry.target, {
              duration: 1.5,
              y: -50,
              opacity: 0,
              ease: "bounce"
            });
          } else if (entry.target.classList.contains("my-paragraph")) {
            gsap.from(entry.target, {
              duration: 1,
              x: 100,
              opacity: 0,
              ease: "power2.out"
            });
          } else if (entry.target.classList.contains("skill-card")) {
            gsap.from(entry.target, {
              duration: 1.2,
              y: 30,
              opacity: 0,
              ease: "power2.out"
            });
          } else if (entry.target.classList.contains("experience-item")) {
            gsap.from(entry.target, {
              duration: 1.2,
              x: -50,
              opacity: 0,
              ease: "power2.out"
            });
          } else if (entry.target.classList.contains("education-item")) {
            gsap.from(entry.target, {
              duration: 1.5,
              scale: 0.95,
              opacity: 0,
              ease: "back.out"
            });
          } else {
            // Section heading animation
            gsap.from(entry.target, {
              duration: 1.2,
              y: -30,
              opacity: 0,
              ease: "power2.out"
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".my-heading, .my-paragraph, .section-heading, .skill-card, .experience-item, .education-item").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
           
            {/* 1. NAVBAR SECTION (Logo Left, Menu Right) */}
            <nav className="sticky top-0 w-full bg-white shadow-md z-50">
                <div className="flex justify-between items-center h-15 p-6 max-w-6xl mx-auto">
                   
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600 cursor-pointer">
                    YN
                    </div>
                    {/* Menu Items */}
                    <ul className="flex gap-8 font-medium">
                        
                        <li>
                            <a href="#about" className="hover:text-blue-500">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" className="hover:text-blue-500">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#education" className="hover:text-blue-500">
                                Education
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* 2. HERO SECTION (Text Left, Image Right) */}
            <header className=" max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Left Side: Text Content */}
                <div className="flex-1 space-y-6">
                    
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
                        Hi, I'm <br />
                        <span className=" my-heading text-blue-600 inline-block">
                        Yogisha Niraula
                        </span>
                    </h1>
                    <p className="my-paragraph text-xl text-gray-600 leading-relaxed">
                        I am a self-motivated IT graduate with a strong
                        interest in web development, SEO, and digital
                        marketing.
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
                        
                        {/* image */}
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
                        
                        <h2 className="section-heading text-5xl md:text-6xl font-extrabold text-black-600">
                            
                            About Me
                        </h2>
                    </div>
                    {/* Right Side - Description */}
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        
                        <p>
                            
                            I am a self-motivated IT graduate with a strong
                            interest in web development, SEO, and digital
                            marketing.
                        </p>
                        <p>
                            
                            I enjoy learning new technologies, building creative
                            projects, and continuously improving my skills in
                            real-world environments.
                        </p>
                        <p>
                            
                            I value teamwork, adaptability, and consistency, and
                            I always aim to deliver high-quality work within
                            deadlines.
                        </p>
                    </div>
                </div>
            </section>
            {/* 3. EXPERIENCE SECTION */}
            <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
                
                <h2 className="section-heading text-4xl font-bold mb-12">Experience</h2>
                <div className="space-y-12">
                    
                    {/* Digital Gurkha */}
                    <div className="experience-item border-l-4 border-blue-600 pl-6">
                        
                        <h3 className="text-2xl font-bold">SEO Intern</h3>
                        <p className="text-blue-600 font-medium">
                            Digital Gurkha | 2025
                        </p>
                        <ul className="mt-4 text-gray-600 list-disc ml-4 space-y-2">
                            
                            <li>
                                Assisted in on-page SEO, keyword research, and
                                metadata implementation.
                            </li>
                            <li>
                                Conducted SEO audits and analyzed website
                                performance using Google Search Console.
                            </li>
                        </ul>
                    </div>
                    {/* Foreveryng */}
                    <div className="experience-item border-l-4 border-gray-300 pl-6">
                        
                        <h3 className="text-2xl font-bold">
                            Content Creation Intern
                        </h3>
                        <p className="text-blue-600 font-medium">
                            Foreveryng | 2024
                        </p>
                        <ul className="mt-4 text-gray-600 list-disc ml-4 space-y-2">
                            
                            <li>
                                Managed customer inquiries and created engaging
                                social media content.
                            </li>
                            <li>
                                Collaborated with marketing teams to align
                                content strategies.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* 3. SKILLS SECTION */}
            <section id="skills" className="bg-gray-50 py-20">
                
                <div className="max-w-6xl mx-auto px-6 text-center">
                    
                    <h2 className="section-heading text-4xl font-bold mb-12">My Skills</h2>
                    {/* Responsive Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        
                        {/* Skill Item */}
                        <div className="skill-card flex flex-col items-center space-y-2 hover:scale-105 transition ">
                            
                            <img
                                src="/Html.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium ">HTML </p>
                        </div>
                        <div className="skill-card flex flex-col items-center space-y-3 hover:scale-105 transition ">
                            
                            <img
                                src="/Css.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium ">CSS </p>
                        </div>
                        <div className="skill-card flex flex-col items-center space-y-3 hover:scale-105 transition">
                            
                            <img
                                src="/Wordpress.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium">
                                WordPress
                            </p>
                        </div>
                        <div className="skill-card flex flex-col items-center space-y-3 hover:scale-105 transition">
                            
                            <img
                                src="/Figma.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium">
                                Figma / Canva
                            </p>
                        </div>
                        <div className="skill-card flex flex-col items-center space-y-3 hover:scale-105 transition">
                            
                            <img
                                src="/React.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium">React</p>
                        </div>
                        <div className="skill-card flex flex-col items-center space-y-3 hover:scale-105 transition">
                            
                            <img
                                src="/Javascript.png"
                                className="w-16 h-16 object-contain"
                            />
                            <p className="text-blue-600 font-medium">
                                Javascript
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 4. EDUCATION SECTION (Simple Cards) */}
            <section id="education" className=" py-20 max-w-6xl mx-auto px-6">
                
                <div className="grid md:grid-cols-2 gap-4 items-start">
                    
                    {/* Left Side - Big Title */}
                    <div>
                        
                        <h2 className="section-heading text-5xl px-10 py-10 md:text-6xl font-extrabold text-black-600">
                            
                            Education
                        </h2>
                    </div>
                    {/* Right Side - Description */}
                    <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                        
                        <div className="education-item bg-white p-8 rounded-2xl shadow-sm">
                            
                            <h3 className="text-xl font-bold">
                                Bachelor of Computer Science (CSIT)
                            </h3>
                            <p className="text-gray-600">
                                Madan Bhandari Memorial College (2022 - 2026)
                            </p>
                            <hr className="my-4" />
                            <h3 className="text-xl font-bold">High School</h3>
                            <p className="text-gray-600">
                                United Academy (2019 - 2021)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 5. CONTACT SECTION (Simple Contact Info) */}
            <section
                id="contact me"
                className=" bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center"
            >
                
                <h2 className="section-heading text-3xl font-bold mb-6"> Contact Me</h2>
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
                        
                        <h2 className="text-2xl font-bold text-blue-400 text-center md:text-left">
                            My Portfolio
                        </h2>
                        <p className="text-gray-400 mt-2">
                            © 2026 Yogisha Niraula. All rights reserved.
                        </p>
                    </div>
                    <div className="flex gap-8">
                        
                        <a
                            href="https://www.linkedin.com/in/yogisha-niraula-9a1b2525b/"
                            className="hover:text-blue-400 transition"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/yogishaaniraula"
                            className="hover:text-blue-400 transition"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default App;
