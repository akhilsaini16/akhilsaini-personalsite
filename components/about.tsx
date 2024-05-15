
const skills = [
    {skill: "Python"},
    {skill: "Java"},
    {skill: "R"},
    {skill: "C"},
    {skill: "C++"},
    {skill: "Node.js"},
    {skill: "Docker"},
    {skill: "AWS Cloud Technologies"},
    {skill: "RestAPI"},
    {skill: "Flutter"},
    {skill: "UI Path"},
    {skill: "CI/CD"},
    {skill: "Kubernetes"},
    {skill: "SQL"},
    {skill: "HTML"},
    {skill: "CSS"},
    {skill: "Git"},
    {skill: "GitHub"},
    {skill: "React"},
    {skill: "Next.js"},
    {skill: "TypeScript"},
    {skill: "JavaScript"},
]

export default function Skills() {
    return (
        <section id="About">
          <div className="my-12 pb-12 md:pt-16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">
              About Me
              <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
    
            <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
              <div className="md:w-1/2 ">
                <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                  Get to know me!
                </h1>
              </div>
              <div className="text-center md:w-1/2 md:text-left">
                <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {skills.map((item, idx) => {
                    return (
                      <p
                        key={idx}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                      >
                        {item.skill}
                      </p>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    // return (
    //     <section id="Skills" className="px-12 py-12">
    //         <div className="my-12 pb-12 md:pt-16 md:pb-48">
    //         <h1 className="text-center font-bold text-4xl">
    //             My Skills/Interests
    //             <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    //         </h1>
    //             <div className="flex flex-col items-stretch justify-center align-top md:flex-row md:text-left">
    //                 <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
    //                     {skills.map((item, idx) => {
    //                         return (
    //                         <p 
    //                             key={idx} 
    //                             className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
    //                         >
    //                             {item.skill}
    //                         </p>
    //                         )
    //                     })}
    //                 </div>
    //             </div>
    //         </div>
    //     </section>

    // );
  }