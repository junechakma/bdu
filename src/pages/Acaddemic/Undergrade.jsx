import React from 'react'

const Undergrade = () => {
  const courses = [
    { id: 1, code: 'BDU1012', title: 'Structured Programming Language', level: 1, term: 1 },
    { id: 2, code: 'BDU1013', title: 'Structured Programming Language Sessional', level: 1, term: 1 },
    { id: 3, code: 'BDU1014', title: 'Discrete Mathematics', level: 1, term: 1 },
    { id: 4, code: 'BDU1015', title: 'Computer Programming', level: 1, term: 1 },
    { id: 5, code: 'BDU1016', title: 'Computer Programming Sessional', level: 1, term: 1 },
    { id: 6, code: 'BDU1017', title: 'Introduction to Electrical Engineering', level: 1, term: 1 },
    { id: 7, code: 'BDU1018', title: 'Introduction to Electrical Engineering Sessional', level: 1, term: 1 },
    { id: 8, code: 'BDU1019', title: 'Calculus', level: 1, term: 1 },
    { id: 9, code: 'BDU1010', title: 'Physics Sessional', level: 1, term: 1 },
    { id: 10, code: 'BDU1011', title: 'Structure of Matter, Electricity & Magnetism', level: 1, term: 1 },
  ];

  return (
    <div>
      <div className=''>
        <div className='pt-10 bg-light relative' >
          <h1 className='text-2xl md:text-4xl font-semibold text-center pb-5'>Undergraduates Studies</h1>

          <p className='text-center pb-10'>Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh</p>
          <img src='/assets/undergrad/hero.png' alt='' className='w-full z-10'></img>
        </div>


        <div className='w-[90vw] md:w-[80vw] mx-auto bg-white p-6 md:p-20 flex flex-col gap-10 rounded-xl shadow-md -translate-y-10 md:-translate-y-1/2 text-black'>
          <h1 className='text-3xl text-center'>Software Engineering</h1>
          <p>This curriculum is offered for students seeking a broad and deep knowledge of digital computers' theory, design, and applications. The first two years are spent on essential work in mathematics and programming and an introduction to the fundamental areas of computer science. The third year completes the work in basic Software Engineering and requires electives to broaden the student's academic background. During the fourth year, each student has options to obtain a deeper understanding of topics in which the student has a particular interest.</p>
          <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        </div>

      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Course Plan:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Lecture</th>
                <th className="py-2 px-4 border-b">Course ID</th>
                <th className="py-2 px-4 border-b">Course Title</th>
                <th className="py-2 px-4 border-b">Level</th>
                <th className="py-2 px-4 border-b">Term</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="py-2 px-4 border-b">{course.id}</td>
                  <td className="py-2 px-4 border-b">{course.code}</td>
                  <td className="py-2 px-4 border-b">{course.title}</td>
                  <td className="py-2 px-4 border-b">{course.level}</td>
                  <td className="py-2 px-4 border-b">{course.term}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Undergrade