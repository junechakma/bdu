
import hero from '../../assets/home/hero.png'
import MenuBar from '../shared/MenuBar'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";

import wave from '../../assets/home/bg/wave.png'

import icon1 from '../../assets/home/icon1.png'
import icon5 from '../../assets/home/icon5.png'
import achievement1 from '../../assets/home/achievement1.png'

import upcoming from '../../assets/home/upcoming1.png'

import logo2 from '../../assets/home/logo1.png'

import Header from '../shared/Header'
import GradientCard from '../../components/GradientCard';

const facaltyDetails = [
  {
    id: 1,
    title: 'Faculty',
    description: "To develop innovative technologies, products, and services that cater to the global market's needs and contribute to the growth of international businesses. "
  },
  {
    id: 2,
    title: 'Mission and Vision',
    description: "To contribute to the national market and government sector by driving advancements in diverse sectors while working towards the achievement of industry 4.0 and 5.0 goals through efficient, productive, and sustainable implementations. "
  },
  {
    id: 3,
    title: 'Office and Stuff',
    description: "To foster continuous research, innovation, and lifelong learning, pushing the boundaries of technology by engaging in cutting-edge research and staying updated with the latest advancements, tools, and methodologies to address emerging challenges. "
  },
  {
    id: 4,
    title: 'History',
    description: "To accelerate industry progress with IoT and Robotics integration for enhanced productivity and efficiency. "
  }
]

const academicDetails = [
  {
    id: 1,
    title: 'Undergraduates Studies',
    description: "The Faculty of Cyber Physical Systems of this University currently offers a four-year bachelor's (honors) degree under the Department of Internet of Things and Robotics Engineering. This faculty has been established with the aim of creating skilled human resources suitable for the Fourth Industrial Revolution.",
    link: "/undergrad"

  },
  {
    id: 2,
    title: 'Graduate Studies',
    description: "Embark on an advanced academic journey with our Graduate Studies in Cyber Physical Systems at BDU. Our program is designed to equip students with cutting-edge knowledge and practical skills in integrating cyber and physical components to address complex industry challenges. ",
    link: "/graduate"
  },
  {
    id: 3,
    title: 'Training Programs',
    description: "Join us at BDU to advance your career and contribute to the future of Cyber Physical Systems. Apply now to be part of a dynamic and innovative community dedicated to pushing the boundaries of technology. ",
    link: "/training-programs"
  }
]

