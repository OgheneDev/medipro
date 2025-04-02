'use client'
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Calendar } from "lucide-react"
import logo from '@/images/logo.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const navItems = [
        { name: 'Home', path: '/'},
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Pages', path: '/pages', hasDropdown: true },
        { name: 'Contact Us', path: '/contact' }
    ]
    
    return (
        <header className="bg-[#0A3635] w-full p-6 border-b border-b-gray-700 flex justify-between items-center">
            {/* Logo section */}
            <Link href='/' className="flex items-center">
                <Image
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-auto h-auto"
                />
            </Link>
            
            <div className="flex gap-7">
                {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10 text-[17px]">
                {navItems.map((item, index) => (
                    <div key={index} className="relative group">
                        <Link 
                            href={item.path} 
                            className="text-white hover:text-[#F2AA8A] transition-colors flex items-center"
                        >
                            {item.name}
                            {item.hasDropdown && (
                                <svg 
                                    className="w-4 h-4 ml-1" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            )}
                        </Link>
                    </div>
                ))}
            </div>
            
            {/* View Patient Records Button */}
            <Link 
                href="/book" 
                className="hidden md:flex items-center text-[18px] border-2 border-[#F2AA8A] text-[#F2AA8A] px-7 py-2 rounded-full hover:bg-[#F2AA8A] hover:text-[#0A3635] transition-colors"
            >
                <span>View Patient Records</span>
                <Calendar className="ml-2 w-5 h-5" />
            </Link>
            </div>
            
            {/* Mobile menu button */}
            <button
                className="md:hidden bg-[#F2AA8A] p-3 rounded-lg flex justify-center items-center"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? (
                    <X className="w-6 h-6 text-[#0A3635]" />
                ) : (
                    <Menu className="w-6 h-6 text-[#0A3635]" />
                )}
            </button>
            
            {/* Mobile menu (hidden by default) */}
            <div 
                className={`
                    fixed md:hidden top-0 right-0 h-screen w-full bg-[#F2AA8A] z-50 
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                <div className="border-b border-b-white py-6 px-5">
                    <button className="bg-[#0A3635] text-white p-3 rounded-lg" onClick={toggleMenu}>
                        <X size={23} />
                    </button>
                </div>
                <ul className="space-y-4 px-5 pt-6">
                    {navItems.map((item, index) => (
                        <li key={index} className="text-sm">
                            <Link href={item.path} className="text-white text-lg block">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <li className="text-sm">
                        <Link 
                            href="/book" 
                            className="text-[#F2AA8A] text-lg block flex items-center"
                        >
                            <span>View Patient Records</span>
                            <Calendar className="ml-2 w-5 h-5" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar