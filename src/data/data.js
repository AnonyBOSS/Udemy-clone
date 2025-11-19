
export const categories = [
  { id: 1, title: "Development" },
  { id: 2, title: "Business" },
  { id: 3, title: "IT & Software" },
  { id: 4, title: "Design" },
  { id: 5, title: "Marketing" },
  { id: 6, title: "Photography" },
  { id: 7, title: "Personal Development" },
  { id: 8, title: "Data Science" },
]

export const courses = [
  {
    id: 1,
    title: "React - The Complete Guide",
    author: "Jane Doe",
    rating: 4.7,
    students: "124,345",
    price: 12.99,
    priceLabel: "$12.99",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    description: "Master React from scratch — hooks, context, routing.",
    categoryId: 1,
    length: "23h 12m",
    badge: "bestseller",
    createdAt: "2024-02-10"
  },
  {
    id: 2,
    title: "Complete JavaScript Course",
    author: "John Smith",
    rating: 4.6,
    students: "98,001",
    price: 9.99,
    priceLabel: "$9.99",
    image: "https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg",
    description: "Modern JavaScript: ES6+, async, testing and patterns.",
    categoryId: 1,
    length: "18h 40m",
    createdAt: "2023-12-02"
  },
  {
    id: 3,
    title: "Python for Everybody",
    author: "Ali Hassan",
    rating: 4.8,
    students: "203,401",
    price: 11.99,
    priceLabel: "$11.99",
    image: "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    description: "From fundamentals to building real projects.",
    categoryId: 8,
    length: "14h 30m",
    badge: "new",
    createdAt: "2025-01-15"
  },
  {
    id: 4,
    title: "UI/UX Design Essentials",
    author: "Sara Lee",
    rating: 4.5,
    students: "54,210",
    price: 14.99,
    priceLabel: "$14.99",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=1200&q=60",
    description: "Practical UX workflows and prototyping.",
    categoryId: 4,
    length: "9h 10m",
    createdAt: "2022-10-01"
  },
  {
    id: 5,
    title: "AWS Certified Solutions Architect",
    author: "Cloud Academy",
    rating: 4.4,
    students: "31,902",
    price: 16.99,
    priceLabel: "$16.99",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60",
    description: "Prepare for AWS certification and real-world cloud designs.",
    categoryId: 3,
    length: "20h 5m",
    createdAt: "2023-05-21"
  },
  {
    id: 6,
    title: "Complete Digital Marketing",
    author: "Marketing Guru",
    rating: 4.3,
    students: "67,540",
    price: 10.99,
    priceLabel: "$10.99",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=60",
    description: "SEO, Social Media, Analytics and Ad strategies.",
    categoryId: 5,
    length: "12h 0m",
    createdAt: "2021-09-03"
  },
  {
    id: 7,
    title: "Data Science with Python",
    author: "Dr. Nina Patel",
    rating: 4.8,
    students: "89,102",
    price: 17.99,
    priceLabel: "$17.99",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=60",
    description: "Pandas, NumPy, visualization and ML basics.",
    categoryId: 8,
    length: "27h 45m",
    badge: "bestseller",
    createdAt: "2024-07-17"
  },
  {
    id: 8,
    title: "Node.js — API Development",
    author: "Ethan Ray",
    rating: 4.5,
    students: "45,600",
    price: 13.99,
    priceLabel: "$13.99",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60",
    description: "Build production-ready REST and GraphQL APIs.",
    categoryId: 1,
    length: "11h 20m",
    createdAt: "2023-11-12"
  },
  {
    id: 9,
    title: "Photoshop Masterclass",
    author: "Lina Gomez",
    rating: 4.4,
    students: "33,200",
    price: 8.99,
    priceLabel: "$8.99",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=60",
    description: "Photo editing, retouching and compositing.",
    categoryId: 6,
    length: "8h 15m",
    createdAt: "2022-06-14"
  },
  {
    id: 10,
    title: "Excel to Power BI",
    author: "M. Thompson",
    rating: 4.6,
    students: "57,120",
    price: 15.99,
    priceLabel: "$15.99",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=60",
    description: "From spreadsheets to interactive dashboards.",
    categoryId: 2,
    length: "10h 30m",
    createdAt: "2024-08-05"
  },
  {
    id: 11,
    title: "Public Speaking Essentials",
    author: "K. Ahmed",
    rating: 4.7,
    students: "21,340",
    price: 7.99,
    priceLabel: "$7.99",
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    description: "Confidence, storytelling and stage presence.",
    categoryId: 7,
    length: "5h 0m",
    createdAt: "2025-02-02"
  },
  {
    id: 12,
    title: "Docker Deep Dive",
    author: "OpsTeam",
    rating: 4.3,
    students: "19,999",
    price: 12.49,
    priceLabel: "$12.49",
    image: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=1200&q=60",
    description: "Image creation, volumes, networking.",
    categoryId: 3,
    length: "9h 50m",
    createdAt: "2023-09-01"
  },
  {
    id: 13,
    title: "Kubernetes for Beginners",
    author: "OpsTeam",
    rating: 4.2,
    students: "15,402",
    price: 18.99,
    priceLabel: "$18.99",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=1200&q=60",
    description: "Containers, deployments, and cluster management.",
    categoryId: 3,
    length: "13h 40m",
    createdAt: "2023-03-30"
  },
  {
    id: 14,
    title: "Intro to SQL",
    author: "DataWorks",
    rating: 4.5,
    students: "40,120",
    price: 9.49,
    priceLabel: "$9.49",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?w=1200&q=60",
    description: "Learn SQL queries, joins, aggregations.",
    categoryId: 8,
    length: "6h 25m",
    createdAt: "2024-10-10"
  },
  {
    id: 15,
    title: "Bootstrap & Tailwind",
    author: "DesignLab",
    rating: 4.4,
    students: "28,400",
    price: 6.99,
    priceLabel: "$6.99",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=60",
    description: "Build responsive UIs quickly.",
    categoryId: 4,
    length: "7h 10m",
    createdAt: "2022-12-09"
  },
]

