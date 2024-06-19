
import hero from '../../assets/home/hero.png'
import MenuBar from '../shared/MenuBar'
import { Link, NavLink } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";

import wave from '../../assets/home/bg/wave.png'

import icon1 from '../../assets/home/icon1.png'
import icon5 from '../../assets/home/icon5.png'
import achievement1 from '../../assets/home/achievement1.png'

import upcoming from '../../assets/home/upcoming1.png'

import logo2 from '../../assets/home/logo1.png'

import Header from '../shared/Header'

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
    image: './assets/home/achievement1.png'
  }, {
    id: 2,
    title: 'Graduated Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: './assets/home/achievement2.png'
  },
  {
    id: 3,
    title: 'Robo Tech Olympiad 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: './assets/home/achievement3.png'
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
    title: 'Atomic clocks could detect exotic low-mass fields from merging black holes',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    agenda: 'Event',
    image: './assets/home/latest1.png'
  }, {
    id: 2,
    title: '9,000-Year-Old Grave of a Female Hunter in Peru Shows Women Tackled Big Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    agenda: 'New Course Open',
    image: './assets/home/latest2.png'
  },
  {
    id: 3,
    title: 'Emilly Borthwick-Wong promoted to executive director of undergradu...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    agenda: 'Picnic',
    image: './assets/home/latest3.png'
  }
]

function Home() {
  return (
    <>
      {/* Header */}
      {/* Hero Image */}
      <div className="relative h-[30vh] md:h-[80vh] bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }} >
        <div className="absolute w-full md:w-1/2 h-1/2 md:h-full bottom-0 bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full md:w-1/2  md:top-1/2 md:-translate-y-1/2  md:left-[10vw] text-white md:font-bold md:text-2xl flex md:block flex-col justify-center items-center">
          <p className='text-xl md:text-6xl font-bold mb-5 tracking-wide leading-snug text-center md:text-left'>
            Welcome to the <br /> future educations systems
          </p>

          <Link to="/" className='text-sm  items-center bg-blue-800 p-1 rounded-md mb-2 inline-flex'>Learn More <IoIosArrowRoundForward size={26} /></Link>
        </div>
      </div>

      {/* End of the Header */}

      <main className='object-contain bg-white' style={{ backgroundImage: `url(${wave})` }}>

        {/*  */}
        <div className=' mission w-[80vw]  mx-auto  flex flex-col md:flex-row gap-10 pt-10 md:pt-56 pb-20  items-center object-contain' style={{ backgroundImage: `url(${wave})` }}>
          <iframe  src="https://www.youtube.com/embed/rXSWbpUVG3Q?si=yK6E7ARl5aLs9Rxr" title="YouTube video player" frameborder="0" allowfullscreen className='w-[90vw] md:w-1/2 h-[30vh] md:h-[40vh]'></iframe>
          <div className=' md:w-1/2 flex flex-col gap-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>BDU Cyber Physical Mission <br /> and Vision</h1>
            <p className='text-gray text-center md:text-left'>The Department of Software Engineering will build skilled human resources by conducting up-to-date educational activities through integrated implementation of Face to Face, Blended Learning and Flipped Learning Methods. Under this section, a four-year Bachelor of Science in Software Engineering program compatible with Industry 4.0 has been launched.</p>
          </div>
        </div>

        {/* Details of Software and machine */}
        <div className=' mx-auto  w-[80vw] flex flex-col mb-10 md:my-20'>
          <h1 className='heading text-center pb-10'>Details of Software and machine <br /> Intelligence</h1>

          <div className='flex flex-row flex-wrap gap-5 '>
            {
              facaltyDetails.map((item) => (
                <div key={item.id} className='flex flex-row gap-5 md:w-[39vw] p-6 hover:shadow-md rounded-lg'>
                  <img src={icon1} className='w-12 h-12 md:w-16 md:h-16' />
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>{item.title}</h2>
                    <p className='text-gray text-sm md:text-base'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Upcoming Session */}

        <div className=' bg-light pt-16 pb-10'>
          <div className='mx-auto  w-[80vw]'>
            <h2 className='text-center uppercase text-primary'>Upcoming Session 2023-2024</h2>
            <h1 className='heading text-center mt-4' >Academic Details</h1>
            <div className='flex flex-col md:flex-row gap-5 my-10'>
              {
                academicDetails.map((item) => (
                  <div key={item.id} className='flex flex-col gap-5 md:w-1/3 p-6 bg-white hover:shadow-2xl rounded-lg shadow-md'>
                    <div className='flex flex-row gap-5 items-center'>
                      <img src={icon5} className='w-16 h-16' />
                      <h2 className='text-xl md:text-2xl font-semibold text-wrap'>{item.title}</h2>
                    </div>
                    <div>
                      <p className='text-gray'>{item.description}</p>
                    </div>
                    <Link to="/" className='text-primary'>{`Learn more >>>`}</Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className=' mx-auto  w-[80vw] pt-16'>
          <h1 className='heading text-center mt-4' >Achievements</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='flex flex-col md:flex-row gap-5 my-10'>
            {
              achievementsData.map((item) => (
                <div key={item.id} className='md:w-1/3 relative'>

                  <img src={item.image} className='w-full h-full opacity-70 ' />
                  <div className='p-5 flex flex-col gap-5 justify-center bg-gradient-to-b from-transparent to-[#0B108A] absolute top-1/2 h-1/2'>

                    <h2 className='title text-[#06040A]'>{item.title}</h2>

                    <div>
                      <p className='text-white text-sm'>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Upcoming  Activity*/}
        <div className='mx-auto  w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Upcoming Activity</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className='sub-heading mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Link to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white'>Learn More</Link>
          </div>

          <div className=' pt-16 flex flex-col md:flex-row gap-x-2 gap-y-10 flex-wrap'>
            {
              upcomingActivity.map((item) => (
                <div className='md:w-[38vw] flex flex-col md:flex-row gap-2'>
                  <div className='md:w-1/2  relative'>
                    <img src={upcoming} className='w-full rounded-md'></img>
                    <div className='bg-primary w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4'>
                      <p className='text-white text-center'>8 NOV</p>
                    </div>
                  </div>
                  <div className='md:w-1/2 p-5 flex flex-col gap-2'>
                    <h2 className='title text-[#06040A]'>{item.title}</h2>
                    <p className='text-black text-sm'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Latest News */}
        <div className='mx-auto  w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Latest News</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-sm text-black mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <NavLink to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white text-sm md:text-ba'>Learn More</NavLink>
          </div>

          <div className=' pt-16 flex flex-col md:flex-row gap-6  flex-wrap'>
            {
              latestNews.map((item, index) => (
                <div className='md:w-[25vw] flex flex-col gap-2' key={index}>
                  <img src={item.image} className='w-full rounded-md'></img>

                  <div className='md:p-5 flex flex-col gap-2'>
                    <p className='text-primary text-sm'>{item.agenda}</p>

                    <h2 className='font-semibold text-xl md:text2xl text-[#06040A]'>{item.title}</h2>
                    <p className='text-black text-sm'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/*  */}
        <div className='mx-auto  w-[80vw] pt-16'>
          <h1 className='heading text-center mt-4' >Industry Collaboration</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='flex flex-row justify-between gap-5 my-10 bg-[#081f51] overflow-x-auto'>
            <img src={logo2} className='py-10'></img>
            <img src={logo2} className='py-10'></img>
            <img src={logo2} className='py-10'></img>
            <img src={logo2} className='py-10'></img>
            <img src={logo2} className='py-10'></img>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home