import { Link } from "react-router-dom"

function Notice() {

    const notice = [
        {
            id: 1,
            title: 'Bangladesh Chair: Bangabandhu Sheikh Mujibur Rahman Professorial Fellowship',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date:"8 NOV"
        }, {
            id: 2,
            title: 'একাডেমিক বকেয়া পরিশোধের বিজ্ঞপ্তি',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date:"8 NOV"
        },
        {
            id: 3,
            title: 'Class Routine of Department of Educational Technology (EDTECH) 2023',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date:"8 NOV"
        }, {
            id: 4,
            title: 'Office Order for Hall Seat Rent',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date:"8 NOV"
        },
    ]
    

    

    return (
        <>
            <div className="w-[86%] md:w-[80vw] mb-10 mx-auto ">
                
                <div className="my-16">

                    <h1 className="heading text-center">Notice</h1>
                    <p className="w-1/2 text-center mx-auto mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div>
                    <div className=' pt-16 flex flex-row gap-x-2 gap-y-10 flex-wrap'>
                        {
                            notice.map((item) => (
                                <div className='w-[38vw] flex flex-row gap-4 bg-white'>
                                    <div className='w-1/2 bg-[#C4C4C4] flex justify-center items-center relative'>
                                        <img src="./assets/logo/logo1.png" className='w-1/2   rounded-md'></img>
                                        <div className='bg-orange-400 w-20 h-20 absolute -right-5 bottom-0 flex items-center p-4'>
                                            <p className='text-white text-center'>{item.date}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2 p-5 flex flex-col gap-4 justify-between'>
                                        <h2 className=' text-[#06040A]'>{item.title}</h2>

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