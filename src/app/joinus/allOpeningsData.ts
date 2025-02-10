
export interface Description {
    [key: string]: string;
}


export interface SkillCategory {
    essentialSkills?: Description[]
    beneficialSkills?: Description[]
  }

export interface Opening {
    id: number,
    title: string,
    responsibilities: Description[],
    desiredOutcomes: Description[],
    skills: SkillCategory[]
}

const AllOpenings: Opening[] = [
    {
        id: 1,
        title: "UI/UX Designer",
        responsibilities: [
            { "User Journey Mapping" : "Create initial drafts of workshop participant journeys for the web app. Analyze and implement feedback, iterating on the journey drafts." },
            { "Wireframing & Prototyping" : "Create wireframes and prototypes for the web application, focusing on participant flow and usability." },
            { "Collaboration" : "Collaborate closely with the Illustrator, Content Designer/Writer, and Web Developer to ensure a cohesive user experience." },
            { "Usability Testing (Optional but Recommended)" : "If time allows, conduct usability testing to validate design decisions and identify areas for improvement."}
        ],
        desiredOutcomes: [
            { "Documented User Research (Optional)" : "A summary of any participant research conducted, including participant personas, interview notes, or survey results." },
            { "User Journey Maps" : "Finalized and documented participant journey maps for the workshop participants." },
            { "Wireframes & Prototypes" : "A set of wireframes and interactive prototypes demonstrating the participant flow and design of the web application." }
        ],
        skills: [
            {
                essentialSkills: [
                    { "User Journey Mapping" : "Skill in visualizing and documenting user flows and experiences." },
                    { "Interaction Design" : "Understanding of how users interact with digital interfaces and the ability to design intuitive and user-friendly interactions." }
                ]
            },  
            {
                beneficialSkills: [
                    { "Wireframing & Prototyping (Optional)" : "Proficiency in creating low-fidelity and high-fidelity wireframes and interactive prototypes using tools like Figma, Sketch, Adobe XD, or similar." },
                    { "Accessibility" : "Knowledge of accessibility guidelines (WCAG) and how to design accessible interfaces."},
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Illustrator",
        responsibilities: [
            { "Visual Development" : "Create illustrations inspired by the established design language." },
	        { "Web Asset Creation" : "Create illustrations based on available video and photo documentation resources." },
	        { "Collaboration & Animation Support" : "Collaborate with the UX Designer and Content Designer/Writer to integrate illustrations into the web app. Work with the Web Developer to conceptualize and provide assets for animations." },
	        { "Style Guide Contribution (Optional)" : "Contribute to the development and maintenance of the visual style guide." }
        ],
        desiredOutcomes: [
            { "Illustration Portfolio" : "A collection of all illustrations created for the web application."},
	        {  "Style Guide Contributions (Optional)": "Documentation of the visual style guide, including color palettes, typography, and illustration guidelines."}
        ],
        skills: [
            {
                essentialSkills: [
                    { "Illustration Skills" : "Drawing and illustration skills." },
                    { "Style Development" : "Ability to adapt and create illustrations in different styles, and to maintain a consistent visual style." }
                ]
            },  
            {
                beneficialSkills: [
                    { "Animation Principles" : "Basic understanding of animation principles can be helpful for creating assets for animated illustrations." }
                ]
            }
            
        ]
    },
    {
        id: 3,
        title: "Content Designer/Writer",
        responsibilities: [
            { "Information Architecture" : "Create the website sitemap for the Dramas of Discrimination Web Application." },
	        { "Content Strategy" : "Define content requirements for the web application. (Optional: including messaging, tone, and target audience.)" },
	        { "Content Creation & Curation" : "Write, edit, proofread, and manage website and facilitation manual content." },
	        { "Collaboration" : "Collaborate closely with the UX Designer, Illustrator, and Web Developer to ensure content is integrated into the design and functionality of the web application." }
        ],
        desiredOutcomes: [
            { "Website Sitemap" : "The final website sitemap, outlining the information architecture of the web application." },
            { "Content Repository" : "All written content for the web application and facilitation manual." }
        ],
        skills: [
            {
                essentialSkills: [
                    { "Content Strategy" : "Ability to develop content strategies that align with community goals and participant needs." },
                    { "Information Architecture" : "Understanding of information architecture principles and the ability to organize and structure content." }
                ],
                beneficialSkills: [
                    { "SEO" : "Basic understanding of search engine optimization (SEO) principles." }
                ]
            }
        ]
    }
]

export default AllOpenings