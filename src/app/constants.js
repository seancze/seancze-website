export const TECH_STACK_IMAGES = {
  AngularJS: "images/tech-stack/angular.webp",
  AWS: "images/tech-stack/aws.svg",
  ReactJS: "images/tech-stack/reactjs.webp",
  TailwindCSS: "images/tech-stack/tailwindcss.svg",
  MongoDB: "images/tech-stack/mongodb.svg",
  NodeJS: "images/tech-stack/nodejs.webp",
  TensorFlow: "images/tech-stack/tensorflow.svg",
  OpenCV: "images/tech-stack/opencv.svg",
  OpenAI: "images/tech-stack/openai.svg",
  Python: "images/tech-stack/python.svg",
  DeepFace: "images/tech-stack/deepface.webp",
  HuggingFace: "images/tech-stack/hugging-face.webp",
  Lucid: "",
  Java: "images/tech-stack/java.webp",
  Firebase: "images/tech-stack/firebase.svg",
  Javascript: "images/tech-stack/javascript.svg",
  "IBM Watson": "",
  NodeRED: "images/tech-stack/node-red.svg",
  Scala: "images/tech-stack/scala.svg",
  Swift: "images/tech-stack/swift.webp",
  Realm: "images/tech-stack/realm.svg",
  Wix: "images/tech-stack/wix.svg",
};

