import './team.css';
import { motion } from 'framer-motion';

const parentVariant = {
   hidden: {},
   animate: {
      transition: {
         staggerChildren: 1,
         delayChildren: 0.3,
      },
   },
};

const slideDownVariant = {
   hidden: {
      y: '-70px',
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.6,
         ease: 'easeOut',
      },
   },
};
const slideUpVariant = {
   hidden: {
      y: '70px',
      opacity: 0,
   },
   animate: {
      y: 0,
      opacity: 1,
      transition: {
         duration: 0.6,
         ease: 'easeOut',
      },
   },
};

const team = [
   {
      url: '/images/david_sumisola.png',
      name: 'David Sumisola',
      role: 'C.E.O and Chief Technology Officer',
   },
   {
      url: '/images/daniel_bayode.png',
      name: 'Daniel Bayode',
      role: 'Customer Support',
   },
   {
      url: '/images/oluwafemi_damilola.png',
      name: 'Oluwafemi Damilola',
      role: 'Head of Operation',
   },
   {
      url: '/images/paul_ekundayo.png',
      name: 'Paul Ekundayo',
      role: 'Graphic Designer',
   },
   {
      url: '/images/precious_emere.png',
      name: 'Precious Emere',
      role: 'Digital Strategist and Digital Marketer',
   },
   {
      url: '/images/rose_marvelous.png',
      name: 'Rose Marvelous',
      role: 'Frontend Developer',
   },
   {
      url: '/images/timothy_omafe.png',
      name: 'Timothy Omafe',
      role: 'Software Engineer',
   },
];

const Team = () => {
   return (
      <section className='team'>
         <motion.h1 className='team_h1'
            variants={slideUpVariant}
            initial="hidden"
            whileInView="animate"
            viewport={{ once: true }}
         >Meet Our Expert Team</motion.h1>
         <p className='team_p'>
            Say hello to our outstanding team of digital gurus ready to work on your project and ensure you get the results you deserve.
         </p>

         <motion.ul
            className='team_ul'
            variants={parentVariant}
            initial="hidden"
            animate="animate"
         >
            {team.map((el, index) => (
               <motion.li
                  className='team_ul_li'
                  key={index}
                  variants={index % 2 === 0 ? slideDownVariant : slideUpVariant}
                  initial="hidden"
                  whileInView="animate"
                  viewport={{ once: true, amount: 0.2 }}
               >
                  <div>
                     <img src={el.url} alt={el.name} />
                  </div>
                  <h3>{el.name}</h3>
                  <p>{el.role}</p>
               </motion.li>
            ))}
         </motion.ul>
      </section>
   );
};

export default Team;
