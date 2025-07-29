import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../constants';
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi"
import { useState } from 'react';

const Header = () => {
    //Toggle open/close
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    //contact form
    const [contactFormOpen, setContactFormOpen] = useState(false);

    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    const icons = [
        { icon: <FiGithub className="h-5 w-5 text-gray-300" />, link: "#" },
        { icon: <FiLinkedin className="h-5 w-5 text-gray-300" />, link: "#" },
        { icon: <FiMail className="h-5 w-5 text-gray-300" />, link: "#" },
    ];

    return (
        <header className='absolute w-full z-50 transition-all duration-300'>
            <div className=" container mx-auto px-4 sm:px-6 lg:px-8  w-full flex items-center justify-between">

                {/* Logo at the start */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="w-[100px] h-[100px] flex-shrink-0"
                >
                    <img src="/images/logo.png" alt="logo" className="w-full h-full object-contain" />
                </motion.div>

                {/* navbar links */}
                <div className='lg:flex hidden justify-between items-center gap-24'>
                    <nav className='space-x-[50px]'>
                        {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (

                            <motion.a
                                key={item}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 20,
                                    delay: 0.7 + index * 0.2
                                }}
                                className='relative text-white-800 hover:text-backgroundPurple transition-colors duration-300 group'
                                href='#'
                            >
                                {item}
                                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-backgroundPurple group-hover:w-full transition-all duration-300'></span>
                            </motion.a>

                        ))}
                    </nav>

                    <motion.button
                        initial={{ scale: 0, opacity: 0, x: -100 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 25,
                                delay: 1.6,
                                duration: 1.2,
                            },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="block py-2 px-4 rounded-3xl bg-gradient-to-r from-darkPurple to-lightPurple text-white text-lg font-bold"
                        onClick={() => {
                            toggleMenu()
                            setTimeout((() => {
                                openContactForm()
                            }), [100])
                        }}
                    >
                        Hire Me
                    </motion.button>
                </div>

                {/* mobile menu icon  */}
                <div className='md:hidden flex items-center'>
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            scale: 1,
                            delay: 0.3,
                            duration: 1.2,
                        }}
                        whileTap={{ scale: 0.7 }}
                        className='text-grey-300'
                        onClick={toggleMenu}
                    >
                        {isOpen ? <FiX className='h-6 w-6' /> : <FiMenu className='h-6 w-6' />}

                    </motion.button>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.2 }}
                className='md:hidden overflow-hidden bg-backgroundMenu shadow-lg px-4 py-5 space-y-5'>
                <nav className='flex flex-col justify-center px-7 space-y-3'>
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                        <motion.a
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.03, color: "#fff" }}
                            className="text-gray-300 font-medium py-2" key={item} href='#'>
                            {item}
                        </motion.a>
                    ))}
                </nav>

                <div className='pt-4 border-t border-gray-200 px-7 m-7 dark:border-gray-700'>
                    <div className='flex items-center justify-center space-x-5'>
                        {icons.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: i * 0.2,
                                        type: "spring",
                                        stiffness: 100,
                                    },
                                }}
                                whileHover={{ scale: 1.2, color: "#fff" }}
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>

                    <motion.button onClick={() => {
                        toggleMenu()
                        setTimeout((() => {
                            openContactForm()
                        }), [100])
                    }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className='mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-purple font-bold'>
                        Contact Me
                    </motion.button>
                </div>
            </motion.div>

            {/* contact form */}
            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className='fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4'
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{
                                type: 'spring',
                                damping: 30,
                                stiffness: 200,
                                duration: 0.8
                            }}

                            className='bg-backgroundMenu rounded-xl shadow-xl w-full max-w-md p-6'>
                            <div className='flex justify-between items-center mb-4'>
                                <h1 className='text-2xl font-bold text-gray-300'>
                                    Get In Touch
                                </h1>
                                <button onClick={closeContactForm}>
                                    <FiX className='h-5 w-5 text-gray-300 font-semibold' />
                                </button>
                            </div>

                            {/* inputs*/}
                            <form className='space-y-4'>
                                <div>
                                    <label htmlFor='name' className='block text-sm font-medium text-gray-300 mb-2'>Name</label>
                                    <input type='text' id='name' placeholder='Your Name' className='w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-textPurple focus:border-textPurple bg-gray-800 ' />
                                </div>

                                <div>
                                    <label htmlFor='email' className='block text-sm font-medium text-gray-300 mb-2'>Email</label>
                                    <input type='email' id='email' placeholder='Your Email' className='w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-textPurple focus:border-textPurple bg-gray-800 ' />
                                </div>

                                <div>
                                    <label htmlFor='message' className='block text-sm font-medium text-gray-300 mb-2'>How can we help you?</label>
                                    <textarea rows="4" id='message' placeholder='Your Name' className='w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-textPurple focus:border-textPurple bg-gray-800 ' />
                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className='w-full px-4 py-2 bg-gradient-purple hover: black rounded-lg shadow-md hover:shadow-lg'>
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

export default Header