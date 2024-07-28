import Experiences from "./experience"

const experiences = [
    {
      jobTitle: "Sr. Frontend Developer", 
      companyLogo: "", 
      jobRoles: ["", '']
    },
    {
      jobTitle: "Team Lead", 
      companyLogo: "", 
      jobRoles: ["", '']
    },
    {
        jobTitle: "FullStack Developer", 
        companyLogo: "", 
        jobRoles: ["", '']
      },
  ]

  export default function AllExperiences () {
    return (
        <>
            {experiences.map((experience)=>(
                <Experiences title = {experience.jobTitle} companyLogo={experience.companyLogo} jobRoles={experience.jobRoles}/>
            ))}
        </>
    )
  };
