import React from 'react'
const researchAreas = [
    {
        title: 'Artificial Intelligence and Machine Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon1.png', // replace with actual path to icon
        bgColor: 'bg-blue-500',
    },
    {
        title: 'Algorithms and Theory',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon2.png', // replace with actual path to icon
        bgColor: 'bg-orange-500',
    },
    {
        title: 'Big Data Systems and Analytics',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon3.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Bioinformatics and Computational Biology',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon4.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Computer Vision',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon5.png', // replace with actual path to icon
        bgColor: 'bg-blue-500',
    },
    {
        title: 'Cloud Computing',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon6.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Data Science',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon7.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Cybersecurity',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon8.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Deep Learning',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon9.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
    {
        title: 'Software Engineering',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        icon: '/path/to/your/icon10.png', // replace with actual path to icon
        bgColor: 'bg-green-500',
    },
];

const Research = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-10 md:py-16 bg-blue-600 text-white relative overflow-hidden min-h-[40vh]">
                <img src='/assets/home/bg/wave.png' className='object-contain  absolute  w-3/4 opacity-50' />

                <div className="absolute inset-0 bg-blue-700 opacity-50 z-0"></div>
                <div className="relative z-10 flex flex-col gap-4 items-center text-center">
                <h1 className="text-2xl md:text-4xl font-semibold text-white z-10">Research Area</h1>
                    <p className="text-sm md:text-base text-center px-6 z-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>

            <div className="w-[90%] md:w-[80vw] mb-10 mx-auto  px-4 py-16">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-black pb-10 text-center">The Department of Software Engineering facilitates environments for the following research areas:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {researchAreas.map((area, index) => (
                        <div key={index} className="flex items-start p-4 bg-white shadow rounded-lg">
                            <div className={`flex-shrink-0 w-16 h-16 ${area.bgColor} text-white flex items-center justify-center rounded-full`}>
                                <img src={area.icon} alt={`${area.title} icon`} className="w-8 h-8" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-xl font-semibold">{area.title}</h3>
                                <p className="mt-2 text-gray-600">{area.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Research