// data/ecCouncilCourses.js

import cehStuCerti from "../assets/images/indi_course/stu_certi.png";
import cfhiStuCerti from "../assets/images/indi_course/chfi.png";
import cndStuCerti from "../assets/images/indi_course/cnd.png";
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

    // Pricing Information
    pricing: {
      fullCourse: 39000,
      trainingOnly: 17000,
      description:
        "Computer Hacking Forensic Investigator (CHFI) from Zero2infynite offers EC-Council CHFI certification which will help you enter into the digital forensics domain. We are an authorized training centre of EC-Council. The total cost of EC-Council CHFI certification with training is 38000. You can also attend training for 20000. Later you can pay the remaining amount and get the International certification.",
    },

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
      "Why Certified Network Defender (C|ND) course in Zero2infynite is best among others ?",
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
      "Why Certified Network Defender (C|ND) course in Zero2infynite is best among others ?",
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
