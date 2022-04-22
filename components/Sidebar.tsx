import {AiFillGithub,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {GrCertificate} from 'react-icons/gr'
import { useTheme } from 'next-themes'
import Image from 'next/image'


const Sidebar = () => {
    const { theme, setTheme } = useTheme()
    
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark":"light")
    }
    
    
    return (
        <>
            <Image 
                src="/images/p2.jpg"
                alt="avatar"
                className='mx-auto border rounded-full'
                height="128px"
                width="128px"
                layout='intrinsic'
                quality="100"
            />
            
            <h3 className='my-4 text-3xl font-medium tracking-wider font-kaushan'>
                <span className='text-rose'>Pawornrat</span> Tabchompoo
            </h3>
            <a 
                className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
                href='/assets/pawornrat.pdf'
                download='pawornrat.pdf'
            >
                <GrCertificate className='w-6 h-6' /> 
                <span>Certificate</span>
            </a>

            <a 
                className='flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'
                href='/assets/Pawornrat Tabchompoo.pdf'
                download='Pawornrat Tabchompoo.pdf'
            >
                <GiTie className='w-6 h-6' /> 
                <span>Download Resume</span>
            </a>

            <div className='flex justify-around w-9/12 mx-auto my-5 text-rose md:w-full'>
                <a 
                    href='https://web.facebook.com/pawornrat3659'
                    aria-label='Facebook'
                >
                    <AiFillFacebook className='w-8 h-8 cursor-pointer'/>
                </a>
                <a 
                    href='https://github.com/pawor'
                    aria-label='Github'
                >
                    <AiFillGithub className='w-8 h-8 cursor-pointer'/>
                </a>
                <a 
                    href='https://www.linkedin.com/in/pawornrat-tepchompoo-6988a2221/'
                    aria-label='Linkedin'
                >
                    <AiFillLinkedin className='w-8 h-8 cursor-pointer'/>
                </a>
            </div>

            <div 
                className='py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'
                style={{marginLeft:'-1rem',marginRight:'-1rem'}}
            >
                <div className='flex items-center justify-center'>
                    <GoLocation className="mr-2"/>
                    <span>Bangkok,Thailand</span>
                </div>
                <p className='my-2'>pawornrat.2680@gmail.com</p>
                <p className='my-2'>0837524967/0986518879</p>
            </div>

            <button  
                className='w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-rose to-blue-300 focus:outline-none hover:scale-105'
                onClick={() => window.open('mailto:pawornrat.2680@gmail.com')}
            >
                Email Me
            </button>
            <button 
                className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105"
                onClick={changeTheme}
            >
                Toggle Theme
            </button>
        </>
    )
}

export default Sidebar