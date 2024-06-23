import React from 'react'
import heroImage from '../../assets/about/hero.png'
import head from '../../assets/about/head.png'
// import achievement1 from '../../assets/home/achievement1.png'
import GradientCard from '../../components/GradientCard'
import Gallery from '../../components/Gallery/Gallery'

import { TiTick } from "react-icons/ti";
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function About() {

    const pathData = [
        {
            id: 1,
            title: "Software Engineering",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            image: "./assets/about/image3.png",
            link: "/"
        },
        {
            id: 2,
            title: "Software and Machine",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            image: "./assets/about/image2.png",
            link: "/"
        },
        {
            id: 3,
            title: "Training Course",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
            image: "./assets/about/image1.png",
            link: "/"
        }
    ]

    const addressData = [
        {
            title: "Campus Address :",
            details: "Kaliakair, Gazipur-1750, Bangladesh."
        },
        {
            title: "Guest Address :",
            details: "Kaliakair, Gazipur-1750, Bangladesh."
        },
        {
            title: "",
            details: "Campus Location Lotifpur, Kaliakoair, Gazipur."
        },
        {
            title: "",
            details: "Campus Admin Building in TNT Bazar, Kaliakair, Gazipur"
        },

    ]

    return (
        <>
            <div className='bg-white text-black'>
                <div className=''>
                    <div className='pt-16 bg-light relative' >
                        <h1 className='text-2xl md:text-4xl font-semibold text-center pb-5'>Department of Internet of Things and Robotics Engineering in BDU                        </h1>

                        <p className='text-center pb-10 w-[50vw] mx-auto'>The department is dedicated to providing a dynamic learning environment that nurtures creativity, critical thinking, and problem-solving skills among our students.
                        </p>
                        <img src={heroImage} alt='' className='w-full rounded-xl z-10'></img>
                    </div>


                    <div className='w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-20 flex flex-col gap-10 rounded-xl shadow-md -translate-y-10 md:-translate-y-24'>
                        <h1 className='text-3xl text-center'>Mission and Vission</h1>
                        <p>Our mission is to provide a dynamic learning environment that cultivates creativity, critical thinking, and problem-solving skills among students. We aim to deliver a rigorous curriculum encompassing sensor networks, embedded systems, artificial intelligence, machine learning, control systems, and robotics algorithms. Through theoretical coursework, hands-on laboratory sessions, and real-world projects, we equip students with both theoretical knowledge and practical expertise in IoT and Robotics Engineering. We are committed to maintaining industry relevance through faculty expertise, collaboration with industry partners, and participation in national and international research collaborations. Our goal is to foster innovation, entrepreneurship, and lifelong learning among students, preparing them to contribute to global and national markets with sustainable technological advancements and solutions.                        "</p>
                        <p>To be a globally recognized leader in IoT and Robotics Engineering education and research, empowering students to innovate and solve complex challenges through interdisciplinary knowledge and cutting-edge technology. To become a leading center of excellence in IoT and Robotics Engineering, renowned for our world-class research, exceptional graduates, and transformative impact on industry and society. We envision a future where our graduates are at the forefront of technological innovation, leading the way in the development of intelligent and interconnected systems that enhance efficiency, sustainability, and quality of life.
                        </p>
                    </div>

                </div>

                {/*  */}
                <div className='w-[80vw] mx-auto flex flex-col md:flex-row justify-center  py-16 items-center'>
                    <div className='md:w-1/3 p-10'>
                        <img src={head}></img>
                    </div>
                    <div className='md:w-1/2 flex flex-col items-center md:items-start gap-8'>
                        <p className='text-primary text-xl font-bold'>Chairman’s Talk</p>
                        <h1 className='tetx-xl md:text-3xl font-bold w-4/5 text-center md:text-left'>Explore the Future of Technology with IRE at BDU                        </h1>
                        <p className='text-gray text-center md:text-left'>The department is trying to realize both the government's and this university's ambition for a "smart" Bangladesh. We want our graduates to be entrepreneurs as well as innovators who contribute to our communities and the economy. Cocurricular activities, programming competitions, software and hardware projects, workshops, training opportunities, industrial attachments, and research projects are all available to the department's students. We have experienced and well-qualified faculty in this field. For maintaining a cordial and healthy teacher-student relationship, a pleasant and competitive environment exists here. I invite you to look around and learn more about our department, undergraduate programs, faculty members, modern laboratories, and the numerous activities that take place in the IRE department. </p>
                        <div className='w-4/5 '>
                            <p>Samsuddin Ahmed  </p>
                            <p>Assistant Professor and Chairman</p>
                            <p> Department of Internet of Things and Robotics Engineering (IRE)</p>
                            <p>Email: samsuddin0001@bdu.ac.bd </p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='bg-light'>
                    <div className=' mx-auto w-[90vw] md:w-[80vw] pt-16 py-20'>
                        <h1 className='heading text-center mt-4' >What path you will take?</h1>

                        <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        <div className='pt-10 flex flex-col md:flex-row gap-5 my-10'>
                            {
                                pathData.map((item) => (
                                    <GradientCard key={item.id} item={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className='mx-auto w-[90vw] md:w-[80vw] pt-16 md:py-20 flex flex-col items-center'>
                    <h1 className='heading mt-4' >Building Gallery</h1>
                    <p className='sub-heading '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <Gallery />
                </div>

                {/* Bottom */}
                <div className=' mx-auto w-[80vw] pt-16 py-20 flex flex-col md:flex-row justify-between items-center text-black'>
                    <div>
                        <h1 className='heading mt-4 mb-10' >Our Locations</h1>
                        <ul>
                            {
                                addressData.map((item) => (
                                    <li className=' md:text-base flex items-center mb-4'> <TiTick size={32} className='text-primary ' /> {item.title}  {item.details}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex flex-col gap-10 my-10">
                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <FaLocationDot size={26} className=" text-white" />

                            </div>
                            <p className='md:text-xl '>Kaliakair, Gazipur-1750,<br /> Bangladesh.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <FaPhoneAlt size={26} className=" text-white" />
                            </div>
                            <p className='md:text-xl '>09666775534</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className='bg-primary p-3 rounded-full'>
                                <MdEmail size={26} className=" text-white" />
                            </div>
                            <p className='md:text-xl '>info@bdu.ac.bd</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About