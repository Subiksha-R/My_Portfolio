import { motion } from 'framer-motion';
import { navLinks } from '../../constants';

const Header = () => {
  return (
    <div className="w-full flex items-center justify-center py-2">
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

        <nav className='lg:flex hidden space-x-[50px]'>
          {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item, index) => (

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

        {/* Nav Links aligned right */}
        {/* <ul className="flex gap-[50px] list-none">
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            className="text-hover"
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul> */}

      </div>
    </div>
  )
}

export default Header