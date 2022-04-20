import { services } from '../data'
import ServiceCard from '../components/ServiceCard'
import { motion } from 'framer-motion'
import { GetServerSideProps,GetServerSidePropsContext} from 'next'
import { fadeInUp, stagger, routeAnimation } from '../animations'
import Head from 'next/head'


const About = () => {
  
  
  return (
    <motion.div 
      className='flex flex-col flex-grow px-6 pt-1' 
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Portfolio | Pawornrat</title>
      </Head>
      <h6 className='my-3 text-base font-medium'>
        Seeking a career in software testing in a challenging environment where I can utilize my technical skills towards the development 
        and implementation of new ideas and contributing to the growth of the organization
      </h6>
      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100' style={{ marginLeft:'-1.5rem', marginRight:'-1.5rem' }}>
        <h6 className='my-3 text-xl font-semibold tracking-wide'>What I am doing</h6>
        <motion.div className='grid gap-6 my-3 md:grid-cols-2' variants={stagger} initial="initial" animate="animate">
          {services.map((service) => (
            <motion.div 
              variants={fadeInUp}
              className='col-span-2 p-2 bg-gray-200 rounded-lg md:col-span-1 dark:bg-dark-200'
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}



export default About