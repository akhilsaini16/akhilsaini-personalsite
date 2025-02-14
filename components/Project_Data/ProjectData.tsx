export type Project = {
  category: string;
  name: string;
  description: JSX.Element;
  date: string;
  details: string;
  skills: { skill: string }[];
  image: string;
  link: string;
};

export const projects: Project[] = [
    // Similarity Matrix
    {
      category: "Data Analytics",
      name: "Similarity Matrix",
      details: "**need to fill in**",
      description:(
        <>
          <p>Created a website using <strong>Flask</strong> for users to generate test cases for their Python code.</p>
          <p>Integrated <em>OpenAI APIs</em> to generate test cases.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Supports various Python functions</li>
            <li>Allows users to edit generated test cases</li>
          </ul>
          <p>Check out the <a href="https://example.com" target="_blank" className="text-blue-500 underline">GitHub repo</a>.</p>
        </>
      ),
      date: "2024 - Current",
      image: "/images/SaferLogo.png",
      link: "",
      skills: [
        {skill: ""},
      ],
    },

    // Rapid API
    {
      category: "Data Analytics",
      name: "Rapid API",
      details: "**need to fill in**",
      description:(
        <>
          <p>Created a website using <strong>Flask</strong> for users to generate test cases for their Python code.</p>
          <p>Integrated <em>OpenAI APIs</em> to generate test cases.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Supports various Python functions</li>
            <li>Allows users to edit generated test cases</li>
          </ul>
          <p>Check out the <a href="https://example.com" target="_blank" className="text-blue-500 underline">GitHub repo</a>.</p>
        </>
      ),
      date: "Sept 2024 - Current",
      image: "",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    
    // Python Test Case Generator
    {
      category: "Web Development",
      name: "Python Test Case Generator",
      details: "**need to fill in**",
      description:(
        <>
          <p>Created a website using <strong>Flask</strong> for users to generate test cases for their Python code.</p>
          <p>Integrated <em>OpenAI APIs</em> to generate test cases.</p>
          <ul className="list-disc list-inside mt-2">
            <li>Supports various Python functions</li>
            <li>Allows users to edit generated test cases</li>
          </ul>
          <p>Check out the <a href="https://example.com" target="_blank" className="text-blue-500 underline">GitHub repo</a>.</p>
        </>
      ),
      date: "November 2024",
      image: "/images/SaferLogo.png",
      link: "",
      skills: [
        {skill: ""},
      ],
    },

    // Data Analysis & Visualization
    {
      category: "Data Analytics",
      name: "Data Analysis & Visualization",
      details: "**need to fill in**",
      description:(
        <>
          <p>
            Conducted extensive <strong>data analysis</strong> to extract insights from large datasets, supporting the development of an <strong>AI chatbot</strong>. 
          </p>
          <p>
            Worked closely with stakeholders to run complex <strong>SQL, Python, and C++ queries</strong>, ensuring efficient data retrieval and preprocessing for machine learning training.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Executed and optimized <strong>data queries</strong> to extract relevant patterns and trends.</li>
            <li>Refined datasets to improve <strong>AI model training</strong> and chatbot responsiveness.</li>
          </ul>
          <br />
          <p><strong>Technologies Used:</strong> Python, SQL, C++</p>
        </>

      ),
      date: "June 2024 - Current",
      image: "",
      link: "",
      skills: [
        {skill: ""},
      ],
    },

    // Storm Tracking Application
    {
      category: "Mobile App Dev",
      name: "Storm Tracking Application",
      details: "A weather tracking app deployed on the iOS App Store.",
      description: (
        <>
          <p>
            Collaborated closely with a UConn professor to enhance and maintain a <strong>storm tracking mobile application</strong> that helps users prepare for unexpected weather conditions.
          </p>
          <p>
            Led continuous improvements to the application, focusing on UI/UX enhancements, and backend optimizations.
          </p>
          <p>
            Upgraded the application to maintain compatibility with the latest iOS versions, resolving legacy software issues through extensive debugging and version control.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Refactored codebase to improve efficiency, maintainability, and scalability.</li>
            <li>Developed and integrated new front-end features to enhance user experience.</li>
            <li>Conducted rigorous testing to comply with <strong>App Store Review Guidelines</strong>, ensuring stability and performance.</li>
            <li>Managed multiple <strong>iOS App Store submissions</strong>, resolving compliance issues and successfully deploying updates.</li>
          </ul>
          <br />
          <p><strong>Technologies Used:</strong> Flutter, MySQL, REST APIs</p>
        </>
      ),
      date: "2023-2024",
      image: "/images/SaferLogo.png",
      link: "https://apps.apple.com/fi/app/safer-storm-safety/id1631027712",
      skills: [
        {skill: "Flutter"},
        {skill: "Javascript"},
        {skill: "MySQL"},
      ],
    },

    // Drug Afforability Application
    {
      category: "Mobile App Dev",
      name: "Drug Afforability Application",
      details: "A web app that helps users find cheaper drug alternatives.",
      description: (
        <></>
      ),
      date: "Summer 2023",
      image: "/images/drug1.png",
      link: "None",
      skills: [
        {skill: "Next.js"},
        {skill: "Javascript"},
        {skill: "CSS"},
        {skill: "DynamoDB"},
        {skill: "AWS Cognito & Lambdas"},
      ],
    },

    // Mobile Health Application
    {
        category: "Mobile App Dev",
        name: "Mobile Health Application",
        details: "A habit-tracking Android app for mental and physical health.",
        description: (
          <>
            <p>
              Developed a <strong>habit-tracking mobile application</strong> that enables users to set and track mental and physical health goals.
            </p>
            <p>
              Worked with a team of 7 interns to design, develop, and deploy the application from scratch.
            </p>
            <p>
              Contributed to both the <strong>front-end and back-end</strong>, implementing key features and ensuring seamless data flow.
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Users can create and monitor personalized health goals.</li>
              <li>Implemented real-time progress tracking and reminders.</li>
            </ul>
            <br></br>
            <p><strong>Technologies Used:</strong> Kotlin, TypeScript, DynamoDB, API Gateway</p>
          </>
        ),
        date: "Summer 2022",
        image: "/images/health.png",
        link: "None",
        skills: [
          {skill: "Kotlin"},
          {skill: "TypeScript"},
          {skill: "DynamoDB"},
          {skill: "AWS API Gateway"},
        ],
    },
  ]