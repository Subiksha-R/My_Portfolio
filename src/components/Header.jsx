import { motion } from 'framer-motion';
import { navLinks } from '../../constants';

const Header = () => {
    return (
<nav className="w-full flex items-center justify-center py-4">
  <div className="w-[60%] flex items-center justify-between">
    
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

    {/* Nav Links aligned right */}
    <ul className="flex gap-[50px] list-none">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className="text-white no-underline hover:text-red-500 transition duration-200"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>

  </div>
</nav>
    )
}

export default Header