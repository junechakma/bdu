import PeopleCard from '../../components/Peoples/PeopleCard';

const headOfDepartment = [
    {
        image: '/assets/peoples/dean.png',
        name: 'Head Name',
        designation: 'Head of Department',
        email: 'headofdept@gmail.com',
    },
];

const professors = [
    {
        image: '/assets/peoples/person1.png',
        name: 'Professor Name 1',
        designation: 'Professor',
        email: 'professor1@gmail.com',
    },
    {
        image: '/assets/peoples/dean.png',
        name: 'Professor Name 2',
        designation: 'Professor',
        email: 'professor2@gmail.com',
    },
];

const assistantProfessors = [
    {
        image: '/assets/peoples/person2.png',
        name: 'Assistant Professor Name 1',
        designation: 'Assistant Professor',
        email: 'assistantprof1@gmail.com',
    },
    {
        image: '/assets/peoples/person3.png',
        name: 'Assistant Professor Name 2',
        designation: 'Assistant Professor',
        email: 'assistantprof2@gmail.com',
    },
];

const Peoples = () => {
    return (
        <div className='bg-white pb-10'>
            <div className='relative flex flex-col items-center justify-center h-full'>
                <div className='h-[60vh] w-full flex items-center pt-[3%] flex-col gap-10 bg-light relative'>
                    <h1 className="text-4xl font-semibold text-black z-10">Faculty</h1>
                    <p className="text-center z-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br />
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <img src='/assets/home/bg/wave.png' className='object-contain w-3/4 -left-36 absolute -bottom-36' />
                </div>

                <div className='-translate-y-40 bottom-0 w-[70%] shadow-md  bg-white grid grid-cols-2  text-black rounded-md'>
                    <img src='/assets/peoples/dean.png' className='w-full' />
                    <div className='bg-[#544E5D] p-10 text-white pt-24'>
                        <h1 className='text-2xl font-semibold text-white pb-6'>Dean Name</h1>
                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                    </div>
                </div>
            </div>

            <div className='w-[86%] md:w-[80vw] mb-10 mx-auto'>
                <div>
                    <h1 className='text-2xl text-black font-semibold '>Head of the Department</h1>
                    <div className='flex gap-6 my-10'>
                        {
                            headOfDepartment.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-black font-semibold '>Professors</h1>
                    <div className='flex gap-6 my-10'>
                        {
                            professors.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-black font-semibold '>Assistant Professors</h1>
                    <div className='flex gap-6 my-10'>
                        {
                            assistantProfessors.map((item, index) => (
                                <PeopleCard
                                    key={index}
                                    image={item.image}
                                    name={item.name}
                                    designation={item.designation}
                                    email={item.email}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Peoples;
