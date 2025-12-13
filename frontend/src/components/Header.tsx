import { Link } from "react-router-dom";
import { Phone, Mail, LogIn, Facebook, Twitter, Linkedin, Instagram, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full z-50 font-sans shadow-md bg-[#111a45] text-white">
            {/* Logo Container - Absolute Left */}
            <div className="absolute top-0 bottom-0 left-0 z-30 flex items-center pl-4 lg:pl-12">
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="BRPL Logo"
                        className="h-[60px] md:h-[80px] w-auto object-contain drop-shadow-lg"
                    />
                </Link>
            </div>

            {/* Top Bar - White with Slanted Left Edge */}
            <div className="w-full flex justify-end relative z-20">
                <div
                    className="bg-white text-[#111a45] h-[40px] md:h-[50px] w-[95%] sm:w-[85%] lg:w-[75%] flex items-center justify-end px-4 lg:px-12 gap-6"
                    style={{ clipPath: "polygon(0px 0px, 100% 0px, 100% 100%, 66px 100%)" }}
                >
                    {/* Contact Info (Hide on small screens) */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 fill-current" />
                            <span className="text-[13px] font-bold tracking-wide">+(91) 8860342926</span>
                        </div>
                        <div className="h-4 w-px bg-slate-300" />
                        <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            <span className="text-[13px] font-bold tracking-wide">info@brpl.net</span>
                        </div>
                    </div>

                    {/* Login & Socials */}
                    <div className="flex items-center gap-4 md:ml-auto">
                        {/* Divider only on desktop if contact info is shown */}
                        <div className="hidden md:block h-4 w-px bg-slate-300 mx-2" />

                        <Link
                            to="/auth"
                            className="flex items-center gap-2 font-bold hover:text-blue-600 transition-colors group text-[13px]"
                        >
                            <LogIn className="w-4 h-4 stroke-[2.5] group-hover:stroke-blue-600" />
                            <span className="uppercase tracking-wide hidden sm:inline">Login</span>
                        </Link>

                        <div className="h-4 w-px bg-slate-300" />

                        <div className="flex items-center gap-3 md:gap-4">
                            <a href="#" className="hover:text-blue-600 transition-colors"><Facebook className="w-3.5 h-3.5 fill-current" /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><Twitter className="w-3.5 h-3.5 fill-current" /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin className="w-3.5 h-3.5 fill-current" /></a>
                            <a href="#" className="hover:text-blue-600 transition-colors"><Instagram className="w-3.5 h-3.5 stroke-[2]" /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar - Navigation */}
            <div className="h-[70px] md:h-[80px] w-full flex items-center justify-end px-4 lg:px-12 relative z-10">
                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold tracking-wide">
                    {["Home", "About Us", "Teams", "Career", "Registration", "Contact Us"].map((item) => {
                        let path = "/";
                        if (item === "Home") path = "/";
                        else if (item === "Registration") path = "/auth";
                        else path = `/${item.toLowerCase().replace(" ", "-")}`;

                        return (
                            <Link
                                key={item}
                                to={path}
                                className="hover:text-yellow-400 transition-colors relative group py-1"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden ml-auto text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <Menu className="w-8 h-8" />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-[#111a45] shadow-lg border-t border-white/10 z-50 p-4">
                    <nav className="flex flex-col gap-4 text-center">
                        {["Home", "About Us", "Teams", "Career", "Registration", "Contact Us"].map((item) => {
                            let path = "/";
                            if (item === "Home") path = "/";
                            else if (item === "Registration") path = "/auth";
                            else path = `/${item.toLowerCase().replace(" ", "-")}`;

                            return (
                                <Link
                                    key={item}
                                    to={path}
                                    className="block py-2 text-white font-semibold hover:text-yellow-400"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
