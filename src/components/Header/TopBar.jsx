import logo1 from '../../assets/logo/logo1.png'
function TopBar() {
    return (
        <>
            <div className="w-full flex flex-row">
    
                <div className='bg-[#081F51] py-5 w-1/2 pl-[10vw]'>
                    <img src={logo1}></img>
                    <p className='text-white pt-2'>Department of Software Engineering</p>
                </div>
                <div className='bg-[#D9D9D9] flex flex-col justify-between py-5 w-full pr-[10vw]'>
                    <div className='flex justify-end'>
                        <input type="text" className='bg-transparent rounded-xl border border-black w-[20vw]'></input>
                    </div>
                    <div className='flex flex-row pt-5 justify-between'>
                            <ul className='flex flex-row pl-5 gap-x-5'>
                                <li><a>BDU Website</a></li>
                                <li><a>Moodle</a></li>
                                <li><a>UMS</a></li>
                            </ul>
                    
                            <p>Faculty of Software and Machine Intelligence</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default TopBar