export const PROJECTS = [
  {
    name: "Personal Site",
    description:
      "A snippet of who Sean Chen is and a fun introduction into AngularJS and vanilla CSS",
    projectUrl: "https://seancze.com",
    videoUrl: "",
    githubUrl: "https://github.com/seancze/seancze-website",
    techStack: ["AngularJS"],
    images: [
      {
        image: "/images/portfolio/personal-site/1-home-page.png",
        thumbImage: "/images/portfolio/personal-site/1-home-page.png",
        title: "1 Home Page",
        alt: "1 Home Page",
      },
    ],
  },

  {
    name: "SAGE (Sharing And Gaining Experiences)",
    description:
      "An online knowledge-sharing platform that fosters the sharing of career guidance, and higher educational experiences in a safe and convenient manner",
    projectUrl: "https://app.sagexperiences.com",
    videoUrl: "https://youtu.be/qAY6aWKJnRE",
    githubUrl: "",
    techStack: ["ReactJS", "TailwindCSS", "MongoDB", "NodeJS"],
    images: [
      {
        image: "/images/portfolio/sage/1-intro.png",
        thumbImage: "/images/portfolio/sage/1-intro.png",
        title: "1 Intro",
        alt: "1 Intro",
      },
      {
        image: "/images/portfolio/sage/2-feed.png",
        thumbImage: "/images/portfolio/sage/2-feed.png",
        title: "2 Feed",
        alt: "2 Feed",
      },
      {
        image: "/images/portfolio/sage/3-profile.png",
        thumbImage: "/images/portfolio/sage/3-profile.png",
        title: "3 Profile",
        alt: "3 Profile",
      },
      {
        image: "/images/portfolio/sage/4-telebot.png",
        thumbImage: "/images/portfolio/sage/4-telebot.png",
        title: "4 Telebot",
        alt: "4 Telebot",
      },
    ],
  },
  {
    name: "Facial Recognition For All",
    description: `[🏆 AIHacks4Good'22 Winner] Improving the latest facial recognition algorithms by using AI to process images taken in extremely low light`,
    projectUrl: "https://devpost.com/software/facialrecognitionforall",
    videoUrl: "",
    githubUrl: "https://github.com/justintanyf/Hacks4Good-Amigos/tree/main",
    techStack: ["TensorFlow", "OpenCV", "Python", "DeepFace"],
    images: [
      {
        image: "/images/portfolio/facial-recognition-for-all/1-combined.png",
        thumbImage:
          "/images/portfolio/facial-recognition-for-all/1-combined.png",
        title: "1 Combined",
        alt: "1 Combined",
      },
      {
        image: "/images/portfolio/facial-recognition-for-all/2-original.png",
        thumbImage:
          "/images/portfolio/facial-recognition-for-all/2-original.png",
        title: "2 Original",
        alt: "2 Original",
      },
      {
        image: "/images/portfolio/facial-recognition-for-all/3-enhanced.png",
        thumbImage:
          "/images/portfolio/facial-recognition-for-all/3-enhanced.png",
        title: "3 Enhanced",
        alt: "3 Enhanced",
      },
    ],
  },
  {
    name: "VibeCheck",
    description:
      "A Slack Bot that helps managers better respond to interns remotely by conducting sentiment analysis and providing suggested responses",
    projectUrl: "https://devpost.com/software/vibecheck-5c2kz8",
    videoUrl: "https://www.youtube.com/watch?v=VK1LYrRQ8Ss",
    githubUrl: "https://github.com/justintanyf/VibeCheck",
    techStack: ["Python", "HuggingFace", "OpenAI"],
    images: [
      {
        image: "/images/portfolio/vibe-check/1-logo.webp",
        thumbImage: "/images/portfolio/vibe-check/1-logo.webp",
        title: "1 Logo",
        alt: "1 Logo",
      },
      {
        image:
          "/images/portfolio/vibe-check/2-sentiment-analysis-and-prompt.webp",
        thumbImage:
          "/images/portfolio/vibe-check/2-sentiment-analysis-and-prompt.webp",
        title: "2 Sentiment Analysis And Prompt",
        alt: "2 Sentiment Analysis And Prompt",
      },
    ],
  },
  {
    name: "Runes",
    description: "An arcade game built to test your hand-eye coordination",
    projectUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=M7g4iqoyrY0",
    githubUrl: "https://github.com/seancze/50.002-1d",
    techStack: ["Lucid"],
    images: [
      {
        image: "/images/portfolio/runes/game.png",
        thumbImage: "/images/portfolio/runes/game.png",
        title: "Game",
        alt: "Game",
      },
    ],
  },
  {
    name: "HawkerGO",
    description:
      "HawkerGo is a mobile application that aims to be a single, centralised resource for users to view and review hawker stalls and hawkers centres in Singapore",
    projectUrl: "",
    videoUrl: "https://www.youtube.com/watch?v=dtdSYYcxvCk",
    githubUrl: "https://github.com/brycegoh/HawkerGO",
    techStack: ["Java", "Firebase"],
    images: [
      {
        image: "/images/portfolio/hawkergo/poster.png",
        thumbImage: "/images/portfolio/hawkergo/poster-thumbnail.jpeg",
        title: "Poster",
        alt: "Poster",
      },
    ],
  },
  {
    name: "The Perfect Reality",
    description:
      "The Perfect Reality is a web and Android-based application developed to encourage players to monitor their symptoms, increase awareness of preventive behaviours and provide critical knowledge of the current COVID-19 virus",
    projectUrl: "https://dhd.digihealthdojo.com/perfectreality/index.html",
    videoUrl: "https://youtu.be/ZoMnd6pT_7s",
    githubUrl: "https://github.com/seancze/rpgmaker-covscrgame",
    techStack: ["Javascript"],
    images: [
      {
        image: "/images/portfolio/perfect-reality/1-start-screen.png",
        thumbImage: "/images/portfolio/perfect-reality/1-start-screen.png",
        title: "1 Start Screen",
        alt: "1 Start Screen",
      },
      {
        image: "/images/portfolio/perfect-reality/2-symptom-monitoring.png",
        thumbImage:
          "/images/portfolio/perfect-reality/2-symptom-monitoring.png",
        title: "2 Symptom Monitoring",
        alt: "2 Symptom Monitoring",
      },
      {
        image: "/images/portfolio/perfect-reality/3-handwashing-technique.jpg",
        thumbImage:
          "/images/portfolio/perfect-reality/3-handwashing-technique.jpg",
        title: "3 Handwashing Technique",
        alt: "3 Handwashing Technique",
      },
      {
        image: "/images/portfolio/perfect-reality/4-dual-controls.jpg",
        thumbImage: "/images/portfolio/perfect-reality/4-dual-controls.jpg",
        title: "4 Dual Controls",
        alt: "4 Dual Controls",
      },
    ],
  },
  {
    name: "Feedback Telegram Bot",
    description:
      "A Telegram Bot for students to easily give feedback about SUTD",
    projectUrl: "https://t.me/SUTD_ROOT_bot",
    videoUrl: "",
    githubUrl: "https://github.com/seancze/root-feedback-telegram-bot",
    techStack: ["Python", "Firebase", "MongoDB"],
    images: [
      {
        image: "/images/portfolio/feedback-bot/1-feedback-bot.png",
        thumbImage: "/images/portfolio/feedback-bot/1-feedback-bot.png",
        title: "1 Feedback Bot",
        alt: "1 Feedback Bot",
      },
      {
        image: "/images/portfolio/feedback-bot/2-feedback-bot.png",
        thumbImage: "/images/portfolio/feedback-bot/2-feedback-bot.png",
        title: "2 Feedback Bot",
        alt: "2 Feedback Bot",
      },
    ],
  },
  {
    name: "ActFaster",
    description:
      "An IoT application that sends early warning signals to the MyResponder application when no data is detected by proximity sensors placed in the homes of seniors for an extended period of time",
    projectUrl: "",
    videoUrl: "https://youtu.be/E3KT0LeUuN0",
    githubUrl: "",
    techStack: ["IBM Watson", "NodeRED"],
    images: [
      {
        image: "/images/portfolio/actfaster/1-actfaster.png",
        thumbImage: "/images/portfolio/actfaster/1-actfaster.png",
        title: "1 Actfaster",
        alt: "1 Actfaster",
      },
      {
        image: "/images/portfolio/actfaster/2-actfaster.png",
        thumbImage: "/images/portfolio/actfaster/2-actfaster.png",
        title: "2 Actfaster",
        alt: "2 Actfaster",
      },
    ],
  },
  {
    name: "DealBuddies",
    description:
      "An IOS application to match foodies to food deals that require more than 1 person",
    projectUrl: "https://haveyoueaten.wixsite.com/dealbuddies",
    videoUrl: "https://youtu.be/z3KNwgcHSgE",
    githubUrl: "",
    techStack: ["Swift", "Realm"],
    images: [
      {
        image: "/images/portfolio/dealbuddies/1-core-features.png",
        thumbImage: "/images/portfolio/dealbuddies/1-core-features.png",
        title: "1 Core Features",
        alt: "1 Core Features",
      },
      {
        image: "/images/portfolio/dealbuddies/2-demo-page.png",
        thumbImage: "/images/portfolio/dealbuddies/2-demo-page.png",
        title: "2 Demo Page",
        alt: "2 Demo Page",
      },
    ],
  },
  {
    name: "JiakBaBuay (Have You Eaten)",
    description:
      "A ground-up telebefriender initiative to reach out to isolated seniors",
    projectUrl: "https://haveyoueaten.wixsite.com/website",
    videoUrl: "https://www.youtube.com/watch?v=yv_W3-2SXP4",
    githubUrl: "",
    techStack: ["Wix"],
    images: [
      {
        image: "/images/portfolio/jiakbabuay/webpage.png",
        thumbImage: "/images/portfolio/jiakbabuay/webpage.png",
        title: "Webpage",
        alt: "Webpage",
      },
    ],
  },
];
