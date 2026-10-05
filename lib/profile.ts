export const profile = {
  name: 'Nithish Gopi',
  initials: 'NG',
  roles: ['Software Engineer', 'Data Analytics Engineer'],
  location: 'Salem, India',
  objective:
    'Computer Science & Design graduate (2026) skilled in Java, full-stack web development, and data analysis. Combines design thinking with back-end logic and data processing to build reliable web applications and extract actionable insights.',
  contact: {
    email: 'nithishmsg@gmail.com',
    phone: '+91 7010530649',
    phoneHref: 'tel:+917010530649',
    linkedin: 'linkedin.com/in/nithish-msg',
    linkedinHref: 'https://www.linkedin.com/in/nithish-msg',
  },
  education: [
    {
      title: 'B.E., Computer Science and Design Engineering',
      school: 'Sona College of Technology, Salem',
      period: '2022 – 2026',
      score: 'CGPA: 6.06',
    },
    {
      title: 'Higher Secondary (XII)',
      school: 'Holy Cross Matriculation HSS, Salem',
      period: '2022',
      score: 'Percentage: 62%',
    },
    {
      title: 'Senior Secondary (X)',
      school: 'Holy Cross Matriculation HSS, Salem',
      period: '2020',
      score: 'Percentage: 78%',
    },
  ],
  projects: [
    {
      title: 'Through Their Eyes',
      subtitle: 'VR Simulation Platform',
      date: 'May 2025',
      stack: [
        'Unity',
        'C#',
        'HLSL / Shader Graph',
        'XR Interaction Toolkit',
        'Post-Processing',
        'Spatial Audio',
      ],
      points: [
        'Engineered an immersive VR experience in Unity simulating color vision deficiencies (Protanopia, Deuteranopia, Tritanopia) via custom HLSL shader programming and post-processing pipelines; leveraged the Unity XR Interaction Toolkit for realistic physics-based interactions.',
        "Implemented real-time shader toggling through C# scripting enabling seamless mode switching; integrated spatial audio feedback using Unity's Audio Mixer and 3D sound sources, improving accessibility and user immersion through structured, user-centric design.",
      ],
    },
    {
      title: 'Sona Learn',
      subtitle: 'Collaborative Academic Knowledge Platform',
      date: 'May 2024',
      stack: [
        'UI/UX Design',
        'Interactive Design',
        'Collaborative Systems',
        'Knowledge Management',
      ],
      points: [
        'Designed and built a Quora-inspired collaborative platform for a college community, enabling students to share questions and study materials through an interactive chat-based interface; focused on intuitive UI/UX to maximize engagement and knowledge exchange.',
        'Applied user-centric design principles to ensure accessible navigation across diverse user groups; contributed to a system architecture supporting scalable knowledge management and content organization.',
      ],
    },
  ],
  skills: [
    { group: 'Core Programming', items: ['Java', 'Python'] },
    {
      group: 'Data Analytics & BI',
      items: ['Power BI', 'Microsoft Excel', 'Data Visualization', 'Dashboard Design'],
    },
    { group: 'Database & Data Management', items: ['MySQL'] },
    { group: 'Development & Tools', items: ['Unity', 'Git'] },
    { group: 'Frontend & Enterprise', items: ['SAP Fiori', 'Frontend Development'] },
    {
      group: 'Soft Skills',
      items: [
        'Cross-functional Collaboration',
        'Analytical Thinking',
        'Communication',
        'Attention to Detail',
        'Problem-Solving',
      ],
    },
  ],
  interests: [
    'Competitive Programming',
    'Cloud Computing',
    'Database Management & Optimization',
    'Data Analytics & Visualization',
  ],
  activities: [
    'Participated in Volant Intercollege Olympiad, demonstrating competitive problem-solving and technical aptitude under pressure.',
    "Presented a research paper at Sparks '23, developing technical communication and analytical presentation skills.",
    'Served as Organizer for the technical event Pixel Perfect, coordinating cross-team logistics and event execution.',
  ],
  certifications: [
    { name: 'SAP Certified – SAP Fiori Application Developer', issuer: 'SAP' },
    { name: 'Career Essentials in Business Analysis', issuer: 'Microsoft & LinkedIn' },
    {
      name: 'Complete Guide to Power BI for Data Analysts',
      issuer: 'Microsoft Press · LinkedIn Learning',
    },
    { name: 'SQL: Data Reporting and Analysis', issuer: 'LinkedIn Learning' },
  ],
} as const
