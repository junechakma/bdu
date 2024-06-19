import { useState } from 'react';
import logo1 from '../../assets/logo/logo1.png'
import { IoIosArrowDown, IoIosArrowUp, IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
function TopBar() {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div className={`${!visible  ? 'w-full -translate-y-44 md:-translate-y-[90%] transition-transform duration-300 absolute z-20' : 'w-full translate-y-0 transition-transform duration-300 absolute z-20' } `}>
                <div className=" w-full flex flex-row ">
                    <div className='bg-dark py-3 w-1/2 px-4 md:pl-[10vw]'>
                        <img src={logo1}></img>
                        <p className='text-white pt-2 text-sm md:text-lg'>Department of Cyber Physical System</p>
                    </div>
                    
                    <div className='bg-[#D9D9D9] flex flex-col justify-between py-3 w-full pr-[10vw]'>
                        <div className='hidden md:flex justify-end relative'>
                            {/* search */}
                            <input type="text" className='bg-transparent rounded-xl border-2 border-grey w-[20vw] px-2 outline-none h-10'>
                            </input>
                            <button className='absolute right-2 border-l-2 border-grey px-2 h-full'>
                                <IoIosSearch size={26} className='' />
                            </button>
                        </div>

                        <div className='flex flex-row pt-5 justify-between'>
                            <ul className='flex flex-col md:flex-row pl-5 gap-x-5 text-dark text-lg'>
                                <Link>BDU Website</Link>
                                <Link>Moodle</Link>
                                <Link>UMS</Link>
                            </ul>
                            <p className='hidden md:block text-lg'>Faculty of Software and Machine Intelligence</p>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-dark h-6 md:h-10 relative'>
                    <div onClick={() => setVisible(!visible)} className='bg-dark w-10 h-16 absolute right-12 md:right-20 -bottom-10 rounded-b-3xl py-2 flex justify-center items-end'>
                        {
                            visible === false ? <IoIosArrowDown size={26} color='#fff' /> : <IoIosArrowUp size={26} color='#fff' />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBar