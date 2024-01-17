import { Link } from 'react-router-dom'

function GradientCard({title, description, image, link}) {

    return (
        <Link to={link} className='w-1/3 relative rounded-xl overflow-hidden'>
            <img src={image} className='w-full h-full opacity-70 rounded-xl' />
            <div className='p-5 flex flex-col gap-5 justify-center bg-gradient-to-b from-transparent to-[#0B108A] absolute top-1/2 h-1/2'>

                <h2 className='title text-[#06040A]'>{title}</h2>

                <div>
                    <p className='text-white text-sm'>{description}</p>
                </div>
            </div>
        </Link >

    )
}

export default GradientCard