import { Button } from "@/components/Button";

const navLinks = [
    {href: "#about", label : "About"},
    {href: "#contact", label : "Contact"},
    {href: "#home", label : "Home"},
    {href: "#experience", label : "Experience"},
];

export const Navbar = () => {
    return (
    <header className="fixed top-0 left-0 right-0 bg-trasparent py-5 z-50">
        <nav className="container mx-auto px-6 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
             YN<span className="text-primary">.</span> 
            </a>

            {/* desktop nav */}
            <div className="flex items-center gap-1">
            <div className="glass rounded-full px-2 py-1 flex items-center gap-1"> 
                    {navLinks.map((link, index) => (
                        <a href={link.href} key={index}
                        className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full">
                            {link.label} 
                        </a>
                    ))}
                </div>
            </div> 

            {/* CTA button */}
            <div>
                <Button size="sm">Contact Me</Button>
            </div>

        </nav>
    </header> 
);
}
