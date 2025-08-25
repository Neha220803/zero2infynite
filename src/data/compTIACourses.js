import securityPluStuCerti from "../assets/images/indi_course/security-plus.png";

export const compTIACourses = {
  Security: {
    // Basic Course Information
    title: "CompTIA Security+ Course in Chennai",
    badge: "Very Famous",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable CompTIA Security+ with CompTIA certification to improve your  Cyber Auditing skills..?",
      brochureLink: {
        text: "Click here to download the CompTIA Security+ brochure and syllabus",
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
      "Why CompTIA Security+ course in Zero2infynite is best among others.",
    additionalInfoSubHeading:
      "Learn CompTIA Security+ Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "CompTIA Security+ from Zero2infynite offers CompTIA International certification to upskill your Cyber knowledge. This CompTIA Security+ course will help you to get high salary and promotions in cyber security domain. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

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
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
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
      rightSideImage: securityPluStuCerti,
      sections: [
        {
          title: "CompTIA Security+ certification and Exams",
          content: [
            "We are the only institute offering low-cost CompTIA Security+ certification with placement assistance, career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
          ],
          image: {
            src: securityPluStuCerti, // Will be imported in component
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
            "The CompTIA Security+ course provides foundational knowledge in cybersecurity, covering essential principles for securing networks, managing risks, handling threats, and ensuring compliance. It prepares you for the globally recognized CompTIA Security+ certification exam, which validates your ability to perform core security functions.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The course typically spans 6-8 weeks, depending on your chosen schedule. Both weekday and weekend batches are available, with flexible timings to suit students and working professionals.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "There are no mandatory prerequisites. However, CompTIA recommends having the CompTIA Network+ certification and at least two years of experience in IT with a security focus. A strong interest in cybersecurity and networking concepts will be beneficial.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon completing the training you will receive a course completion certificate from Zero2infynite. To earn the official CompTIA Security+ certification, you must pass the SY0-701 (or latest version) exam conducted by CompTIA.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You’ll receive trainer-led sessions, study materials, mock tests, and lab exercises for hands-on practice. Additionally, our team provides mentorship, interview preparation, and ongoing guidance until you clear the certification exam.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, all course resources such as study guides, lab manuals, and practice exam questions are available in downloadable format for your convenience.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "We offer flexible payment and refund policies. You can opt to pay for training only and later choose to pay separately for the official CompTIA exam. Please reach out to us for detailed terms and conditions.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Lesson 1: Comparing Security Roles and Controls",
        duration: "2 Hours",
        topics: [
          "Topic 1A: Compare and Contrast Information Security Roles",
          "Topic 1B: Compare and Contrast Security Control and Framework Types",
        ],
      },
      {
        title: "Lesson 2: Explaining Threat Actors and Threat Intelligence",
        duration: "2 Hours",
        topics: [
          "Topic 2A: Explain Threat Actor Types and Attack Vectors",
          "Topic 2B: Explain Threat Intelligence Sources",
        ],
      },
      {
        title: "Lesson 3: Performing Security Assessments",
        duration: "2 Hours",
        topics: [
          "Topic 3A: Assess Organizational Security with Network Reconnaissance Tools",
          "Topic 3B: Explain Security Concerns with General Vulnerability Types",
          "Topic 3C: Summarize Vulnerability Scanning Techniques",
          "Topic 3D: Explain Penetration Testing Concepts",
        ],
      },
      {
        title: "Lesson 4: Identifying Social Engineering and Malware",
        duration: "2 Hours",
        topics: [
          "Topic 4A: Compare and Contrast Social Engineering Techniques",
          "Topic 4B: Analyze Indicators of Malware-Based Attacks",
        ],
      },
      {
        title: "Lesson 5: Summarizing Basic Cryptographic Concepts",
        duration: "2 Hours",
        topics: [
          "Topic 5A: Compare and Contrast Cryptographic Ciphers",
          "Topic 5B: Summarize Cryptographic Modes of Operation",
          "Topic 5C: Summarize Cryptographic Use Cases and Weaknesses",
          "Topic 5D: Summarize Other Cryptographic Technologies",
        ],
      },
      {
        title: "Lesson 6: Implementing Public Key Infrastructure",
        duration: "2 Hours",
        topics: [
          "Topic 6A: Implement Certificates and Certificate Authorities",
          "Topic 6B: Implement PKI Management",
        ],
      },
      {
        title: "Lesson 7: Implementing Authentication Controls",
        duration: "2 Hours",
        topics: [
          "Topic 7A: Summarize Authentication Design Concepts",
          "Topic 7B: Implement Knowledge-Based Authentication",
          "Topic 7C: Implement Authentication Technologies",
          "Topic 7D: Summarize Biometrics Authentication Concepts",
        ],
      },
      {
        title:
          "Lesson 8: Implementing Identity and Account Management Controls",
        duration: "2 Hours",
        topics: [
          "Topic 8A: Implement Identity and Account Types",
          "Topic 8B: Implement Account Policies",
          "Topic 8C: Implement Authorization Solutions",
          "Topic 8D: Explain the Importance of Personnel Policies",
        ],
      },
      {
        title: "Lesson 9: Implementing Secure Network Designs",
        duration: "2 Hours",
        topics: [
          "Topic 9A: Implement Secure Network Designs",
          "Topic 9B: Implement Secure Switching and Routing",
          "Topic 9C: Implement Secure Wireless Infrastructure",
          "Topic 9D: Implement Load Balancers",
        ],
      },
      {
        title: "Lesson 10: Implementing Network Security Appliances",
        duration: "2 Hours",
        topics: [
          "Topic 10A: Implement Firewalls and Proxy Servers",
          "Topic 10B: Implement Network Security Monitoring",
          "Topic 10C: Summarize the Use of SIEM",
        ],
      },
      {
        title: "Lesson 11: Implementing Secure Network Protocols",
        duration: "2 Hours",
        topics: [
          "Topic 11A: Implement Secure Network Operations Protocols",
          "Topic 11B: Implement Secure Application Protocols",
          "Topic 11C: Implement Secure Remote Access Protocols",
        ],
      },
      {
        title: "Lesson 12: Implementing Host Security Solutions",
        duration: "2 Hours",
        topics: [
          "Topic 12A: Implement Secure Firmware",
          "Topic 12B: Implement Endpoint Security",
          "Topic 12C: Explain Embedded System Security Implications",
        ],
      },
      {
        title: "Lesson 13: Implementing Secure Mobile Solutions",
        duration: "2 Hours",
        topics: [
          "Topic 13A: Implement Mobile Device Management",
          "Topic 13B: Implement Secure Mobile Device Connections",
        ],
      },
      {
        title: "Lesson 14: Summarizing Secure Application Concepts",
        duration: "2 Hours",
        topics: [
          "Topic 14A: Analyze Indicators of Application Attacks",
          "Topic 14B: Analyze Indicators of Web Application Attacks",
          "Topic 14C: Summarize Secure Coding Practices",
          "Topic 14D: Implement Secure Script Environments",
          "Topic 14E: Summarize Deployment and Automation Concepts",
        ],
      },
      {
        title: "Lesson 15: Implementing Secure Cloud Solutions",
        duration: "2 Hours",
        topics: [
          "Topic 15A: Summarize Secure Cloud and Virtualization Services",
          "Topic 15B: Apply Cloud Security Solutions",
          "Topic 15C: Summarize Infrastructure as Code Concepts",
        ],
      },
      {
        title: "Lesson 16: Explaining Data Privacy and Protection Concepts",
        duration: "2 Hours",
        topics: [
          "Topic 16A: Explain Privacy and Data Sensitivity Concepts",
          "Topic 16B: Explain Privacy and Data Protection Controls",
        ],
      },
      {
        title: "Lesson 17: Performing Incident Response",
        duration: "2 Hours",
        topics: [
          "Topic 17A: Summarize Incident Response Procedures",
          "Topic 17B: Utilize Appropriate Data Sources for Incident Response",
          "Topic 17C: Apply Mitigation Controls",
        ],
      },
      {
        title: "Lesson 18: Explaining Digital Forensics",
        duration: "2 Hours",
        topics: [
          "Topic 18A: Explain Key Aspects of Digital Forensics Documentation Acquisition",
          "Topic 18B: Explain Key Aspects of Digital Forensics Evidence Acquisition",
        ],
      },
      {
        title: "Lesson 19: Summarizing Risk Management Concepts",
        duration: "2 Hours",
        topics: [
          "Topic 19A: Explain Risk Management Processes and Concepts",
          "Topic 19B: Explain Business Impact Analysis Concepts",
        ],
      },
      {
        title: "Lesson 20: Implementing Cybersecurity Resilience",
        duration: "2 Hours",
        topics: [
          "Topic 20A: Implement Redundancy Strategies",
          "Topic 20B: Implement Backup Strategies",
          "Topic 20C: Implement Cybersecurity Resiliency Strategies",
        ],
      },
      {
        title: "Lesson 21: Explaining Physical Security",
        duration: "2 Hours",
        topics: [
          "Topic 21A: Explain the Importance of Physical Security Controls",
          "Topic 21B: Explain the Importance of Physical Host Security Controls",
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
  CYSA: {},
  Pentest: {},
  Network: {},
};
