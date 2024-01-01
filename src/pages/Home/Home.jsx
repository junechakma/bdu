import { IoIosSearch } from 'react-icons/io'
import logo1 from '../../assets/logo/logo1.png'
import hero from '../../assets/home/hero.png'
import MenuBar from '../shared/MenuBar'
import { Link } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";

import wave from '../../assets/home/bg/wave.png'

import icon1 from '../../assets/home/icon1.png'
import icon5 from '../../assets/home/icon5.png'

const facaltyDetails = [
  {
    id: 1,
    title: 'Faculty',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2,
    title: 'Mission and Vision',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3,
    title: 'Office and Stuff',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4,
    title: 'History',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

const academicDetails = [
  {
    id: 1,
    title: 'Undergraduates Studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 2,
    title: 'Graduate Studies',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'Training Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }
]

const achievementsData = [
  {
    id: 1,
    title: 'Robo Tech Olympiad 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }, {
    id: 2,
    title: 'Graduated Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'Robo Tech Olympiad 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }
]
const upcomingActivity = [
  {
    id: 1,
    title: 'IRAB Education Expo 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }, {
    id: 2,
    title: 'IoT Present Cultural Night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'IRAB Education Expo 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }, {
    id: 4,
    title: 'IoT Present Cultural Night',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
]

const latestNews = [
  {
    id: 1,
    title: 'Robo Tech Olympiad 2023',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }, {
    id: 2,
    title: 'Graduated Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    title: 'Robo Tech Olympiad 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  }
]

function Home() {
  return (
    <>
      {/* Header */}

      <div className="pt-6 w-full flex flex-row ">
        <div className=' py-3 w-1/2 pl-[10vw]'>
          <img src={logo1}></img>
          <p className='text-black pt-2 text-lg'>Department of Cyber Physical System</p>
        </div>
        <div className=' flex flex-col justify-between py-3 w-full pr-[10vw]'>
          <div className='flex justify-end relative '>
            {/* search */}
            <input type="text" className='bg-transparent rounded-xl border-2 border-grey w-[20vw] px-2 outline-none h-10 '>
            </input>
            <button className='absolute right-2 border-l-2 border-grey px-2 h-full'>
              <IoIosSearch size={26} className='' />
            </button>
          </div>

          <div className='flex flex-row pt-5 justify-end'>
            <p className='text-lg'>Faculty of Software and Machine Intelligence</p>
          </div>
        </div>
      </div>

      <hr className='text-black'></hr>

      {/* Menu */}
      <MenuBar />

      {/* Hero Image */}
      <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute w-1/2 inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute w-1/2  top-1/2 -translate-y-1/2 left-[10vw] text-white font-bold text-2xl">
          <p className='text-6xl font-bold mb-5 tracking-wide leading-snug'>
            Welcome to the <br /> future educations systems
          </p>

          <Link to="/" className='button'>Learn More <IoIosArrowRoundForward size={26} /></Link>
        </div>
      </div>

      {/* End of the Header */}

      <main className='w-[80vw] mx-auto object-contain' style={{ backgroundImage: `url(${wave})` }}>

        {/*  */}
        <div className='flex flex-row gap-10 pt-56 pb-20  items-center object-cover' style={{ backgroundImage: `url(${wave})` }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rXSWbpUVG3Q?si=yK6E7ARl5aLs9Rxr" title="YouTube video player" frameborder="0" allowfullscreen className='w-1/2'></iframe>
          <div className=' w-1/2 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>BDU Cyber Physical Mission <br /> and Vision</h1>
            <p className='text-gray'>The Department of Software Engineering will build skilled human resources by conducting up-to-date educational activities through integrated implementation of Face to Face, Blended Learning and Flipped Learning Methods. Under this section, a four-year Bachelor of Science in Software Engineering program compatible with Industry 4.0 has been launched.</p>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col my-20'>
          <h1 className='heading text-center pb-10'>Details of Software and machine <br /> Intelligence</h1>

          <div className='flex flex-row flex-wrap gap-5 '>
            {
              facaltyDetails.map((item) => (
                <div key={item.id} className='flex flex-row gap-5 w-[39vw] p-6 hover:shadow-md rounded-lg'>
                  <img src={icon1} className='w-16 h-16' />
                  <div className='flex flex-col gap-2'>
                    <h2 className='title'>{item.title}</h2>
                    <p className='text-gray'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/*  */}

        <div className='bg-light pt-16'>
          <h2 className='text-center uppercase text-primary'>Upcoming Session 2023-2024</h2>
          <h1 className='heading text-center mt-4' >Academic Details</h1>
          <div className='flex flex-row gap-5 my-10'>
            {
              academicDetails.map((item) => (
                <div key={item.id} className='flex flex-col gap-5 w-1/3 p-6 bg-white hover:shadow-2xl rounded-lg'>
                  <div className='flex flex-row gap-5 items-center'>
                    <img src={icon5} className='w-16 h-16' />
                    <h2 className='title'>{item.title}</h2>
                  </div>
                  <div>
                    <p className='text-gray'>{item.description}</p>
                  </div>
                  <Link className='text-primary'>{`Learn more >>>`}</Link>
                </div>
              ))
            }
          </div>
        </div>
      </main>
    </>
  )
}

export default Home