export const companies = [
  { id: 1, name: "Google", logo: "https://logo.clearbit.com/google.com" },
  { id: 2, name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
  { id: 3, name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
  { id: 4, name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
  { id: 5, name: "Nike", logo: "https://logo.clearbit.com/nike.com" },
  { id: 6, name: "Spotify", logo: "https://logo.clearbit.com/spotify.com" },
  { id: 7, name: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com" },
  { id: 8, name: "Slack", logo: "https://logo.clearbit.com/slack.com" },
  { id: 9, name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
  { id: 10, name: "Intel", logo: "https://logo.clearbit.com/intel.com" },
  { id: 11, name: "Tesla", logo: "https://logo.clearbit.com/tesla.com" },
  { id: 12, name: "Meta", logo: "https://logo.clearbit.com/meta.com" },
  { id: 13, name: "Shopify", logo: "https://logo.clearbit.com/shopify.com" },
  { id: 14, name: "Zoom", logo: "https://logo.clearbit.com/zoom.us" },
  { id: 15, name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
  { id: 16, name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com" },
  { id: 17, name: "HubSpot", logo: "https://logo.clearbit.com/hubspot.com" },
  { id: 18, name: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com" },
  { id: 19, name: "PayPal", logo: "https://logo.clearbit.com/paypal.com" },
  { id: 20, name: "Adobe", logo: "https://logo.clearbit.com/adobe.com" }
]

export const instructors = [
  { id: 1, name: "Jane Doe", title: "Senior Frontend Engineer", bio: "Teaches modern React patterns.", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=60" },
  { id: 2, name: "John Smith", title: "JavaScript Specialist", bio: "10+ years JS experience.", avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=60&w=400" },
  { id: 3, name: "Ali Hassan", title: "Python Instructor", bio: "Data & backend developer.", avatar: "https://images.unsplash.com/photo-1517705008121-4c62628f8f0b?w=400&q=60" },
  { id: 4, name: "Nina Patel", title: "Data Scientist", bio: "ML & visualization specialist.", avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=60&w=400" },
  { id: 5, name: "Lina Gomez", title: "Creative Director", bio: "Design and photo pro.", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=60&w=400" },
  { id: 6, name: "Ethan Ray", title: "Backend Engineer", bio: "Node.js & API author.", avatar: "https://images.unsplash.com/photo-1545996124-40f0c54b7c53?q=60&w=400" }
]

export const caseStudies = [
  {
    id: 1,
    company: 'Booz | Allen | Hamilton',
    title: 'Booz Allen Hamilton Unlocks Talent Retention and Productivity Through Upskilling',
    statA: { value: '93%', label: 'retention rate among participating employees' },
    statB: { value: '65%', label: 'of learners noted a positive impact on their productivity' },
    image: 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1200&q=60',
    link: '#'
  },
  {
    id: 2,
    company: 'Acme Corp',
    title: 'Acme raises internal mobility with role-based learning',
    statA: { value: '88%', label: 'internal promotion rate uplift' },
    statB: { value: '72%', label: 'employees say their skills improved' },
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=60',
    link: '#'
  }
]

export const popularSkills = {
  hero: {
    title: 'ChatGPT is a top skill',
    blurb: '5,217,783 learners',
    ctaLabel: 'See ChatGPT courses',
    ctaLink: '#'
  },
  columns: [
    { heading: 'Development', items: [{title:'Python', count:'49,661,562'}, {title:'Web Development', count:'14,358,666'}, {title:'Data Science', count:'8,210,485'}]},
    { heading: 'Design', items: [{title:'Blender', count:'3,067,566'}, {title:'Graphic Design', count:'4,646,014'}, {title:'UX', count:'2,131,487'}]},
    { heading: 'Business', items: [{title:'PMP', count:'2,787,309'}, {title:'Power BI', count:'5,028,374'}, {title:'CAPM', count:'468,141'}]}
  ]
}

export const reportCard = {
  title: 'Get the 2026 Global Learning & Skills Trends Report',
  body: 'If you or your organization are looking for help navigating change and AI transformation, you’ll find a roadmap for action in our popular annual report.',
  image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=60',
  cta: { label: 'Download now', link: '#' }
}

export const plans = [
  {
    id: 'team',
    title: 'Team Plan',
    blurb: '2 to 50 people - For your team',
    price: '£1,490.00 a month per user',
    cta: 'Try it free',
    features: ['Access to 13,000+ top courses','Certification prep','Goal-focused recommendations','AI-powered coaching','Analytics and adoption reports']
  },
  {
    id: 'enterprise',
    title: 'Enterprise Plan',
    blurb: 'More than 20 people - For your whole organization',
    price: 'Contact sales for pricing',
    cta: 'Request a demo',
    features: ['Access to 30,000+ top courses','Advanced analytics and insights','Dedicated customer success team','Customizable content']
  },
  {
    id: 'ai',
    title: 'AI Fluency',
    blurb: 'From AI foundations to Enterprise transformation',
    price: 'Contact Us',
    cta: 'Contact Us',
    features: ['AI Readiness Collection','AI Growth Collection','Role-specific learning paths']
  }
]

export const trendingCourses = [
  {
    id: 't1',
    title: '100 Days of Code™: The Complete Python Pro Bootcamp',
    author: 'Dr. Angela Yu',
    rating: 4.7,
    students: '400,364',
    priceLabel: '£519.99',
    image: "https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg",
    badge: 'bestseller'
  },
  {
    id: 't2',
    title: 'AI Engineer Agentic Track: The Complete Agent & MCP Course',
    author: 'Ed Donner, Ligency',
    rating: 4.7,
    students: '21,227',
    priceLabel: '£309.99',
    image: "https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg",
    badge: 'bestseller'
  },
  {
    id: 't3',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    author: 'Dr. Angela Yu',
    rating: 4.7,
    students: '457,526',
    priceLabel: '£299.99',
    image: "https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg",
    badge: 'bestseller'
  },
  {
    id: 't4',
    title: 'Ultimate AWS Certified Solutions Architect Associate 2025',
    author: 'Stephane Maarek',
    rating: 4.7,
    students: '274,146',
    priceLabel: '£639.99',
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=60",
    badge: 'bestseller'
  }
]

export const careerAccelerators = [
  { id: 'ca1', title: 'Full Stack Web Developer', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=60', meta: { ratings: '463K ratings', hours: '87.8 total hours' } },
  { id: 'ca2', title: 'Digital Marketer', image: 'https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg', meta: { ratings: '3.7K ratings', hours: '28.4 total hours' } },
  { id: 'ca3', title: 'Data Scientist', image: 'https://img-c.udemycdn.com/course/480x270/2776760_f176_10.jpg', meta: { ratings: '223K ratings', hours: '47.1 total hours' } }
]

export const certPromo = {
  title: 'Get certified and get ahead in your career',
  body: 'Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.',
  cards: [
    { id: 'c1', title: 'CompTIA', image: 'https://img-c.udemycdn.com/course/480x270/625204_436a_3.jpg', desc: 'Cloud, Networking, Cybersecurity' },
    { id: 'c2', title: 'AWS', image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=60', desc: 'Cloud, AI, Coding, Networking' },
    { id: 'c3', title: 'PMI', image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=60', desc: 'Project & Program Management' }
  ]
}

export const testimonials = [
  { id: 1, quote: 'Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.', source: 'StackOverflow', detail: '37,076 responses collected', linkLabel: 'View Web Development courses' },
  { id: 2, quote: 'Udemy was truly a game-changer and a great guide for me as we brought Dimensional to life.', author: 'Alvin Lim', title: 'Technical Co-Founder, CTO at Dimensional', linkLabel: 'View this iOS & Swift course' },
  { id: 3, quote: 'Udemy gives you the ability to be persistent. I learned exactly what I needed to know in the real world.', author: 'William A. Wachlin', title: 'Partner Account Manager at Amazon Web Services', linkLabel: 'View AWS course' },
  { id: 4, quote: 'With Udemy Business employees were able to marry the two together, technology and consultant soft skills... to help drive their careers forward.', author: 'Ian Stevens', title: 'Head of Capability Development', linkLabel: 'Read full story' }
]
