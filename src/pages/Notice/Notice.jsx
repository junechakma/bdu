import { Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react";

const notice = [
    {
        id: 1,
        title: 'Bangladesh Chair: Bangabandhu Sheikh Mujibur Rahman Professorial Fellowship',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "8 NOV"
    }, {
        id: 2,
        title: 'একাডেমিক বকেয়া পরিশোধের বিজ্ঞপ্তি',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "8 NOV"
    },
    {
        id: 3,
        title: 'Class Routine of Department of Educational Technology (EDTECH) 2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "8 NOV"
    }, {
        id: 4,
        title: 'Office Order for Hall Seat Rent',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        date: "8 NOV"
    },
]


function Notice() {


    const [notices, setNotices] = useState([]);
    const fetchNotices = async () => {
        try {
            const response = await axios.get('https://bdu-swe-dept.vercel.app/all-notice');
            setNotices(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };


    const colors = ['bg-orange-400', 'bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-purple-400'];

    const RandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
            <div className="w-[86%] md:w-[80vw] mb-10 mx-auto ">

                <div className="py-4 md:my-16 flex  flex-col items-center justify-center">

                    <h1 className="heading text-center">Notice</h1>
                    <p className="sub-heading text-xl ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div>
                    <div className=' pt-16 grid grid-cols-1 md:grid-cols-2 gap-4 '>
                        {
                            notice.map((item) => (
                                <div className='flex flex-row gap-4 bg-white '>
                                    <div className='w-1/2 bg-[#C4C4C4] flex justify-center items-center relative'>
                                        <img src="./assets/logo/logo1.png" className='w-1/2   rounded-md'></img>
                                        <div className={`${RandomColor()} w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4`}>
                                            <p className='text-white text-center'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 p-5 flex flex-col gap-4 justify-between'>
                                        <h2 className=' text-[#06040A] text-sm md:text-base'>{item.title}</h2>

                                        <div>
                                            <Link className="text-primary font-bold mt-10">Download</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notice