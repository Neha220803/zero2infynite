import cisaStuCerti from "../assets/images/indi_course/cisa.png";

export const isacaCourses = {
  CISA: {
    // Basic Course Information
    title: "Certified Information Systems Auditor Course in Chennai",
    badge: "Very Famous",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    description: {
      intro:
        "Are you looking for an affordable Certified Information Systems Auditor(CISA) course with ISACA certification to improve your  Cyber Auditing skills..?",
      brochureLink: {
        text: "Click here to download the CISA brochure and syllabus  ",
        url: "https://drive.google.com/file/d/1XrmWRk7hLaWaKvorNmpChxPRMZ33XHfL/view?usp=sharing",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We evaluate each student's unique needs and provide personalized guidance. Unlike typical institutes that stop at training, we offer continuous support until you reach your goals.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph's College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
        "We have successfully placed the majority of our students in the cybersecurity field. Additionally, we've helped experienced professionals transition into cybersecurity by carefully assessing and building on their existing skills. We've also supported working cybersecurity professionals in earning international certifications to boost their skills, salaries, and career positions.",
      ],
    },

    // Contact Information
    contact: {
      phone: "+91 81110 00953",
      phoneFormatted: "+ 91 81110 00953",
    },

    // Course Features
    features: [
      {
        icon: "GiTeacher",
        text: "Real time industry oriented training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated syllabus",
        color: "text-success",
      },
      {
        icon: "Calendar2Check",
        text: "Flexible Learning Modes",
        color: "#955EAE",
      },
      {
        icon: "Award",
        text: "100% Success Rate",
        color: "text-warning",
      },
      {
        icon: "BriefcaseFill",
        text: "Career Assistance & Job Referrals",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Practical Training",
        color: "text-secondary",
      },
      {
        icon: "SiGoogleclassroom",
        text: "Free Demo sessions",
        color: "text-danger",
      },
      {
        icon: "CurrencyDollar",
        text: "Training that fits your budget",
        color: "text-success",
      },
      {
        icon: "PiCertificate",
        text: "International Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Information Systems Auditor (CISA) course in Zero2infynite is best among others.",
    additionalInfoSubHeading:
      "Learn (CISA) Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Certified Information Systems Auditor (CISA) from Zero2infynite offers ISSACA International certification to upskill your Cyber knowledge. This CISA course will help you to get high salary and promotions in cyber security domain. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Ethical Hacking Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Cyber Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      // Initial batch templates (dates will be calculated dynamically)
      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0, // Start from today
        },
        {
          type: "Weekdays",
          days: "Monday (Monday - Friday)",
          id: 2,
          dayOffset: 2, // 2 days from today
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4, // 4 days from today
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6, // 6 days from today
        },
      ],

      // Table configuration
      tableHeaders: ["Date", "Mode", "Days", "Actions"],

      // Action buttons
      actionButtons: {
        courseFees: {
          text: "Course Fees",
          variant: "outline-primary",
          className: "course-fees-btn",
        },
        checkAvailability: {
          text: "Check Availability",
          variant: "primary",
          className: "check-availability-btn",
        },
      },

      // Bottom action buttons
      bottomActions: {
        customBatch: {
          text: "Can't find a batch you were looking for?",
          variant: "outline-primary",
          className: "batch-action-btn",
        },
        requestBatch: {
          text: "Request Custom Batch",
          variant: "primary",
          className: "batch-action-btn",
        },
      },

      // Update interval (in milliseconds)
      updateInterval: 2 * 24 * 60 * 60 * 1000, // Update every 2 days
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, CISA, CISM, OSCP+ ",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoots issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      rightSideImage: cisaStuCerti,
      sections: [
        {
          title: "ISSACA CISA certification and Exams",
          content: [
            "We are the only institute offering low-cost ISSACA CISA certification with placement assistance, career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
          ],
          image: {
            src: cisaStuCerti, // Will be imported in component
            alt: "Certification Image",
            className: "certification-image",
          },
        },
      ],
    },

    // FAQ Information
    faq: {
      title: "Frequently Asked Questions",
      defaultActiveKey: "1",
      questions: [
        {
          eventKey: "0",
          question: "What is the course about?",
          answer:
            "The Certified Information Systems Auditor (CISA) course provides comprehensive training in auditing, controlling, monitoring, and assessing an organization’s information technology and business systems. It prepares you for the ISACA CISA certification exam and equips you with the skills to evaluate IT security, governance, and risk management.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The course duration is typically 6-8 weeks, depending on the training mode you choose. Both weekday and weekend batches are available, with flexible schedules to accommodate working professionals.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "There are no strict prerequisites to enroll in the training. However, ISACA requires a minimum of five years of professional experience in information systems auditing, control, assurance, or security to obtain the certification. Up to three years of experience waivers are available based on education and other certifications.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, after completing the course you will receive a certificate of completion from Zero2infynite. To earn the globally recognized ISACA CISA certification, you must pass the official exam and meet ISACA’s work experience requirements.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You’ll have access to expert trainers, detailed exam-focused study material, practice questions, and career guidance. Our team provides mentorship, interview preparation, and continuous support until you achieve certification.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, all training resources including study guides, practice exam questions, and reference materials are provided in downloadable format for your preparation.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "We offer flexible payment and refund options. You may pay only for the training initially and later opt to pay for the official ISACA exam. Please contact us for detailed terms of our refund and payment policy.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Domain 1: Information System Auditing Process",
        duration: "—",
        topics: [
          // "Planning",
          "IS Audit Standards, Guidelines, and Codes of Ethics",
          "Business Processes",
          "Types of Controls",
          "Risk-Based Audit Planning",
          "Types of Audits and Assessments",
          // "Execution:",
          "Audit Project Management",
          "Sampling Methodology",
          "Audit Evidence Collection Techniques",
          "Data Analytics",
          "Reporting and Communication Techniques",
        ],
      },
      {
        title: "Domain 2: Governance and Management of IT (17%)",
        duration: "—",
        topics: [
          // "IT Governance",
          "IT Governance and IT Strategy",
          "IT-Related Frameworks",
          "IT Standards, Policies, and Procedures",
          "Organizational Structure",
          "Enterprise Architecture",
          "Enterprise Risk Management",
          "Maturity Models",
          "Laws, Regulations, and Industry Standards affecting the Organization",
          // "IT Management",
          "IT Resource Management",
          "IT Service Provider Acquisition and Management",
          "IT Performance Monitoring and Reporting",
          "Quality Assurance and Quality Management of IT",
        ],
      },
      {
        title:
          "Domain 3: Information Systems Acquisition, Development and Implementation (12%)",
        duration: "—",
        topics: [
          "Information Systems Acquisition and Development",
          "Project Governance and Management",
          "Business Case and Feasibility Analysis",
          "System Development Methodologies",
          "Control Identification and Design",
          "Information Systems Implementation",
          "Testing Methodologies",
          "Configuration and Release Management",
          "System Migration, Infrastructure Deployment, and Data Conversion",
          "Post-implementation Review",
        ],
      },
      {
        title:
          "Domain 4: Information Systems Operations and Business Resilience (23%)",
        duration: "—",
        topics: [
          "Information Systems Operations",
          "Common Technology Components",
          "IT Asset Management",
          "Job Scheduling and Production Process Automation",
          "System Interfaces",
          "End-User Computing",
          "Data Governance",
          "Systems Performance Management",
          "Problem and Incident Management",
          "Change, Configuration, Release, and Patch Management",
          "IT Service Level Management",
          "Database Management",
          "Business Resilience",
          "Business Impact Analysis (BIA)",
          "System Resiliency",
          "Data Backup, Storage, and Restoration",
          "Business Continuity Plan (BCP)",
          "Disaster Recovery Plans (DRP)",
        ],
      },
      {
        title: "Domain 5: Protection of Information Assets (27%)",
        duration: "—",
        topics: [
          "Information Asset Security and Control",
          "Information Asset Security Frameworks, Standards, and Guidelines",
          "Privacy Principles",
          "Physical Access and Environmental Controls",
          "Identity and Access Management",
          "Network and End-Point Security",
          "Data Classification",
          "Data Encryption and Encryption-Related Techniques",
          "Public Key Infrastructure (PKI)",
          "Web-Based Communication Techniques",
          "Virtualized Environments",
          "Mobile, Wireless, and Internet-of-Things (IoT) Devices",
          "Security Event Management",
          "Security Awareness Training and Programs",
          "Information System Attack Methods and Techniques",
          "Security Testing Tools and Techniques",
          "Security Monitoring Tools and Techniques",
          "Incident Response Management",
          "Evidence Collection and Forensics",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Ethical Hacking course",
      "secure a job, boost your salary, or advance your career in the cybersecurity domain",
      "help you achieve your goals",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world industry experience and also assist with job referrals",
      "placed the majority of our students in the cybersecurity field",
      "helped experienced professionals transition into cybersecurity",
    ],
  },
  CISM: {},
  CRISC: {},
};
