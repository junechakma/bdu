import { IoIosSearch, IoMdClose, IoMdMenu } from 'react-icons/io'
import logo1 from '../../assets/logo/logo1.png'
import MenuBar from './MenuBar'
import { useState } from 'react'

function Header() {
  const [toggleNavbar, setToggleNavbar] = useState(false)

  return (
    <>
      <div className="pt-2 md:pt-6 w-full flex flex-row z-10">
        <div className='py-3 md:w-1/2 pl-4 md:pl-[10vw]'>
          <img src={logo1} className='h-12 md:h-20' />
          <p className='text-black pt-2 text-sm md:text-lg'>Department of Cyber Physical System</p>
        </div>
        <div className='hidden md:flex flex-col pt-10 md:justify-between py-3 w-full md:pr-[10vw] '>
          <div className='flex justify-end relative '>
            {/* search */}
            <input type="text" className='bg-transparent rounded-xl border-2 border-grey md:w-[20vw] px-2 outline-none h-10 '>
            </input>
            <button className='absolute right-2 border-l-2 border-grey px-2 h-full'>
              <IoIosSearch size={26} className='' />
            </button>
          </div>

          <div className='flex flex-row pt-5 justify-end'>
            <p className='text-sm md:text-lg'>Faculty of Software and Machine Intelligence</p>
          </div>
        </div>

        <div className='block md:hidden self-end'>
          {
            !toggleNavbar ? <IoMdMenu color='black' size={32} onClick={()=>setToggleNavbar(!toggleNavbar)}/> :<IoMdClose  color='black' size={32} onClick={()=>setToggleNavbar(!toggleNavbar)}/>
          }
        </div>
      </div>


      <hr className='text-black'></hr>

      <MenuBar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar}/>
    </>
  )
}

export default Header