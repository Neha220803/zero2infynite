// data/ecCouncilCourses.js

import cehStuCerti from "../assets/images/indi_course/stu_certi.png";
import cfhiStuCerti from "../assets/images/indi_course/chfi.png";
import cndStuCerti from "../assets/images/indi_course/cnd.png";
import wahsStuCerti from "../assets/images/indi_course/wahs.png";
import cjavaStuCertfi from "../assets/images/indi_course/cjava.png";
import cnetCerti from "../assets/images/indi_course/cnet.png";
import ccseStuCerti from "../assets/images/indi_course/ccse.png";

export const ecCouncilCourses = {
  CEH: {
    // Basic Course Information
    title: "Certified Ethical Hacking Course in Chennai",
    badge: "Very Famous",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Ethical Hacking course or international certifications such as EC-Council or CompTIA to secure a job, boost your salary, or advance your career in the cybersecurity domain? Or are you simply seeking practical, knowledge-based training to protect yourself in the digital world?",

      brochureLink: {
        text: "Click here to download the CEH brochure and syllabus",
        url: "https://drive.google.com/file/d/1XrmWRk7hLaWaKvorNmpChxPRMZ33XHfL/view?usp=sharing",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We evaluate each student's unique needs and provide personalized guidance. Unlike typical institutes that stop at training, we offer continuous support until you reach your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications - something you may not get if you purchase courses directly or through other providers.",
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

    // Pricing Information
    pricing: {
      fullCourse: 34000,
      trainingOnly: 17000,
      description:
        "Certified Ethical Hacking (CEH) from Zero2infynite offers Ec-Council and Comptia Certification which will help to enter into the cyber security domain. We are an authorized training centre of Ec-council. The total cost of Ec-council certification with training is 34000. You can also attend training for 17000. Later you can pay the remaining amount and get the International certification.",
    },

    // Career Opportunities
    careerPaths: [
      "Cyber Security",
      "Auditing Vulnerability and penetration Testing",
      "SOC analyst",
      "Cloud security",
      "Malware analyst",
      "Cyber forensic expert",
      "IARM expert",
    ],
    additionalInfoHeading:
      "Why Cyber Security course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn Ethical Hacking Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "We will explain how each topic will help to gain knowledge in specific domains along with realtime examples. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

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
      rightSideImage: cehStuCerti,
      sections: [
        {
          title: "Ec-Council CEH certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council CEH certification with placement assistance, career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "On right side of the above text update the following image. Then blur the name, renewable on and its date, certificate number la mattum partial aah number aah.",
          ],
          image: {
            src: cehStuCerti, // Will be imported in component
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
            "This Certified Ethical Hacking (CEH) course covers comprehensive training in cybersecurity fundamentals, ethical hacking techniques, and penetration testing. It's designed to help you build a strong foundation in cybersecurity and prepare you for the EC-Council CEH certification.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The course duration is flexible with both weekday and weekend batches available. Weekday batches run Monday to Friday, and weekend batches run Saturday to Sunday. The complete course typically takes 6-8 weeks depending on the batch schedule you choose.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "Basic computer literacy and networking fundamentals are recommended. Some experience with operating systems (Windows/Linux) is beneficial but not mandatory. Eagerness to learn cybersecurity concepts is the most important requirement.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon successful completion of the course, you will receive a verified certificate of completion from Zero2infynite. Additionally, you can opt for the international EC-Council CEH certification exam.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You'll have access to experienced trainer support, hands-on practical sessions, career guidance, job referrals, and continuous support until you achieve your goals. Our trainers provide individual attention and flexible scheduling.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, all course materials including study guides, practical lab exercises, and resources can be accessed and downloaded. You'll also receive the CEH brochure and syllabus for reference.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "We offer flexible payment options - you can pay ₹17,000 for training only and later pay the remaining amount for international certification. Contact us to discuss our refund and payment policies in detail.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Introduction to Ethical Hacking",
        topics: [
          "Information Security Overview",
          "Hacking Concepts and Methodology",
          "Ethical Hacking Scope and Limitations",
        ],
      },
      {
        title: "Module 2: Footprinting and Reconnaissance",
        topics: [
          "Network Scanning Techniques",
          "Information Gathering Methods",
          "Social Engineering Tactics",
        ],
      },
      {
        title: "Module 3: System Hacking",
        topics: [
          "Password Cracking Techniques",
          "Privilege Escalation",
          "Maintaining Access",
        ],
      },
      {
        title: "Module 4: Network Security",
        topics: [
          "Wireless Network Vulnerabilities",
          "Web Application Security",
          "Network Defense Mechanisms",
        ],
      },
      {
        title: "Module 5: Tools and Practical Applications",
        topics: [
          "Security Tools and Software",
          "Penetration Testing",
          "Real-world Attack Scenarios",
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

  CHFI: {
    // Basic Course Information
    title: "Computer Hacking Forensic Investigator Course in Chennai",
    badge: "Industry Leader",
    rating: {
      stars: 4,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Hacking Forensic Investigator (CHFI) course with EC-Council International certification to improve your Cyber Forensic skills..?",

      brochureLink: {
        text: "Click here to download the CHFI brochure and syllabus",
        url: "https://drive.google.com/file/d/1eRoEJtQpSe3pPNK1aCk3XZZJqLLlY4wC/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner. Click here to download the CHFI brochure and syllabus",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time digital forensics training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CHFI syllabus",
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
        text: "Digital Forensics Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Forensics Lab Training",
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
        text: "International CHFI Certification Preparation",
        color: "text-warning",
      },
    ],

    // Career Opportunities
    careerPaths: [
      "Digital Forensics Investigator",
      "Cyber Forensics Expert",
      "Incident Response Analyst",
      "Computer Crime Investigator",
      "Security Consultant",
      "Forensic Analyst",
      "Law Enforcement Cyber Crime Units",
      "Corporate Security Investigator",
    ],

    additionalInfoHeading:
      "Why CHFI v11 (Computer Hacking Forensic Investigator) course in Z2I is best among others ?",
    additionalInfoSubHeading:
      "Learn CHFI Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "CHFI v11 (Computer Hacking Forensic Investigator) from Zero2infynite offers Ec-Council International certification to upskill your Cyber forensic knowledge. We are an authorized training centre of Ec-council. The total cost of CHFI certification with training is 39000. You can also attend training for 17000. Later you can pay the remaining amount and get the International certification. This CHFI course will help you to enter in to cyber forensic domain. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",
    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Computer Hacking Forensic Investigator Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Digital Forensics training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Monday (Monday - Friday)",
          id: 2,
          dayOffset: 3,
        },
        {
          type: "Weekdays",
          days: "Wednesday (Monday - Friday)",
          id: 3,
          dayOffset: 5,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 7,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "Ec-Council CHFI certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council CHFI certification with, career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams",
            "We've updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            // "We are the only institute offering comprehensive EC-Council CHFI certification with placement assistance, career shift guidance, hands-on forensics lab training, and industry-standard curriculum. All our students have successfully cleared their CHFI exams. We've updated the EC-Council license image and a sample EC-Council CHFI certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            // "Our CHFI certification prepares you for real-world digital forensics investigations with practical case studies and evidence handling procedures.",
          ],
          image: {
            src: cfhiStuCerti,
            alt: "CHFI Certification Image",
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
          question: "What is the CHFI course about?",
          answer:
            "This Computer Hacking Forensic Investigator (CHFI) course covers comprehensive training in digital forensics fundamentals, evidence acquisition, analysis techniques, and investigation procedures. It's designed to help you build expertise in digital forensics and prepare you for the EC-Council CHFI certification.",
        },
        {
          eventKey: "1",
          question: "How long is the CHFI course?",
          answer:
            "The course duration is flexible with both weekday and weekend batches available. Weekday batches run Monday to Friday, and weekend batches run Saturday to Sunday. The complete CHFI course typically takes 8-10 weeks depending on the batch schedule you choose.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites for CHFI?",
          answer:
            "Basic understanding of computer systems, networking, and operating systems (Windows/Linux) is recommended. Some experience with cybersecurity concepts is beneficial. Knowledge of legal procedures and evidence handling is a plus but not mandatory.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon successful completion of the course, you will receive a verified certificate of completion from Zero2infynite. Additionally, you can opt for the international EC-Council CHFI certification exam to become a certified digital forensics investigator.",
        },
        {
          eventKey: "4",
          question: "What support is available during the CHFI course?",
          answer:
            "You'll have access to experienced digital forensics trainer support, hands-on lab sessions with forensics tools, career guidance for forensics roles, job referrals, and continuous support until you achieve your goals. Our trainers provide individual attention and real case study discussions.",
        },
        {
          eventKey: "5",
          question: "Is the CHFI course content downloadable?",
          answer:
            "Yes, all course materials including forensics study guides, practical lab exercises, case studies, and digital evidence samples can be accessed and downloaded. You'll also receive the CHFI brochure and detailed syllabus for reference.",
        },
        {
          eventKey: "6",
          question: "What is the CHFI course fee structure?",
          answer:
            "We offer flexible payment options - you can pay ₹20,000 for training only and later pay the remaining amount for international CHFI certification (total ₹38,000). Contact us to discuss our refund and payment policies in detail.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Computer Forensics in Today's World",
        topics: [
          "Overview of digital forensics",
          "Types of cybercrimes",
          "Laws and regulations impacting digital investigations",
        ],
      },
      {
        title: "Module 2: Computer Forensics Investigation Process",
        topics: [
          "Investigation phases",
          "Legal considerations",
          "Incident triage and response",
        ],
      },
      {
        title: "Module 3: Understanding Hard Disks and File Systems",
        topics: [
          "Disk architecture",
          "File systems structures (FAT, NTFS, ext3/4, HFS+, APFS)",
          "RAID, NAS, SAN, file format analysis",
        ],
      },
      {
        title: "Module 4: Data Acquisition and Duplication",
        topics: [
          "Imaging techniques",
          "eDiscovery concepts",
          "Tools and methods for volatile and non-volatile acquisition",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Computer Hacking Forensic Investigator course",
      "secure a job, boost your salary, or advance your career in the digital forensics domain",
      "help you achieve your goals in digital forensics",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world industry experience and also assist with job referrals",
    ],
  },

  CND: {
    // Basic Course Information
    title: "Certified Network Defender Course in Chennai",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Network Defender (C|ND) course with EC-Council International certification to improve your Network defending skills..?",

      brochureLink: {
        text: "Click here to download the CND brochure and syllabus",
        url: "https://drive.google.com/file/d/16D1yZ3qoY5M0Ov7h-AsXx0d82l43PORt/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner. Click here to download the C|ND brochure and syllabus ",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph's College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Network Defender (C|ND) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn C|ND Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Certified Network Defender (C|ND) from Zero2infynite offers Ec-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of Ec-council. This C|ND course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council CND certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (C|ND) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our CND certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: cndStuCerti,
            alt: "CND Certification Image",
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
          question: "What is the CND course about?",
          answer:
            "This Certified Network Defender (CND) course covers comprehensive training in network security fundamentals, threat detection, incident response, and network defense techniques. It's designed to help you build expertise in protecting network infrastructure and prepare you for the EC-Council CND certification.",
        },
        {
          eventKey: "1",
          question: "How long is the CND course?",
          answer:
            "The course duration is flexible with both weekday and weekend batches available. Weekday batches run Monday to Friday, and weekend batches run Saturday to Sunday. The complete CND course typically takes 6-8 weeks depending on the batch schedule you choose.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites for CND?",
          answer:
            "Basic understanding of networking concepts, TCP/IP, and operating systems (Windows/Linux) is recommended. Some experience with network administration or basic cybersecurity concepts is beneficial but not mandatory. Eagerness to learn network defense is the most important requirement.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon successful completion of the course, you will receive a verified certificate of completion from Zero2infynite. Additionally, you can opt for the international EC-Council CND certification exam to become a certified network defender.",
        },
        {
          eventKey: "4",
          question: "What support is available during the CND course?",
          answer:
            "You'll have access to experienced network security trainer support, hands-on lab sessions with security tools, career guidance for network defense roles, job referrals, and continuous support until you achieve your goals. Our trainers provide individual attention and real threat scenario discussions.",
        },
        {
          eventKey: "5",
          question: "Is the CND course content downloadable?",
          answer:
            "Yes, all course materials including network security study guides, practical lab exercises, threat detection scenarios, and security tool configurations can be accessed and downloaded. You'll also receive the CND brochure and detailed syllabus for reference.",
        },
        {
          eventKey: "6",
          question: "What is the CND course fee structure?",
          answer:
            "We offer flexible payment options - you can pay ₹16,000 for training only and later pay the remaining amount for international CND certification (total ₹32,000). Contact us to discuss our refund and payment policies in detail.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Network Attacks and Defense Strategies",
        topics: [
          "Understanding modern network attacks",
          "Tactics, techniques, and procedures (TTPs)",
          "Implementing defense-in-depth strategies",
        ],
      },
      {
        title: "Module 2: Administrative Network Security",
        topics: [
          "Network security policies and procedures",
          "User awareness and training",
          "Asset classification and access control",
        ],
      },
      {
        title: "Module 3: Technical Network Security",
        topics: [
          "Security configurations for network devices",
          "Hardening systems and protocols",
          "Secure administration practices",
        ],
      },
      {
        title: "Module 4: Network Perimeter Security",
        topics: [
          "Firewalls, IDS/IPS, and DMZs",
          "Network segmentation and zoning",
          "Proxy and content filtering",
        ],
      },
      {
        title: "Module 5: Endpoint Security - Windows Systems",
        topics: [
          "Hardening Windows endpoints",
          "Patch management and endpoint controls",
          "Secure configuration tools and policies",
        ],
      },
      {
        title: "Module 6: Endpoint Security - Linux Systems",
        topics: [
          "Securing Linux servers and workstations",
          "Log management and process control",
          "File integrity and access monitoring",
        ],
      },
      {
        title: "Module 7: Endpoint Security - Mobile Devices",
        topics: [
          "Mobile device management (MDM)",
          "Securing BYOD environments",
          "Mobile OS vulnerabilities and mitigation",
        ],
      },
      {
        title: "Module 8: Endpoint Security - IoT Devices",
        topics: [
          "IoT architecture and threats",
          "Securing smart devices and embedded systems",
          "IoT network segmentation",
        ],
      },
      {
        title: "Module 9: Administrative Application Security",
        topics: [
          "Application control policies",
          "Secure software configuration",
          "Web application protection fundamentals",
        ],
      },
      {
        title: "Module 10: Data Security",
        topics: [
          "Data classification and handling",
          "Encryption technologies and DLP",
          "Backup and secure storage management",
        ],
      },
      {
        title: "Module 11: Enterprise Virtual Network Security",
        topics: [
          "Virtualization risks and controls",
          "Hypervisor and virtual machine security",
          "Software-Defined Networking (SDN) security",
        ],
      },
      {
        title: "Module 12: Enterprise Cloud Network Security",
        topics: [
          "Cloud architecture and security models (IaaS, PaaS, SaaS)",
          "Securing AWS, Azure, and GCP services",
          "Cloud access and identity management",
        ],
      },
      {
        title: "Module 13: Enterprise Wireless Network Security",
        topics: [
          "Wireless threats and encryption standards",
          "Wireless access point hardening",
          "Rogue AP detection and mitigation",
        ],
      },
      {
        title: "Module 14: Network Traffic Monitoring and Analysis",
        topics: [
          "Packet capture and analysis tools (Wireshark, etc.)",
          "Traffic behavior analysis",
          "Detecting anomalies and intrusions",
        ],
      },
      {
        title: "Module 15: Network Logs Monitoring and Analysis",
        topics: [
          "Log collection and SIEM usage",
          "Identifying Indicators of Compromise (IoCs)",
          "Log correlation and reporting",
        ],
      },
      {
        title: "Module 16: Incident Response and Forensic Investigation",
        topics: [
          "IR lifecycle and team roles",
          "Containment, eradication, and recovery",
          "Forensic tools and evidence handling",
        ],
      },
      {
        title: "Module 17: Business Continuity and Disaster Recovery",
        topics: [
          "BCP/DRP planning and execution",
          "Redundancy and failover strategies",
          "Crisis communication and tabletop exercises",
        ],
      },
      {
        title: "Module 18: Risk Anticipation with Risk Management",
        topics: [
          "Risk assessment methodologies",
          "Security controls selection and implementation",
          "Risk mitigation and acceptance",
        ],
      },
      {
        title: "Module 19: Threat Assessment with Attack Surface Analysis",
        topics: [
          "Identifying and mapping attack surfaces",
          "System and network exposure analysis",
          "Security posture evaluation",
        ],
      },
      {
        title: "Module 20: Threat Prediction with Cyber Threat Intelligence",
        topics: [
          "CTI lifecycle and sources",
          "Threat hunting concepts",
          "Integration of CTI into defense strategies",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  ECIH: {
    // Basic Course Information
    title: "EC-Council's Certified Incident Handler (E|CIH)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable EC-Council's Certified Incident Handler (E|CIH) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the EC-Council's Certified Incident Handler (E|CIH) brochure and syllabus",
        url: "https://drive.google.com/file/d/1fKZ2ncRXY2OMyC0zAY6lUKvzXEmQXHuu/view?usp=sharing",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Network Defender (E|CIH) course in Zero2infynite is best among others ?",
    // Additional Information
    additionalInfo:
      "Certified Network Defender (E|CIH) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This E|CIH course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council CND certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (E|CIH) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our CND certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: cndStuCerti,
            alt: "CND Certification Image",
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
            "The EC-Council Certified Incident Handler (ECIH) course focuses on equipping professionals with the knowledge and skills to detect, respond to, and manage cyber security incidents effectively. It covers incident handling processes for malware, network security breaches, insider threats, ransomware, and advanced persistent threats (APTs).",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The ECIH course typically runs for 3 to 5 days in an intensive bootcamp format. However, flexible learning modes such as weekday, weekend, or self-paced online training options are also available depending on the provider.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "There are no mandatory prerequisites. However, it is recommended that participants have some knowledge of networking, cybersecurity fundamentals, and security incident management. Prior certifications like CEH, CompTIA Security+, or equivalent experience are beneficial but not required.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, after completing the training, you will receive a course completion certificate. To earn the official EC-Council Certified Incident Handler (ECIH) certification, you must pass the ECIH exam conducted by EC-Council.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You’ll have access to expert trainers, digital courseware, hands-on labs, and practice exam questions. Additional support includes mentorship, career guidance, and interview preparation for roles in security operations and incident response.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides digital courseware, lab guides, and additional resources in downloadable format. Some providers may also offer recorded sessions for revision.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refund and payment policies depend on the training provider. Most offer flexible installment options, and refunds are subject to terms and conditions. Please check with the provider before enrolling.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Introduction to Incident Handling and Response",
        topics: [
          "Information Security Threats and Attack Vectors",
          "Attack and Defense Frameworks (e.g., MITRE ATT&CK)",
          "Information Security Concepts",
          "Information Security Incidents",
          "Incident Management Process",
          "Incident Response Automation and Orchestration",
          "Incident Handling and Response Best Practices",
          "Relevant Standards and Frameworks",
          "Incident Handling Laws and Legal Compliance",
        ],
      },
      {
        title: "Module 2: Incident Handling and Response Process",
        topics: [
          "IH&R Lifecycle Overview",
          "Preparation Steps",
          "Incident Recording and Assignment",
          "Triage Process",
          "Notification and Escalation",
          "Containment",
          "Evidence Gathering and Forensic Analysis",
          "Eradication",
          "Recovery",
          "Post-Incident Activities",
          "Information Sharing",
        ],
      },
      {
        title: "Module 3: First Response",
        topics: [
          "First Responder Role and Responsibilities",
          "Securing and Documenting the Crime Scene",
          "Evidence Collection Procedures",
          "Evidence Preservation, Packaging, and Transport",
        ],
      },
      {
        title: "Module 4: Handling and Responding to Malware Incidents",
        topics: [
          "Malware Incident Lifecycle",
          "Detection, Containment, Analysis, Eradication",
          "Recovery Process",
          "Real-World Case Studies",
          "Best Practices",
        ],
      },
      {
        title: "Module 5: Handling and Responding to Email Security Incidents",
        topics: [
          "Email Security Incident Lifecycle",
          "Spam, Phishing, Spoofing, Business Email Compromise (BEC)",
          "Containment and Eradication Strategies",
          "Email-Specific Threats and Case Studies",
          "Best Practices",
        ],
      },
      {
        title:
          "Module 6: Handling and Responding to Network Security Incidents",
        topics: [
          "Unauthorized Access, DoS, Inappropriate Usage, Wireless Threats",
          "Detection and Validation",
          "Case Study Analysis",
          "Best Practices",
        ],
      },
      {
        title:
          "Module 7: Handling and Responding to Web Application Security Incidents",
        topics: [
          "Detection and Analysis of Web-Based Attacks",
          "Common Vulnerabilities (e.g., SQLi, XSS)",
          "Containment and Remediation",
          "Real-Life Case Study",
          "Best Practices",
        ],
      },
      {
        title: "Module 8: Handling and Responding to Cloud Security Incidents",
        topics: [
          "Handling Cloud Security Threats on Microsoft Azure",
          "Handling Cloud Security Threats on AWS",
          "Handling Cloud Security Threats on Google Cloud Platform (GCP)",
          "Real-World Case Studies",
          "Best Practices",
        ],
      },
      {
        title: "Module 9: Handling and Responding to Insider Threats",
        topics: [
          "Insider Threat Indicators",
          "Preparation and Detection",
          "Containment and Analysis",
          "Recovery and Prevention",
          "Case Study and Best Practices",
        ],
      },
      {
        title:
          "Module 10: Handling and Responding to Endpoint Security Incidents",
        topics: [
          "Mobile, IoT, and OT Endpoint Security Incidents",
          "Detection, Containment, and Remediation",
          "Real-World Case Study",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  CPENT: {
    // Basic Course Information
    title:
      "The Certified Penetration Testing Professional(C|PENT AI) Course in Chennai",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable The Certified Penetration Testing Professional(C|PENT AI) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the Web Application Hacking and Security (W|AHS) brochure and syllabus",
        url: "https://drive.google.com/file/d/1-nIfIr-W8VZINv_JD_bprPvHnYyUqQGE/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    // Pricing Information
    pricing: {
      fullCourse: 32000,
      trainingOnly: 16000,
      description:
        "Certified Network Defender (CND) from Zero2infynite offers EC-Council CND certification which will help you enter into the network security domain. We are an authorized training centre of EC-Council. The total cost of EC-Council CND certification with training is 32000. You can also attend training for 16000. Later you can pay the remaining amount and get the International certification.",
    },

    // Career Opportunities
    careerPaths: [
      "Network Security Administrator",
      "Security Operations Center (SOC) Analyst",
      "Network Defense Specialist",
      "Cybersecurity Analyst",
      "Information Security Analyst",
      "Network Security Engineer",
      "IT Security Specialist",
      "Incident Response Analyst",
      "Security Monitoring Analyst",
    ],

    additionalInfoHeading:
      "Why CHFI v11 (Computer Hacking Forensic Investigator) course in Zero2infynite is best among others.",
    // Additional Information
    additionalInfo:
      "Certified Network Defender (C|ND) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This C|ND course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council CND certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (C|ND) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our CND certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: cndStuCerti,
            alt: "CND Certification Image",
            className: "certification-image",
          },
        },
      ],
    },

    faq: {
      title: "Frequently Asked Questions",
      defaultActiveKey: "1",
      questions: [
        {
          eventKey: "0",
          question: "What is the course about?",
          answer:
            "The Certified Penetration Testing Professional (CPENT) course by EC-Council is an advanced program that trains you to perform penetration testing in enterprise environments. It covers network, web, cloud, IoT, and OT systems while preparing you for real-world challenges with hands-on labs and a 24-hour practical exam.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The CPENT course typically spans 40 hours of instructor-led training, which can be completed over 5 days in a bootcamp format. Flexible learning options such as online self-paced or weekend classes are also available depending on the provider.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "It is strongly recommended that candidates have prior knowledge in penetration testing, ethical hacking, and networking. Holding certifications like CEH (Certified Ethical Hacker), ECSA, or equivalent hands-on experience in cybersecurity is highly beneficial before attempting CPENT.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon completion of training you will receive a course completion certificate. To earn the official EC-Council CPENT certification, you must pass the 24-hour rigorous hands-on CPENT exam, which can also qualify you for the prestigious Licensed Penetration Tester (LPT Master) credential if you score high enough.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "The program includes access to expert trainers, extensive lab environments (iLabs), exam-focused study resources, and mentorship. You will also receive career guidance and interview preparation for roles in red teaming and advanced penetration testing.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides official e-courseware, lab guides, and additional resources in digital and downloadable format. Depending on the provider, you may also receive recorded sessions for review.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refund policies vary depending on the training provider. Most offer flexible payment plans and installment options. Please contact your chosen training center for detailed terms and conditions before enrollment.",
        },
      ],
    },

    syllabusModules: [
      {
        title:
          "Module 1: Introduction to Penetration Testing and Methodologies",
        topics: [
          "Information Security Overview",
          "Hacking Concepts and Methodology",
          "Ethical Hacking Scope and Limitations",
        ],
      },
      {
        title: "Module 2: Footprinting and Reconnaissance",
        topics: [
          "Network Scanning Techniques",
          "Information Gathering Methods",
          "Social Engineering Tactics",
        ],
      },
      {
        title: "Module 3: System Hacking",
        topics: [
          "Password Cracking Techniques",
          "Privilege Escalation",
          "Maintaining Access",
        ],
      },
      {
        title: "Module 4: Network Security",
        topics: [
          "Wireless Network Vulnerabilities",
          "Web Application Security",
          "Network Defense Mechanisms",
        ],
      },
      {
        title: "Module 5: Tools and Practical Applications",
        topics: [
          "Security Tools and Software",
          "Penetration Testing",
          "Real-world Attack Scenarios",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  WAHS: {
    // Basic Course Information
    title: "Web Application Hacking and Security (W|AHS)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Web Application Hacking and Security (W|AHS) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the Web Application Hacking and Security (W|AHS) brochure and syllabus",
        url: "https://drive.google.com/file/d/1pieNll-TJZVdCSzD19Ff-3uxcIQO1Wg2/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Web Application Hacking and Security (W|AHS) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn W|AHS Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Web Application Hacking and Security (W|AHS) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This (W|AHS) course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council WAHS certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender WAHS certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our WAHS certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: wahsStuCerti,
            alt: "WAHS Certification Image",
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
            "The Web Application Hacking and Security (WAHS) course by EC-Council focuses on teaching advanced techniques for testing, exploiting, and securing modern web applications. It provides hands-on training in identifying and mitigating vulnerabilities such as SQL injection, XSS, CSRF, authentication bypass, and advanced web exploits.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The WAHS course typically runs for 3 to 5 days in an intensive instructor-led or bootcamp format. Online self-paced learning options with flexible duration are also available, depending on the training provider.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "It is recommended that participants have a basic understanding of web technologies, networking, and cybersecurity fundamentals. Prior certifications like CEH or knowledge of penetration testing concepts are helpful but not mandatory.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon completing the course, you will receive a certificate of completion from EC-Council. This validates your skills in web application security and is globally recognized in the cybersecurity industry.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You will have access to expert instructors, digital courseware, real-world labs, and practice challenges on live web applications. Additional support includes career guidance, mentorship, and preparation for jobs in penetration testing and web application security.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides official e-courseware, lab guides, and resources in downloadable format. Some providers may also offer recorded sessions for future reference.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refund and payment policies depend on the training provider. Most providers offer flexible payment options, and refunds are subject to their terms and conditions. Please check with the provider for details.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Introduction to Web Application Security",
        topics: [
          "Importance of web app security",
          "Current threat landscape",
          "Overview of OWASP Top 10 vulnerabilities",
          "Common attack surfaces in web environments",
        ],
      },
      {
        title: "Module 2: Web Application Reconnaissance",
        topics: [
          "Footprinting and target enumeration",
          "DNS, subdomain, and CMS discovery",
          "Directory browsing and brute forcing",
          "Network scanning for exposed services",
        ],
      },
      {
        title: "Module 3: Authentication and Session Exploits",
        topics: [
          "Authentication bypass techniques",
          "Session fixation and hijacking",
          "Cookie manipulation and exposure risks",
          "Exploiting weak login and credential logic",
        ],
      },
      {
        title: "Module 4: Injection-Based Vulnerabilities",
        topics: [
          "Advanced SQL Injection (SQLi) - Error-based, blind, and time-based",
          "Command Injection & Remote Code Execution",
          "XPath and LDAP injection",
          "Injection in headers, cookies, and forms",
        ],
      },
      {
        title: "Module 5: Cross-Site Vulnerabilities",
        topics: [
          "Cross-Site Scripting (XSS) - Reflected, Stored, and DOM-based",
          "Cross-Site Request Forgery (CSRF) - GET and POST method exploitation",
          "Clickjacking and UI redress attacks",
        ],
      },
      {
        title: "Module 6: Access Control and Authorization Bypass",
        topics: [
          "Broken access control",
          "Insecure Direct Object Reference (IDOR)",
          "Privilege escalation and path traversal",
          "Forced browsing restricted areas",
        ],
      },
      {
        title: "Module 7: File and Component Exploitation",
        topics: [
          "Arbitrary file upload and download attacks",
          "Local File Inclusion (LFI) and Remote File Inclusion (RFI)",
          "Using vulnerable third-party components",
          "File tampering and log poisoning techniques",
        ],
      },
      {
        title: "Module 8: Server-Side and Application Misconfigurations",
        topics: [
          "Server-Side Request Forgery (SSRF)",
          "Directory listing and exposed resources",
          "Misconfigured headers, services, or SSL",
          "Exploiting weak SSL/TLS ciphers",
        ],
      },
      {
        title: "Module 9: Client-Side and Browser-Based Attacks",
        topics: [
          "HTTP header manipulation",
          "Exploiting weak cookie flags",
          "Source code analysis and client-side data leakage",
          "Session token abuse",
        ],
      },
      {
        title: "Module 10: Defensive Security and Secure Coding",
        topics: [
          "Securing input and output handling",
          "Applying access control models",
          "Hardened authentication flows",
          "Implementing secure file handling and uploads",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  CJAVA: {
    // Basic Course Information
    title: "Certified Application Security Engineer in java (CASE|JAVA)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Application Security Engineer in java (CASE|JAVA) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the Certified Application Security Engineer in java (CASE|JAVA) brochure and syllabus",
        url: "https://drive.google.com/file/d/1zTLnd8VcGnRGae6DzIKacrqRwFP1aZt0/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Application Security Engineer in java (CASE|JAVA) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn (CASE|JAVA) Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Certified Application Security Engineer in java (CASE|JAVA) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This  (CASE|JAVA) course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council (CASE|JAVA) certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (CASE|JAVA) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our (CASE|JAVA) certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: cjavaStuCertfi,
            alt: "Case JAVA Certification Image",
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
            "The Certified Application Security Engineer – Java (CASE Java) course by EC-Council is designed to train software developers and security professionals in secure coding practices. It focuses on identifying, preventing, and mitigating security vulnerabilities in Java applications throughout the Software Development Life Cycle (SDLC).",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The CASE Java course typically runs for 3 to 5 days in an instructor-led bootcamp format. Self-paced online training options are also available, allowing learners to progress at their own speed.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "Participants should have a basic to intermediate understanding of Java programming and software development. Familiarity with application security concepts or prior certifications like CEH is recommended but not mandatory.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, after successfully completing the course, you will receive a certificate of completion. To earn the official EC-Council CASE Java certification, you must pass the certification exam conducted by EC-Council.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "The course provides access to expert trainers, digital courseware, practical labs, and secure coding exercises. You’ll also receive guidance on secure software design, threat modeling, and best practices for Java application security.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides official e-courseware, lab manuals, and reference materials in downloadable format. Some training providers may also provide recorded sessions for revision.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refund and payment policies vary depending on the training provider. Most offer flexible installment plans, and refunds are subject to their terms and conditions. Please confirm with the provider before enrollment.",
        },
      ],
    },

    syllabusModules: [
      {
        title:
          "Module 1: Understanding Application Security, Threats, and Attacks",
        topics: [
          "Overview of application security fundamentals",
          "Common attack vectors and threat landscapes",
          "Importance of security in SDLC",
        ],
      },
      {
        title: "Module 2: Security Requirements Gathering",
        topics: [
          "Techniques for capturing security requirements",
          "Integrating security early in the development lifecycle",
          "Aligning business needs with secure design",
        ],
      },
      {
        title: "Module 3: Secure Application Design and Architecture",
        topics: [
          "Secure design principles",
          "Threat modeling methodologies (e.g., STRIDE)",
          "Security architecture considerations",
        ],
      },
      {
        title: "Module 4: Secure Coding Practices – Input Validation",
        topics: [
          "Common input-based vulnerabilities (e.g., XSS, SQL Injection)",
          "Input validation techniques",
          "Safe coding patterns",
        ],
      },
      {
        title:
          "Module 5: Secure Coding Practices – Authentication and Authorization",
        topics: [
          "Secure login implementations",
          "Role-based access control (RBAC)",
          "Session and token management",
        ],
      },
      {
        title: "Module 6: Secure Coding Practices – Cryptography",
        topics: [
          "Encryption and hashing fundamentals",
          "Secure data storage and transmission",
          "Key management principles",
        ],
      },
      {
        title: "Module 7: Secure Coding Practices – Session Management",
        topics: [
          "Managing user sessions securely",
          "Preventing session hijacking and fixation",
        ],
      },
      {
        title: "Module 8: Secure Coding Practices – Error Handling",
        topics: [
          "Secure exception handling practices",
          "Avoiding information leakage",
          "Logging and alerting securely",
        ],
      },
      {
        title:
          "Module 9: Static and Dynamic Application Security Testing (SAST & DAST)",
        topics: [
          "Manual and automated testing techniques",
          "Tools like Fortify, AppScan, WebInspect",
          "Analyzing and interpreting test results",
        ],
      },
      {
        title: "Module 10: Secure Deployment and Maintenance",
        topics: [
          "Secure release management",
          "Patch management strategies",
          "Monitoring and maintaining secure apps in production",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  CNET: {
    title: "Certified Application Security Engineer(CASE|NET)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Application Security Engineer (CASE|NET) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the Certified Application Security Engineer (CASE|NET) brochure and syllabus",
        url: "https://drive.google.com/file/d/1zTLnd8VcGnRGae6DzIKacrqRwFP1aZt0/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Application Security Engineer (CASE|NET) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn (CASE|NET) Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Certified Application Security Engineer (CASE|NET) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This  (CASE|NET) course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council (CASE|JAVA) certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (CASE|JAVA) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our (CASE|JAVA) certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: cnetCerti,
            alt: "Case JAVA Certification Image",
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
            "The Certified Application Security Engineer – .NET (CASE .NET) course by EC-Council is designed to help software developers and security professionals build secure .NET applications. It teaches secure coding practices, vulnerability identification, and mitigation strategies to safeguard applications throughout the Software Development Life Cycle (SDLC).",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The CASE .NET course typically runs for 3 to 5 days in a bootcamp or instructor-led training format. Self-paced online learning options are also available, allowing learners to progress according to their schedule.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "Participants should have prior experience in .NET programming and application development. Familiarity with C#, ASP.NET, and basic application security concepts is recommended. Prior certifications such as CEH are helpful but not mandatory.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, after completing the course you will receive a certificate of completion. To earn the official EC-Council CASE .NET certification, you must pass the certification exam conducted by EC-Council.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You’ll have access to expert trainers, downloadable e-courseware, practical labs, and coding challenges. The course also provides guidance on secure application design, secure coding standards, and real-world vulnerability prevention in .NET applications.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides official e-courseware, lab exercises, and reference materials in downloadable format. Some providers may also include recorded sessions for later review.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refunds and payment policies depend on the training provider. Most offer flexible installment plans and refunds based on their specific terms and conditions. Please check with your provider before enrolling.",
        },
      ],
    },

    syllabusModules: [
      {
        title:
          "Module 1: Understanding Application Security, Threats, and Attacks",
        topics: [
          "Importance of application security",
          "Types of attacks (SQLi, XSS, CSRF, etc.)",
          "Real-world data breach examples",
          "Introduction to OWASP Top 10",
        ],
      },
      {
        title: "Module 2: Security Requirements Gathering",
        topics: [
          "Identifying security requirements in the planning phase",
          "Integrating security into user stories and specifications",
          "Role of stakeholders (business analysts, security engineers)",
        ],
      },
      {
        title: "Module 3: Secure Application Design and Architecture",
        topics: [
          "Secure design principles",
          "Security architecture concepts",
          "Threat modeling methodologies (e.g., STRIDE, DREAD)",
          "Design reviews and risk analysis",
        ],
      },
      {
        title: "Module 4: Secure Coding Practices for Input Validation",
        topics: [
          "Validating input data (whitelisting, sanitizing)",
          "Preventing injection flaws (SQL, command, LDAP)",
        ],
      },
      {
        title:
          "Module 5: Secure Coding Practices for Authentication and Authorization",
        topics: [
          "Strong authentication mechanisms",
          "Secure password storage (hashing/salting)",
          "Role-based and attribute-based access control (RBAC/ABAC)",
          "Multi-factor authentication (MFA)",
        ],
      },
      {
        title: "Module 6: Secure Coding Practices for Cryptography",
        topics: [
          "Proper use of cryptographic APIs",
          "Encryption standards and key management",
          "Avoiding weak algorithms",
        ],
      },
      {
        title: "Module 7: Secure Coding Practices for Session Management",
        topics: [
          "Secure session handling and storage",
          "Preventing session hijacking and fixation",
          "Secure cookies and timeout configurations",
        ],
      },
      {
        title: "Module 8: Secure Coding Practices for Error Handling",
        topics: [
          "Avoiding information leakage through error messages",
          "Logging securely",
          "Graceful exception handling",
        ],
      },
      {
        title:
          "Module 9: Static and Dynamic Application Security Testing (SAST & DAST)",
        topics: [
          "Performing secure code reviews (manual + tools)",
          "Running static and dynamic scans",
          "Tools: Fortify, AppScan, WebInspect, etc.",
        ],
      },
      {
        title: "Module 10: Secure Deployment and Maintenance",
        topics: [
          "Hardening deployment environments",
          "Security patching and updates",
          "CI/CD security integration",
          "Configuration management",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  CTIA: {},

  CSA: {},

  CCSE: {
    title: "Certified Cloud Security Engineer (C|CSE)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable Certified Cloud Security Engineer (C|CSE) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the Certified Cloud Security Engineer (C|CSE) brochure and syllabus",
        url: "https://drive.google.com/file/d/1Gn71C5Z9ZgbdlDZMNcdi1CTQYReumyqk/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why Certified Cloud Security Engineer (C|CSE) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn (C|CSE) Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "Certified Cloud Security Engineer (C|CSE) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This  (C|CSE) course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",

    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council  (CASE|NET) certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender  (CASE|NET) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our (CASE|NET) certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: ccseStuCerti,
            alt: "Case JAVA Certification Image",
            className: "certification-image",
          },
        },
      ],
    },

    faq: {
      title: "Frequently Asked Questions",
      defaultActiveKey: "1",
      questions: [
        {
          eventKey: "0",
          question: "What is the course about?",
          answer:
            "The Certified Cloud Security Engineer (CCSE) course by EC-Council provides training on securing cloud environments. It covers cloud security concepts, architecture, compliance, risk management, and incident response for platforms like AWS, Azure, and Google Cloud, preparing you to implement effective cloud security strategies.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The CCSE course typically runs for 3 to 5 days in an intensive instructor-led or bootcamp format. Self-paced online options are also available, allowing learners to progress at their own pace.",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "Participants should have basic knowledge of networking, cloud computing, and cybersecurity fundamentals. Experience with cloud platforms such as AWS, Azure, or Google Cloud is recommended but not mandatory. Prior certifications like CEH or Security+ can be helpful.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon completing the course, you will receive a certificate of completion from EC-Council. To earn the official CCSE certification, you must pass the certification exam conducted by EC-Council.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "You will have access to expert trainers, hands-on labs, digital courseware, and real-world cloud security scenarios. Additional support includes mentorship, career guidance, and preparation for roles in cloud security engineering and cloud architecture.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, EC-Council provides official e-courseware, lab exercises, and reference materials in downloadable format. Some providers may also include recorded sessions for later review.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "Refunds and payment policies depend on the training provider. Most offer flexible installment options and refunds according to their specific terms. Please check with your provider for details before enrolling.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Introduction to Cloud Security",
        topics: [
          "Cloud computing models",
          "Cloud service models (IaaS, PaaS, SaaS)",
          "Threats and vulnerabilities",
          "Shared responsibility model",
        ],
      },
      {
        title: "Module 2: Platform and Infrastructure Security in the Cloud",
        topics: [
          "Cloud architecture components",
          "Securing physical, logical, and virtual environments",
          "Infrastructure hardening (AWS, Azure, GCP)",
        ],
      },
      {
        title: "Module 3: Application Security in the Cloud",
        topics: [
          "Secure software development lifecycle (SDLC)",
          "Cloud-native application security tools and services",
          "AppSec practices in AWS, Azure, GCP",
        ],
      },
      {
        title: "Module 4: Data Security in the Cloud",
        topics: [
          "Cloud data lifecycle",
          "Data protection (at rest, in transit)",
          "Data classification and encryption in AWS, Azure, GCP",
        ],
      },
      {
        title: "Module 5: Operation Security in the Cloud",
        topics: [
          "Secure cloud operations",
          "Logging, monitoring, and incident detection",
          "Tools/services for operational security in major CSPs",
        ],
      },
      {
        title: "Module 6: Penetration Testing in the Cloud",
        topics: [
          "Cloud pentesting methodologies",
          "Tools and services for cloud penetration testing",
          "Compliance-aware testing in AWS, Azure, GCP",
        ],
      },
      {
        title: "Module 7: Incident Detection and Response in the Cloud",
        topics: [
          "Incident response lifecycle",
          "SOAR technologies",
          "Incident handling capabilities in AWS, Azure, GCP",
        ],
      },
      {
        title: "Module 8: Forensics Investigation in the Cloud",
        topics: [
          "Cloud forensics fundamentals",
          "Investigation tools and challenges",
          "Forensics in multi-cloud environments",
        ],
      },
      {
        title:
          "Module 9: Business Continuity and Disaster Recovery in the Cloud",
        topics: [
          "BCP/DR planning",
          "Backup and recovery tools in AWS, Azure, GCP",
          "RTO/RPO strategies",
        ],
      },
      {
        title:
          "Module 10: Governance, Risk Management, and Compliance in the Cloud",
        topics: [
          "Risk assessment and governance frameworks (ISO 27017, HIPAA, PCI DSS)",
          "Compliance tools in cloud platforms",
          "Governance models in AWS, Azure, GCP",
        ],
      },
      {
        title: "Module 11: Standards, Policies, and Legal Issues in the Cloud",
        topics: [
          "Legal and regulatory issues",
          "Policy creation and enforcement",
          "Auditing practices across cloud environments",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  ECDE: {
    title: "EC-Council Certified DevSecOps Engineer (E|CDE)",
    badge: "Most Popular",
    rating: {
      stars: 5,
      text: "Top Rating | Read Reviews",
    },

    // Course Description
    description: {
      intro:
        "Are you looking for an affordable EC-Council Certified DevSecOps Engineer (E|CDE) course with EC-Council International certification to improve your  Penetration Testing skills..?",

      brochureLink: {
        text: "Click here to download the EC-Council Certified DevSecOps Engineer (E|CDE) brochure and syllabus",
        url: "https://drive.google.com/file/d/1jt7IS4pmirRcERbfWU4APPR8UxOBr4f4/view",
      },

      aboutUs: [
        "Zero2Infynite is here to help you achieve your goals. We are an authorized EC-Council Accredited Training Center (ATC) partner.",
        "We take pride in our 100% pass rate for international certifications—something you may not get if you purchase courses directly or through other providers.",
        "Our trainers bring real-world industry experience and also assist with job referrals. They have designed cybersecurity course syllabi for prestigious institutions such as SRM Valliammai Engineering College, St. Joseph’s College, and others. We also hold MOUs with top colleges including VIT Chennai, St. Joseph's, SRM, and VELS University.",
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
        text: "Real-time network security training",
        color: "#666666",
      },
      {
        icon: "BookHalf",
        text: "Updated CND syllabus",
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
        text: "Network Security Career Assistance",
        color: "#275EAE",
      },
      {
        icon: "Tools",
        text: "Hands-On Network Defense Lab",
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
        text: "International CND Certification Preparation",
        color: "text-warning",
      },
    ],

    additionalInfoHeading:
      "Why EC-Council Certified DevSecOps Engineer (E|CDE) course in Zero2infynite is best among others ?",
    additionalInfoSubHeading:
      "Learn (E|CDE) Anytime, Anywhere through online and offline",
    // Additional Information
    additionalInfo:
      "EC-Council Certified DevSecOps Engineer (E|CDE) from Zero2infynite offers EC-Council International certification to upskill your Network defending knowledge. We are an authorized training centre of EC-Council. This (E|CDE) course will help you to enter into Networking and SOC analyst job roles. Also bring strong understanding about how network works. Our Trainers trained Cyber crime officers from various states, managers in IT industry, College and school students.",
    // Batch Schedule Information
    batchSchedule: {
      title:
        "Upcoming Batches Schedule for Certified Network Defender Training in Chennai",
      description:
        "Zero2infinite provides flexible timings to all our students. Here are the Network Security training classes in Chennai schedule in our branches. If this schedule doesn't match please let us know. We will try to arrange appropriate timing based on your flexible timings.",

      batchTemplates: [
        {
          type: "Weekend",
          days: "Saturday(Saturday - Sunday )",
          id: 1,
          dayOffset: 0,
        },
        {
          type: "Weekdays",
          days: "Tuesday (Monday - Friday)",
          id: 2,
          dayOffset: 2,
        },
        {
          type: "Weekdays",
          days: "Thursday (Monday - Friday)",
          id: 3,
          dayOffset: 4,
        },
        {
          type: "Weekend",
          days: "Saturday (Saturday - Sunday)",
          id: 4,
          dayOffset: 6,
        },
      ],

      tableHeaders: ["Date", "Mode", "Days", "Actions"],

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

      updateInterval: 2 * 24 * 60 * 60 * 1000,
    },

    // Trainer Profile Information
    trainerProfile: {
      title: "Trainer Profile",
      qualities: [
        "Our Trainers are real time trainers who completed certifications like CEH, OSCP+",
        "Trainers with more than 3 years experience are handling sessions in Zero2infynite",
        "Expert mentors deliver individualized coaching and career advice.",
        "Patiently address and clarify students' critical doubts.",
        "Provide individual attention to help each student work with cybersecurity tools and troubleshoot issues.",
        "Trainers offer flexible scheduling to match students' availability.",
      ],
    },

    // Certifications Information
    certifications: {
      title: "Certifications",
      sections: [
        {
          title: "EC-Council (E|CDE) certification and Exams",
          content: [
            "We are the only institute offering low-cost EC-Council Certified Network Defender (E|CDE) certification with career shift guidance, hands-on training, and industry-standard curriculum. All our students have successfully cleared their exams. We’ve updated the EC-Council license image and a sample EC-Council certificate on this page for your reference. Students who opt for training only will receive customized sessions along with a Zero2infynite certification.",
            "Our (E|CDE) certification prepares you for real-world network defense scenarios with practical threat detection and incident response procedures.",
          ],
          image: {
            src: ccseStuCerti,
            alt: "Case JAVA Certification Image",
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
            "The Early Childhood Development and Education (ECDE) course by the ECE Council is designed to train aspiring educators in child development, pedagogy, and early learning practices. It equips you with the knowledge and skills to nurture young children’s growth in cognitive, emotional, social, and physical aspects.",
        },
        {
          eventKey: "1",
          question: "How long is the course?",
          answer:
            "The duration of the ECDE course typically ranges from 6 months to 1 year, depending on the program level (certificate, diploma, or advanced diploma) and study mode (full-time or part-time).",
        },
        {
          eventKey: "2",
          question: "What are the prerequisites?",
          answer:
            "Applicants should have completed at least secondary/high school education. A passion for teaching and working with children is essential. Some institutions may require prior teaching experience or a background in education for advanced levels.",
        },
        {
          eventKey: "3",
          question: "Is there a certificate?",
          answer:
            "Yes, upon successful completion of the course, you will receive a certificate or diploma accredited by the ECE Council. This certification is recognized and enables you to pursue careers in early childhood education and childcare settings.",
        },
        {
          eventKey: "4",
          question: "What support is available during the course?",
          answer:
            "The program provides access to experienced faculty, study resources, and practical training in early childhood centers. You will also receive guidance on lesson planning, child assessment, and career development support from the ECE Council.",
        },
        {
          eventKey: "5",
          question: "Is the course content downloadable?",
          answer:
            "Yes, study guides, reference materials, and lesson plans are provided in downloadable format. You will also have access to e-learning resources and practical activity templates.",
        },
        {
          eventKey: "6",
          question: "What is the refund policy?",
          answer:
            "The ECE Council and affiliated institutions offer flexible payment options. Refund policies vary based on the training provider and enrollment terms. Please contact the admissions office for detailed information.",
        },
      ],
    },

    syllabusModules: [
      {
        title: "Module 1: Understanding DevOps Culture",
        topics: [
          "Introduction to DevOps principles",
          "Collaboration between development and operations",
          "Automation, CI/CD, continuous improvement",
          "DevOps values, benefits, and challenges",
        ],
      },
      {
        title: "Module 2: Introduction to DevSecOps",
        topics: [
          "Core DevSecOps principles and shift-left security",
          "Integrating security into DevOps lifecycle",
          "DevSecOps culture, automation, monitoring",
          "Common tools, benefits, and implementation challenges",
        ],
      },
      {
        title: "Module 3: DevSecOps Pipeline – Plan Stage",
        topics: [
          "Identifying security requirements early",
          "Conducting threat modeling",
          "Collaborative planning between dev, security, and ops teams",
        ],
      },
      {
        title: "Module 4: DevSecOps Pipeline – Code Stage",
        topics: [
          "Secure coding practices",
          "Static code analysis (SAST)",
          "IDE integration and security plugins",
          "Enforcing secure development guidelines",
        ],
      },
      {
        title: "Module 5: DevSecOps Pipeline – Build and Test Stage",
        topics: [
          "Integrating security into the CI pipelines",
          "Automated testing using SAST, DAST",
          "Ensuring secure builds",
        ],
      },
      {
        title: "Module 6: DevSecOps Pipeline – Release and Deploy Stage",
        topics: [
          "Secure deployment techniques",
          "Infrastructure-as-Code (IaC) security",
          "Container security tools",
          "Release management and configuration hardening",
        ],
      },
      {
        title: "Module 7: DevSecOps Pipeline – Operate and Monitor Stage",
        topics: [
          "Logging, monitoring, and alerting",
          "Security Incident and Event Management (SIEM)",
          "Real-time detection and response",
          "Continuous monitoring for threats",
        ],
      },
    ],

    // Highlighted Keywords (for styling)
    highlights: [
      "affordable Certified Network Defender course",
      "secure a job, boost your salary, or advance your career in the network security domain",
      "help you achieve your goals in network security and defense",
      "we offer continuous support until you reach your goals",
      "authorized EC-Council Accredited Training Center (ATC) partner",
      "100% pass rate",
      "real-world network security experience and also assist with job referrals",
      "placed the majority of our students in the network security and cybersecurity field",
      "helped experienced professionals transition into network defense",
    ],
  },

  // You can add more EC-Council courses here like:
  // ECSA: { ... },
  // etc.
};

export default ecCouncilCourses;
