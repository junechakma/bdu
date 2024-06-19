import React from 'react';
import { useParams } from 'react-router-dom';

const facultyData = [
  {
    id: 1,
    image: '/assets/peoples/dean.png',
    name: 'Head Name',
    designation: 'Head of Department',
    email: 'headofdept@gmail.com',
    telephone: '+8801703512127',
    website: 'www.pallab.com',
    research: 'Algorithms, Computational Complexity',
    contact: 'Department of Software Engineering, Room No. 318 BDU, Bangabandhu Sheikh Mujibur Rahman Digital University, Kaliakair, Dhaka',
    researchArea: 'Algorithms, Computational Complexity, Graph Theory, Stringology, Graph Drawing',
    researchInterest: 'Applied Algorithms, Machine Learning, Graph Theory, Stringology, Graph Drawing',
    academicBackground: [
      { degree: 'Ph.D. in Computer Science', institution: 'Monash University, Melbourne, Australia' },
      { degree: 'MS in Computer Science', institution: 'Monash University, Melbourne, Australia' },
      { degree: 'M.Sc. in Computer Science and Engineering', institution: 'Bangladesh University of Engineering and Technology' },
      { degree: 'B.Sc. in Software Engineering', institution: 'Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh' },
    ],
  },

];

const FacultyDetailsPage = () => {
  const { id } = useParams();
  const faculty = facultyData.find(faculty => faculty.id === parseInt(id));

  if (!faculty) {
    return <div>Faculty not found</div>;
  }

  return (
    <div className=" mb-10 mx-auto bg-white">
      <div className='relative flex flex-col items-center justify-center h-full mt-10'>
        <div className='h-[50vh] w-full flex items-center pt-[3%] flex-col gap-4 bg-light relative'>
          <h1 className="text-2xl md:text-4xl font-semibold text-black z-10">Faculty Details</h1>
          <p className="text-center z-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <img src='/assets/home/bg/wave.png' className='object-contain w-3/4 -left-36 absolute -bottom-36' />
        </div>

        <div className='-translate-y-40 bottom-0 w-[90vw] md:w-[70%] shadow-md  bg-white grid grid-cols-1 md:grid-cols-2  text-black rounded-md'>
          <img src='/assets/peoples/dean.png' className='w-full' />
          <div className='bg-[#544E5D] p-10 text-white md:pt-24 rounded-md'>
            <div>
              <h2 className="text-2xl font-semibold">{faculty.name}</h2>
              <p className="text-lg">{faculty.designation}</p>
              <p>Email: {faculty.email}</p>
              <p>Telephone: {faculty.telephone}</p>
              <p>Website: <a href={`https://${faculty.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">{faculty.website}</a></p>
              <p>Research: {faculty.research}</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.pallab.com" className="text-blue-500">Facebook</a>
                <a href="https://www.pallab.com" className="text-blue-500">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[86%] md:w-[80vw] mb-10 mx-auto pb-16 text-black'>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>{faculty.contact}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Research Area</h3>
            <p>{faculty.researchArea}</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Research Interest</h3>
            <p>{faculty.researchInterest}</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Academic Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faculty.academicBackground.map((item, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <p>{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultyDetailsPage;
