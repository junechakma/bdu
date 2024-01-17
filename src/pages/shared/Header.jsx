import { IoIosSearch } from 'react-icons/io'
import logo1 from '../../assets/logo/logo1.png'
import MenuBar from './MenuBar'

function Header() {
  return (
    <>
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

      <MenuBar/>
    </>
  )
}

export default Header