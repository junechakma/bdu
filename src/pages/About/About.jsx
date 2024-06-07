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
            <div className='bg-white'>
                <div className=''>
                    <div className='pt-16 bg-light relative' >
                        <h1 className='text-2xl md:text-4xl font-semibold text-center pb-5'>About Software Engineering at  BDU</h1>

                        <p className='text-center pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            <br />
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={heroImage} alt='' className='w-full rounded-xl z-10'></img>
                    </div>


                    <div className='w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-20 flex flex-col gap-10 rounded-xl shadow-md -translate-y-10 md:-translate-y-24'>
                        <h1 className='text-3xl text-center'>Mission and Vission</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    </div>

                </div>

                {/*  */}
                <div className='w-[80vw] mx-auto flex flex-col md:flex-row justify-center  py-16 items-center'>
                    <div className='md:w-1/3 p-10'>
                        <img src={head}></img>
                    </div>
                    <div className='md:w-1/2 flex flex-col items-center md:items-start gap-8'>
                        <p className='text-primary text-xl font-bold'>Chairman’s Talk</p>
                        <h1 className='tetx-xl md:text-3xl font-bold w-4/5 text-center md:text-left'>Education is the Most powerfull Weapon</h1>
                        <p className='text-gray text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <div className='w-4/5 '>
                            <p>Prof Dr </p>
                            <p>Chairman, Dept of Software Enigneering
                                Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className='bg-light'>
                    <div className=' mx-auto  w-[80vw] pt-16 py-20'>
                        <h1 className='heading text-center mt-4' >What path you will take?</h1>

                        <p className='sub-heading mx-auto  text-center mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

                        <div className='pt-10 flex flex-row gap-5 my-10'>
                            {
                                pathData.map((item) => (
                                    <GradientCard key={item.id} title={item.title} description={item.description} image={item.image} link={item.link} />
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className='mx-auto w-[80vw] pt-16 py-20 flex flex-col items-center'>
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