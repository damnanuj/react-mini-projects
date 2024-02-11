


const skillsData = {
    languages : ["Java", "JavaScript"],
    databases : ["MySQL"],
    acheivents : ["Attending classes","Highest package of the decade", "Firewall cracked and hacked"],
    frameworks : ["React"]
}
const educationData =[
    {
        course : "Bsc",
        institute : "JPU",
        year : "2023",
        branch : "science"
    },
    {
        course : "Intermediate",
        institute : "DBSD",
        year : "2018",
        branch : "science"
    },
    {
        course : "SSC",
        institute : "JMHS",
        year : "2016",
        branch : "science",
        grade : "72.6%"
    }

]


const SubSection = ({title, points})=>{
    return (
        <div className="subSection">
            <h3 className="title">{title}</h3>
            <ul>
               {
                points.map(point => <li>{point}</li>)
               }
            </ul>
        </div>
    )
}


const EducationCard = ({details})=>{
    return (
        <div className="educationCard">
            <h3>{details.course}</h3>
            <p>{details.institute}</p>
            <p className="courseYear">{details.year}</p>
            <p>{details.branch}</p>
            {details.grade && <p>{details.grade}</p>}
        </div>
    )
}

export const Leftbar = () =>{
    return (
        <div className ="leftbar-container">
            <div className="education">
                <h1>Education</h1>
                {
                    educationData.map((item)=> <EducationCard details={item}/>)
                }
            </div>



            {/* <SubSection title="Databases" points={["MySQL"]}/>
            <SubSection title="Languages" points={["Java", "JavaScript"]}/>
            <SubSection title="Acheivents" points={["Attending classes","Highest package of the decade", "Firewall cracked and hacked"]}/> */}
            {/* Better not use inline use a seprate object to store data */}
            <SubSection title="Languages" points={skillsData.languages}/>
            <SubSection title="Databases" points={skillsData.databases}/>
            <SubSection title="Frameworks" points={skillsData.frameworks}/>
            <SubSection title="Acheivents" points={skillsData.acheivents}/>


        </div>
    )
}