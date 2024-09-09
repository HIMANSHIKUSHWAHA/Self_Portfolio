import logo from '../assets/image.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="logo" className="w-14 h-10 ml-4 mr-8 mt-4" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/himanshikushwaha/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                {/* GitHub */}
                <a href="https://github.com/HIMANSHIKUSHWAHA" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                {/* LeetCode */}
                <a href="https://leetcode.com/u/HIMANSHIKUSHWAHA/" target="_blank" rel="noopener noreferrer">
                    <SiLeetcode />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
