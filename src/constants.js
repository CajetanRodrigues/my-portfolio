const Experiences = [
    {
        image: require('./assets/apple.png'),
        subtitle: 'Apple',
        title: 'Software Engineer Intern',
        location: 'San Diego, California',
        description: 'I will be working with CoreOS, Power & Performance team on Web frameworks targeting to minimizing the power consumption of Apple devices.'
    },
    {
        image: require('./assets/cimpress.png'),
        subtitle: 'Cimpress',
        title: 'Senior Software Engineer',
        location: 'Mumbai, India',
        description: 'Spearheaded the Sessions API infrastructure, backbone for several projects across Cimpress Tech by harnessing power of AWS Elasticache Redis for efficient caching of frequently fetched records, improved retrieval time by 10 fold. Led the Chronicles UI Library leveraging ReactJS as well as published library to npm registry and is now reused across several projects in Cimpress.'
    },
    {
        image: require('./assets/gsoc.png'),
        subtitle: 'Google Summer of Code',
        title: 'Software Engineer Intern',
        location: 'Mumbai, India',
        description: 'Directed open-source project, Mifos Initiative, facilitated financial service providers to efficiently deliver responsible financial services to world\'s 2 billion poor and unbanked. Enhanced performance of database by performing indexing allowed faster lookups, thus enhancing user experience of Mifos banking services by 20 percent. Enhanced performance of database by performing indexing allowed faster lookups, thus enhancing user experience of Mifos banking services by 20 percent.'
    },
    {
        image: require('./assets/tfi.png'),
        subtitle: 'Teach For India, NGO',
        role: 'Software Engineer Intern',
        location: 'Mumbai, India',
        description: 'Upgraded project by formulating reusable components for onboarding of individuals, from nation\'s best universities and workplaces, to serve as full-time teachers to children from underserved communities in some of nation\'s most 60 percent under-resourced schools.'
    },
    {
        image: require('./assets/csi.png'),
        subtitle: 'Computer Society of India',
        title: 'Tech Event Head',
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

const Education = [
  {
    image: require('./assets/sjsu.png'),
    title: 'San Jose State University',
    subtitle: 'San Jose, California',
    description: ' Data Structures & Algorithms, Database System Principles, Topics in Artificial Intelligence, Mobile Device Development, Advanced Parallel Processing.'
  },
  {
    image: require('./assets/crce.png'),
    title: 'Fr. Conceicao Rodrigues College of Engineering (Mumbai University)',
    subtitle: 'Mumbai, India',
    description: 'Operating System, Computer Networks, Big Data & Analytics, Data Warehousing & Mining, Cryptography & System Security, Distributed Computing, Natural Language Processing, Cloud Computing, Computer Organisation & Architecture.'
  },
]

const Projects = [
  {
    image: require('./assets/cvrp.png'),
    title: 'Capacitated Vehicle Routing Problem',
    subtitle: 'Masters Thesis Project',
    description: 'In this research project, I aim to develop and implement a powerful, synergistic approach that leverages the strengths of multiple meta-heuristic algorithms by chaining them together and aims to achieve close to optimal results for large-scale CVRP instances in a shorter period of time, which will be evaluated against the well-established CVRPLIB benchmark datasets.',
    link: 'http://dx.doi.org/10.13140/RG.2.2.14417.30565'
  },
  {
    image: require('./assets/dbsp.png'),
    title: 'Performance Comparison of Graph Database and Relational Database',
    subtitle: 'Masters Project',
    description: 'This study aims to evaluate the performance of Neo4j and MySQL in terms of data query execution time by examining representative queries from four categories: selection/search, recursion, aggregation, and pattern matching. Real-world data from Career Village was used for the experiment.',
    link: 'http://dx.doi.org/10.13140/RG.2.2.27380.32641'
  },
]

export { Experiences, CloudServices, Databases, Miscellaneous, ProgrammingLanguages, WebTechnologies, Education, Projects };