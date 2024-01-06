
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
    image: "achievement1"
  }, {
    id: 2,
    title: 'Graduated Programs',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: "achievement1"
  },
  {
    id: 3,
    title: 'Robo Tech Olympiad 2022',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    image: "achievement1"
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
    agenda: 'Event'
  }, {
    id: 2,
    title: '9,000-Year-Old Grave of a Female Hunter in Peru Shows Women Tackled Big Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    agenda: 'New Course Open',
  },
  {
    id: 3,
    title: 'Emilly Borthwick-Wong promoted to executive director of undergradu...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    agenda: 'Picnic'
  }
]

function Home() {
  return (
    <>
      {/* Header */}
      {/* Hero Image */}
      <div className="relative h-[80vh] bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }}>
        <div className="absolute w-1/2 inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute w-1/2  top-1/2 -translate-y-1/2 left-[10vw] text-white font-bold text-2xl">
          <p className='text-6xl font-bold mb-5 tracking-wide leading-snug'>
            Welcome to the <br /> future educations systems
          </p>

          <Link to="/" className='button'>Learn More <IoIosArrowRoundForward size={26} /></Link>
        </div>
      </div>

      {/* End of the Header */}

      <main className='object-contain ' style={{ backgroundImage: `url(${wave})` }}>

        {/*  */}
        <div className=' mission w-[80vw]  mx-auto  flex flex-row gap-10 pt-56 pb-20  items-center object-contain' style={{ backgroundImage: `url(${wave})` }}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rXSWbpUVG3Q?si=yK6E7ARl5aLs9Rxr" title="YouTube video player" frameborder="0" allowfullscreen className='w-1/2'></iframe>
          <div className=' w-1/2 flex flex-col gap-10'>
            <h1 className='text-4xl font-bold'>BDU Cyber Physical Mission <br /> and Vision</h1>
            <p className='text-gray'>The Department of Software Engineering will build skilled human resources by conducting up-to-date educational activities through integrated implementation of Face to Face, Blended Learning and Flipped Learning Methods. Under this section, a four-year Bachelor of Science in Software Engineering program compatible with Industry 4.0 has been launched.</p>
          </div>
        </div>

        {/* Details of Software and machine */}
        <div className=' mx-auto  w-[80vw] flex flex-col my-20'>
          <h1 className='heading text-center pb-10'>Details of Software and machine <br /> Intelligence</h1>

          <div className='flex flex-row flex-wrap gap-5 '>
            {
              facaltyDetails.map((item) => (
                <div key={item.id} className='flex flex-row gap-5 w-[39vw] p-6 hover:shadow-md rounded-lg'>
                  <img src={icon1} className='w-16 h-16' />
                  <div className='flex flex-col gap-2'>
                    <h2 className='text-lg'>{item.title}</h2>
                    <p className='text-gray'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Upcoming Session */}

        <div className='  bg-light pt-16 pb-10'>
          <div className='mx-auto  w-[80vw]'>
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
          <div className='flex flex-row gap-5 my-10'>
            {
              achievementsData.map((item) => (
                <div key={item.id} className='w-1/3 relative'>

                  <img src={achievement1} className='w-full h-full opacity-70 ' />
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
            <NavLink to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white'>Learn More</NavLink>
          </div>

          <div className=' pt-16 flex flex-row gap-x-2 gap-y-10 flex-wrap'>
            {
              upcomingActivity.map((item) => (
                <div className='w-[38vw] flex flex-row gap-2'>
                  <div className='w-1/2  relative'>
                    <img src={upcoming} className='w-full rounded-md'></img>
                    <div className='bg-primary w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4'>
                      <p className='text-white text-center'>8 NOV</p>
                    </div>
                  </div>
                  <div className='w-1/2 p-5 flex flex-col gap-2'>
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
            <p className='sub-heading mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <NavLink to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white'>Learn More</NavLink>
          </div>

          <div className=' pt-16 flex flex-row gap-6  flex-wrap'>
            {
              latestNews.map((item) => (
                <div className='w-[25vw] flex flex-col gap-2'>
                  <img src={upcoming} className='w-full rounded-md'></img>

                  <div className=' p-5 flex flex-col gap-2'>
                    <p className='text-primary text-sm'>{item.agenda}</p>

                    <h2 className='title text-[#06040A]'>{item.title}</h2>
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
          <div className='flex flex-row justify-between gap-5 my-10 bg-primary'>
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