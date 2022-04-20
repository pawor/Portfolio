import { languages, tools } from "../data"
import Bar from '../components/Bar'
import { motion } from 'framer-motion'
import { fadeInUp, routeAnimation } from '../animations'
import Head from 'next/head'


const Resume = () => {
  
  return (
    <motion.div 
      className="px-6 py-2" 
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Web Developer | Resume | Pawornrat</title>
      </Head>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
            <p className="font-semibold">Suranaree University of Technology</p>
            <p className="my-3">
              Relevant Coursework : AI, Deep Learning, Machine Learning,
              Computer Networks, Computer and Communication, Microprocessors,
              Operating System, Software Engineering.
  
            </p>
          </div>
          <div>
            <h5 className="my-2 text-xl font-bold">General Skills</h5>
            <p className="px-6 py-1 my-0 text-sm">Problem-Solving</p>
            <p className="px-6 py-1 my-0 text-sm">Teamwork</p>
            <p className="px-6 py-1 my-0 text-sm">Public speaking</p>
          </div>
        </motion.div>

        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-2 text-2xl font-bold">Experience</h5>
          <div>
            <h3 className="my-2 text-xl font-bold">Assistant Engineer</h3>
            <p className="font-semibold">Sony Technology (Thailand) Co., Ltd</p>
            <span className="my-0 font-sans text-sm">November 2021 - March 2022</span>
            
            <p className="my-1">
              I created a system to check equirment based on user requirements   
            </p>
          </div>
          <div>
            <h3 className="my-2 text-xl font-bold">Tutor</h3>
            <p className="font-semibold">Student dormitory learning center, SUT</p>
            <p className="my-0 font-sans text-sm">August 2020 - November 2020</p>
            <p className="my-1">
              Teach about computer programming using Python and C language.  
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar value={language} key={language.name}/>
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar value={tool} key={tool.name}/>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Resume