const achievementsData = [
  {
    id: 1,
    title: "BDU's Robo Pulse Competes in IEEE R10 Finals in Bangkok ",
    description: "Students from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) have successfully developed an advanced autonomous rover, EcoRover designed for environmental monitoring and management. This innovative project showcases the technical expertise and forward-thinking mindset of BDU's IoT and Robotics Engineering Department. The EcoRover autonomously navigates diverse terrains, collects environmental data, and performs tasks crucial for conservation efforts. Equipped with cutting-edge sensors, artificial intelligence (AI), and machine learning (ML) algorithms, the rover ensures precise and reliable operations. The EcoRover features advanced navigation capabilities using LiDAR, GPS, and ultrasonic sensors for obstacle detection and path planning, enhanced by AI-driven algorithms for real-time decision-making. It excels in environmental monitoring by measuring air and water quality, temperature, humidity, and other parameters, while also identifying pollutants in water bodies and providing remediation recommendations. Its robust all-terrain design allows it to operate in urban, rural, and remote areas, built with durable materials to withstand harsh conditions. For communication and control, the rover offers remote monitoring through wireless data transmission to a centralized system and includes a user-friendly interface for remote operation and data visualization. The EcoRover has versatile applications in climate change mitigation, water management, disaster response, and agriculture, providing valuable data for climate research, environmental assessments, and agricultural productivity. Developed with support from Bangladesh’s leading electronics manufacturer Walton and in collaboration with industry experts and academic mentors from BDU, the EcoRover will be showcased at various national and international platforms. The development team plans to enhance its capabilities further, integrating more advanced AI features and expanding its environmental monitoring functions. This project underscores BDU's commitment to fostering innovation, research, and practical problem-solving skills among its students, preparing them to tackle future challenges with cutting-edge technology. ",
    image: './assets/home/achievement1.png'
  },
  {
    id: 2,
    title: "BDU Students Develop Autonomous Rover ",
    description: "Students from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) have successfully developed an advanced autonomous rover, EcoRover, designed for environmental monitoring and management. This innovative project showcases the technical expertise and forward-thinking mindset of BDU's IoT and Robotics Engineering Department. The EcoRover autonomously navigates diverse terrains, collects environmental data, and performs tasks crucial for conservation efforts. Equipped with cutting-edge sensors, artificial intelligence (AI), and machine learning (ML) algorithms, the rover ensures precise and reliable operations. The EcoRover features advanced navigation capabilities using LiDAR, GPS, and ultrasonic sensors for obstacle detection and path planning, enhanced by AI-driven algorithms for real-time decision-making. It excels in environmental monitoring by measuring air and water quality, temperature, humidity, and other parameters, while also identifying pollutants in water bodies and providing remediation recommendations. Its robust all-terrain design allows it to operate in urban, rural, and remote areas, built with durable materials to withstand harsh conditions. For communication and control, the rover offers remote monitoring through wireless data transmission to a centralized system and includes a user-friendly interface for remote operation and data visualization. The EcoRover has versatile applications in climate change mitigation, water management, disaster response, and agriculture, providing valuable data for climate research, environmental assessments, and agricultural productivity. Developed with support from Bangladesh’s leading electronics manufacturer Walton and in collaboration with industry experts and academic mentors from BDU, the EcoRover will be showcased at various national and international platforms. The development team plans to enhance its capabilities further, integrating more advanced AI features and expanding its environmental monitoring functions. This project underscores BDU's commitment to fostering innovation, research, and practical problem-solving skills among its students, preparing them to tackle future challenges with cutting-edge technology. ",
    image: './assets/home/achievement2.png'
  },
  {
    id: 3,
    title: "1st Runner up Robo Tech Olympiad 2022 ",
    description: "In 2022, a team from Bangabandhu Sheikh Mujibur Rahman Digital University (BDU) achieved the prestigious accolade of 1st Runner-Up in the Robo Tech Olympiad. The competition, renowned for its rigorous challenges and innovation in robotics, saw BDU's team demonstrate exceptional technical skill and problem-solving abilities. Led by dedicated students from the IoT and Robotics Engineering Department, the team showcased their expertise in designing and programming robots to meet complex tasks and challenges presented during the Olympiad. Their achievement not only highlights the high caliber of education and mentorship provided at BDU but also underscores the university's commitment to nurturing talent in emerging technologies. The accolade further solidifies BDU's reputation as a leading institution fostering innovation and excellence in robotics and related fields, setting a benchmark for future competitions and inspiring students to continue pushing the boundaries of technological innovation. ",
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

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate('/details', { state: { item } });
  };

  return (
    <>
      {/* Header */}
      {/* Hero Image */}
      <div className="relative h-[30vh] md:h-[80vh] bg-cover bg-center " style={{ backgroundImage: `url(${hero})` }} >
        <div className="absolute w-full md:w-1/2 h-1/2 md:h-full bottom-0 bg-gradient-to-t md:bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute bottom-0 w-full md:w-1/2  md:top-1/2 md:-translate-y-1/2  md:left-[10vw] text-white md:font-bold md:text-2xl flex md:flex md:flex-col md:items-center md flex-col justify-center items-center ">
          <p className='md:self-start text-xl md:text-6xl font-bold mb-5 tracking-wide leading-snug text-center md:text-left'>
            Welcome to the  <br /> future  education  systems in IRE
          </p>

          <Link to="/about" className=' md:self-start text-sm  items-center bg-blue-800 p-1 rounded-md mb-2 inline-flex'>Learn More <IoIosArrowRoundForward size={26} /></Link>
        </div>
      </div>

      {/* End of the Header */}

      <main className='object-contain bg-white' style={{ backgroundImage: `url(${wave})` }}>

        {/*  */}
        <div className=' mission w-[90vw] md:w-[80vw]  mx-auto  flex flex-col md:flex-row gap-10 pt-10 md:pt-56 pb-20  items-center object-contain' style={{ backgroundImage: `url(${wave})` }}>
          <iframe src="https://www.youtube.com/embed/rXSWbpUVG3Q?si=yK6E7ARl5aLs9Rxr" title="YouTube video player" frameborder="0" allowfullscreen className='md:w-[40vw]  h-[30vh] md:h-[40vh]'></iframe>
          <div className=' md:w-1/2 flex flex-col gap-10'>
            <h1 className='text-2xl md:text-4xl font-bold text-center text-black'>BDU Cyber Physical Mission <br /> and Vision</h1>
            <p className='text-gray text-center md:text-left'>The mission of BDU Cyber Physical Systems is to advance the frontiers of technology by integrating cyber and physical systems to solve complex, real-world problems. We are dedicated to fostering innovation, enhancing security, and improving efficiency through cutting-edge research, interdisciplinary collaboration, and the development of highly skilled professionals. Our vision is to be a global leader in Cyber Physical Systems, driving technological innovation and shaping a future where seamlessly integrated cyber and physical systems enhance the quality of life, ensure sustainable development, and provide robust solutions to the challenges of tomorrow. </p>
          </div>
        </div>

        {/* Details of Software and machine */}
        <div className=' mx-auto  w-[90vw] md:w-[80vw] flex flex-col mb-10 md:my-20'>
          <h1 className='heading text-center pb-10'>The Scope of IoT and Robotics Engineering </h1>

          <div className='flex flex-row flex-wrap gap-5 '>
            {
              facaltyDetails.map((item) => (
                <div key={item.id} className='flex flex-row gap-5 md:w-[39vw] p-6 hover:shadow-md rounded-lg'>
                  <img src={icon1} className='w-12 h-12 md:w-16 md:h-16' />
                  <div className='flex flex-col gap-2'>
                    {/* <h2 className='text-lg'>{item.title}</h2> */}
                    <p className='text-gray text-sm md:text-base text-justify'>{item.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        {/* Upcoming Session */}
        <div className=' bg-light pt-16 pb-10'>
          <div className='mx-auto  w-[90vw] md:w-[80vw]'>
            <h2 className='text-center uppercase text-primary'>Upcoming Session 2023-2024</h2>
            <h1 className='heading text-center mt-4' >Academic Details</h1>
            <div className='flex flex-col md:flex-row gap-5 my-10'>
              {
                academicDetails.map((item, index) => (
                  <div key={index} className='flex flex-col gap-5 md:w-1/3 p-6 bg-white hover:shadow-2xl rounded-lg shadow-md'>
                    <div className='flex flex-row gap-5 items-center'>
                      <img src={icon5} className='w-16 h-16' />
                      <h2 className='text-xl md:text-2xl font-semibold text-wrap'>{item.title}</h2>
                    </div>
                    <div>
                      <p className='text-gray'>{item.description}</p>
                    </div>
                    <Link to={item.link} className='text-primary'>{`Learn more >>>`}</Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className=' mx-auto w-[90vw] md:w-[80vw]  pt-16'>
          <h1 className='heading text-center mt-4' >Achievements</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='flex flex-col md:flex-row gap-5 my-10'>
            {
              achievementsData.map((item) => (
                <GradientCard key={item.id} item={item} title={item.title} description={item.description} image={item.image} link={item.link} />
              ))
            }
          </div>
        </div>

        {/* Upcoming  Activity*/}
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Upcoming Activity</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className='sub-heading mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Link to="/notice" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white'>Learn More</Link>
          </div>

          <div className=' pt-16 flex flex-col md:flex-row gap-x-2 gap-y-10 flex-wrap'>
            {
              upcomingActivity.map((item) => (
                <Link to="/notice">
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
                </Link>
              ))
            }
          </div>
        </div>

        {/* Latest News */}
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading mt-4' >Latest News</h1>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-sm text-black mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            {/* <NavLink to="/" className='px-4 py-2 rounded-lg border-2  text-primary hover:bg-primary hover:text-white text-sm md:text-ba'>Learn More</NavLink> */}
          </div>

          <div className='pt-16 flex flex-col md:flex-row gap-6  flex-wrap'>
            {
              latestNews.map((item, index) => (
                <div
                  key={index}
                  className='md:w-[25vw] flex flex-col gap-2'
                  onClick={() => handleNavigate(item)}
                >
                  <div className='w-26 h-[250px] overflow-hidden rounded-md flex items-center justify-center'>
                    <img src={item.image} className='max-w-full max-h-full object-contain rounded-md' />
                  </div>

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
        <div className='mx-auto  w-[90vw] md:w-[80vw] pt-16'>
          <h1 className='heading text-center mt-4' >Industry Collaboration</h1>

          <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className='flex flex-row justify-between gap-5 my-10 py-10 bg-[#081f51] overflow-x-auto px-4'>
            <img src="/assets/home/logo2.png" className='h-16'></img>
            <img src="assets/home/logo1.png" className='h-16'></img>
            <img src="assets/home/logo3.png" className='h-16'></img>
            <img src="assets/home/logo4.png" className='h-16'></img>
            <img src="assets/home/logo5.png" className='h-16'></img>
          </div>
        </div>

      </main>
    </>
  )
}

export default Home