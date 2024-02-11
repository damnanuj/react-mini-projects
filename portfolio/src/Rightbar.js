



const experienceData = [
    
    {
      "company": "Tech Innovations Inc.",
      "position": "Frontend Developer",
      "duration": "March 2023 - Current",
      "responsibilities": [
        "Developed and maintained responsive web applications using HTML, CSS, and JavaScript.",
        "Collaborated with designers and back-end developers to implement user-friendly interfaces and integrate with server-side APIs.",
        "Utilized React.js framework to build dynamic and interactive user interfaces, improving overall user experience.",
        "Optimized web application performance by implementing best practices and performance profiling tools.",
        "Worked with version control system Git for managing codebase and facilitating team collaboration.",
        "Implemented automated testing using Jest and Enzyme, ensuring code quality and reliability.",
      ],
      "skills": ["JavaScript", "React","Redux", "Html", "Css"]
    },
    
    {
        "company": "Web Solutions Co.",
        "position": "Junior Frontend Developer",
        "duration": "January 2022 - December 2023",
        "responsibilities": [
        "Assisted in the development of responsive web applications using HTML, CSS, and JavaScript.",
        "Worked closely with senior developers to implement UI/UX designs and improve user interactions.",
        "Contributed to bug fixing and troubleshooting to ensure smooth functionality across different browsers and devices.",
        "Participated in daily stand-ups and code reviews to enhance coding skills and maintain code quality.",
        "Learned and adopted modern frontend technologies and best practices under mentorship."
        ],
        "skills": ["JavaScript", "React","Java", "SpringBoot"]
    },
    
      
      
  ]

const ExperienceCard =({details})=>{
    return (
        <div className="experience">
            <div className="exp-header">
                <h3 className="company-name">{details.company+" - "+details.position}</h3>
                <p className="duration" >{details.duration}</p>
            </div>
            <ul>
                {
                    details.responsibilities.map((item)=><li>{item}</li>)
                }
            </ul>
            <div className="skills">
                {
                    details.skills.map((skill)=><span>{skill}</span>)
                }
            </div>
        </div>
    )
}
  
const projectsData = [
    {
      "project_name": "YouTube Clone",
      "live_link" : "https://youtube-damnanuj.netlify.app/",
      "description": "A web application clone of YouTube built with HTML, CSS, and JavaScript.",
      "key_points": [
        "Implemented core features including video playback, search functionality, and user authentication.",
        "Used AJAX for asynchronous data fetching and updating without page reloads.",
        "Styled the interface to closely resemble the original YouTube layout and design.",
        "Ensured cross-browser compatibility and responsive design for various screen sizes."
      ],
      "tech_stack": ["HTML", "CSS", "JavaScript"]
    },
    {
      "project_name": "Photo-Bazaar-App",
      "live_link" : "https://photo-bazaar.vercel.app/",
      "description": "A React web app for browsing stock photos.",
      "key_points": [
        "Utilized React hooks for managing state and side effects.",
        "Integrated ImageBazar API to fetch and display stock photos.",
        "Implemented user authentication and authorization features.",
        "Designed an intuitive user interface with responsive layout using CSS Grid and Flexbox."
      ]  ,
      "tech_stack": ["React", "JavaScript", "CSS", "API"]
    },
    {
      "project_name": "Spotify Clone",
      "live_link" : "https://damnanuj.github.io/Spotify-clone/",
      "description": "A web application clone of Spotify with responsive UI built using HTML and CSS.",
      "key_points": [
        "Designed a visually appealing and responsive user interface resembling Spotify's design.",
      "Implemented responsive layout techniques using HTML and CSS for various screen sizes.",
      "Ensured cross-browser compatibility and consistent user experience across devices."
      ],
      "tech_stack": ["HTML", "CSS"]
    }
  ]

const ProjectCard =({details})=>{
    return (
        <div className="project-card">
            <div className="project-heading">
                <h3>{details.project_name}</h3>
                <a href={details.live_link}>Live</a>

            </div>
                <h5>{details.description}</h5>
            <ul>
                {
                    details.key_points.map(keyPoint=><li>{keyPoint}</li>)
                }
            </ul>
            <div className="tech">
                {
                    details.tech_stack.map(tech => <span>{tech}</span>)
                }
            </div>
           
        </div>
    )
}  
  

export const Rightbar = () =>{
    return (
        <div className ="rightbar-container">
                <h1>Experience</h1>
                <div className="exp-card">
                    <ExperienceCard details={experienceData[0]}/>
                    <ExperienceCard details={experienceData[1]}/>
                </div>

             
                        <div className="projects">
                        <h1>Projects</h1>
                            <ProjectCard details={projectsData[0]}/>
                            <ProjectCard details={projectsData[1]}/>
                            <ProjectCard details={projectsData[2]}/>
                        </div>
                         
        </div>
    )
}