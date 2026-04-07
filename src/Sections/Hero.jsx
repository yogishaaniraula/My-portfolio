export const Hero = () => {
    return <section className="relative min-h-screen flex items-center overflow-hidden"> 

     {/*backgroung image*/}
     <div className="absolute inset-0">
       <img src="/project/herobg.jpg" alt ="background image" className="w-full h-full object-cover opacity-40"/>
       <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background">
        </div>
     </div>

        {/*content*/}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-20">
            <div>
                {/* Left coloumn - Text Content */}
                <div>
                    <h1> 
                        Hi, I'm <span className="text-primary glow-text">Yogisha Niraula</span>
                        <br/>
                        A passionate <span className="text-primary glow-text">Software Developer</span> 
                        <br/>
                    </h1>
                    
                </div>
                {/* Right  coloumn - Text Content */}



            </div>
        </div>
    </section>
}; 

