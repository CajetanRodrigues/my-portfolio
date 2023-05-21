const experiences = [
    {
        image: require('./assets/apple.png'),
        company: 'Apple',
        role: 'Software Engineer Intern',
        location: 'San Diego, California',
        description: 'I will be working with CoreOS, Power & Performance team on Web frameworks targeting to minimizing the power consumption of Apple devices.'
    },
    {
        image: require('./assets/cimpress.png'),
        company: 'Cimpress',
        role: 'Senior Software Engineer',
        location: 'Mumbai, India',
        description: 'Spearheaded the Sessions API infrastructure, backbone for several projects across Cimpress Tech by harnessing power of AWS Elasticache Redis for efficient caching of frequently fetched records, improved retrieval time by 10 fold. Led the Chronicles UI Library leveraging ReactJS as well as published library to npm registry and is now reused across several projects in Cimpress.'
    },
    {
        image: require('./assets/gsoc.png'),
        company: 'Google Summer of Code',
        role: 'Software Engineer Intern',
        location: 'Mumbai, India',
        description: 'Directed open-source project, Mifos Initiative, facilitated financial service providers to efficiently deliver responsible financial services to world\'s 2 billion poor and unbanked. Enhanced performance of database by performing indexing allowed faster lookups, thus enhancing user experience of Mifos banking services by 20 percent. Enhanced performance of database by performing indexing allowed faster lookups, thus enhancing user experience of Mifos banking services by 20 percent.'
    },
    {
        image: require('./assets/tfi.png'),
        company: 'Teach For India, NGO',
        role: 'Software Engineer Intern',
        location: 'Mumbai, India',
        description: 'Upgraded project by formulating reusable components for onboarding of individuals, from nation\'s best universities and workplaces, to serve as full-time teachers to children from underserved communities in some of nation\'s most 60 percent under-resourced schools.'
    },
    {
        image: require('./assets/csi.png'),
        company: 'Computer Society of India',
        role: 'Tech Event Head',
        location: 'Mumbai, India',
        description: 'I organized and managed multiple technical events covering backend, frontend, databases, and cloud. The events were a success, with hundreds of students and guests participating.'
    }
]
const ProgrammingLanguages = ['Python', 'Javascript', 'Java'];
const WebTechnologies = [
  'React.js',
  'Redux',
  'ExpressJS',
  'Node.js',
  'HTML5',
  'CSS3',
];
const Databases = ['MySQL', 'PL/SQL', 'MongoDB', 'Neo4j'];
const CloudServices = [
  'Amazon Web Services (EC2)',
  'RDS',
  'S3',
  'Lambda',
  'Cloudwatch',
];
const Miscellaneous = [
  'Agile Methods',
  'Git',
  'JIRA',
  'Project Management',
  'Android Studio',
];

export { experiences, CloudServices, Databases, Miscellaneous, ProgrammingLanguages, WebTechnologies };