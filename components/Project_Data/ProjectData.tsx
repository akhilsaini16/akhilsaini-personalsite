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
    // WhatsApp API"
    {
      category: "Data Analytics",
      name: "WhatsApp API",
      details: "Created an automated phone number verification system",
      description: (
        <>
          <p>
            Developed an <strong>automated phone number verification system</strong> using the <strong>WhatsApp API</strong> to send authentication messages to new users.
          </p>
          <p>
            Faced a limitation where the WhatsApp account was only accessible via code, making real-time message tracking difficult. To resolve this, I <strong>deployed a webhook server on Vercel</strong> to listen for incoming messages and process authentication responses.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Integrated <strong>WhatsApp API</strong> for automated phone verification.</li>
            <li>Designed and deployed a <strong>webhook server</strong> to capture and process incoming messages.</li>
            <li>Enabled real-time message tracking and response handling through <strong>Vercel</strong>.</li>
          </ul>
          <br />
          <p><strong>Technologies Used:</strong> WhatsApp API, Webhooks, Vercel</p>
        </>
      ),
      date: "Feb 2025",
      image: "/images/SaferLogo.png",
      link: "",
      skills: [
        {skill: ""},
      ],
    },

    // Similarity Matrix
    {
      category: "Data Analytics",
      name: "Priority & Similarity Analysis",
      details: "Conducted a two-part data analytics project",
      description:(
        <>
          <p>
            Conducted a <strong>two-part data analytics project</strong> involving priority scoring and similarity detection to extract meaningful insights from large datasets.
          </p>

          <p>
            In the first phase, developed a <strong>custom priority scoring algorithm</strong> by weighting multiple attributes across dataset entries, ensuring an accurate ranking system based on predefined criteria.
          </p>

          <p>
            In the second phase, performed a comprehensive <strong>data similarity analysis</strong> by comparing two datasets, applying advanced <strong>data preprocessing, transformation, and normalization</strong> techniques to standardize records.
          </p>

          <ul className="list-disc list-inside mt-2">
            <li>Engineered a <strong>priority scoring model</strong> by assigning weighted values to key attributes for ranking individuals in the dataset.</li>
            <li>Executed <strong>extensive data cleaning</strong>, including format normalization, text standardization, and handling inconsistencies in structured data.</li>
            <li>Utilized <strong>regular expressions</strong> and string manipulation techniques to remove prefixes (e.g., "Mr.", "Mrs.", "Dr.") and standardize names.</li>
            <li>Transformed phone number formats by stripping <strong>non-essential metadata</strong> such as area codes to ensure consistency across datasets.</li>
            <li>Optimized dataset comparison by applying <strong>string similarity algorithms</strong> to identify and match related records.</li>
          </ul>

          <br />
          <p><strong>Technologies Used:</strong> Python, SQL, Data Preprocessing, String Matching Algorithms</p>
        </>
      ),
      date: "Jan 2025 - Current",
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
      details: "Integrated dynamic APIs into a chatbot",
      description: (
        <>
          <p>
            Integrated <strong>dynamic APIs</strong> into a chatbot using <strong>Rapid API</strong>, enabling it to retrieve real-time data based on user queries.
          </p>
          <p>
            Designed and implemented scenarios where the chatbot required external data, then sourced and integrated the appropriate APIs to enhance its functionality.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Developed API-driven responses to dynamically provide real-time information to users.</li>
            <li>Integrated APIs from <strong>Rapid API</strong> into the chatbot to extend its capabilities.</li>
            <li>Created and tested use cases where the bot intelligently determines when an API call is required.</li>
          </ul>
          <br />
          <p><strong>Technologies Used:</strong> Rapid API, Chatbot Development, API Integration</p>
        </>
      ),
      date: "Sept 2024 - Current",
      image: "",
      link: "",
      skills: [
        {skill: ""},
      ],
    },
    
    // // Python Test Case Generator
    // {
    //   category: "Web Development",
    //   name: "Python Test Case Generator",
    //   details: "**need to fill in**",
    //   description:(
    //     <>
    //       <p>Created a website using <strong>Flask</strong> for users to generate test cases for their Python code.</p>
    //       <p>Integrated <em>OpenAI APIs</em> to generate test cases.</p>
    //       <ul className="list-disc list-inside mt-2">
    //         <li>Supports various Python functions</li>
    //         <li>Allows users to edit generated test cases</li>
    //       </ul>
    //       <p>Check out the <a href="https://example.com" target="_blank" className="text-blue-500 underline">GitHub repo</a>.</p>
    //     </>
    //   ),
    //   date: "November 2024",
    //   image: "/images/SaferLogo.png",
    //   link: "",
    //   skills: [
    //     {skill: ""},
    //   ],
    // },

    // Data Analysis & Visualization
    {
      category: "Data Analytics",
      name: "Data Analysis & Visualization",
      details: "Data analytics project",
      description:(
        <>
          <p>
            Conducted extensive <strong>data analysis</strong> to extract insights from large datasets, supporting the development of an <strong>AI chatbot</strong>. 
          </p>
          <p>
            Ran complex <strong>SQL, Python, and C++ queries</strong>, ensuring efficient data retrieval and preprocessing for machine learning training.
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
      name: "Drug Affordability Application",
      details: "A web app that helps users find cheaper drug alternatives.",
      description: (
        <>
          <p>
            Developed a <strong>drug affordability web application</strong> that helps users find the most cost-effective medication alternatives using a <strong>copay algorithm</strong>.
          </p>
          <p>
            Designed and implemented both the <strong>frontend and backend</strong>, integrating <strong>AWS Cognito</strong> for secure user authentication.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Built the frontend using <strong>Next.js</strong> and <strong>JavaScript</strong> to provide a seamless user experience.</li>
            <li>Engineered a <strong>serverless backend</strong> using <strong>AWS Lambda</strong> and <strong>DynamoDB</strong> for efficient data processing and scalability.</li>
            <li>Implemented a <strong>copay calculation algorithm</strong> to help users compare drug pricing and affordability.</li>
          </ul>
          <br />
          <p><strong>Technologies Used:</strong> Next.js, JavaScript, AWS Cognito, AWS Lambda, DynamoDB</p>
        </>
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