

export const navItems = [
  { name: "Home", link: "#home", },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Clear communication from day one.",
    description: "Progress updates, quick iterations, and no surprises.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Timezone-friendly, flexible communication.",
    description: "I adapt to your workflow, wherever you're based.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Current Toolkit.",
    description: "and the hunger to learn more.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Pixel-perfect matters — aesthetics come first.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Code, Credits & Coffee",
    description: "21 y/o · BS Software Engineering '26",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's work together on something great!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "zeeCaptures — Photography Portfolio",
    des: "zeeCaptures is a minimalist, responsive website built for showcasing a photographer’s work with elegance and clarity.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/re.svg", "/ts.svg", "/tail.svg"],
    link: "https://zeecaptures.vercel.app/",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Uzair delivered beyond expectations. He was quick to understand what I needed and turned it into a clean, responsive website. Communication was easy, and updates were consistent. I'd absolutely recommend him for any serious front-end work.",
    name: "Sarah Leung",
    title: "Product Manager, PixelLab",
    image: "/clients/sarah.jpg"
  },
  {
    quote:
      "Working with Uzair was a breeze. He asked the right questions, handled feedback professionally, and made sure the final product matched our vision perfectly. We'll definitely collaborate again.",
    name: "Ali Raza",
    title: "Founder, Karachi Creatives",
    image: "/clients/ali.jpg"
  },
  {
    quote:
      "Reliable, proactive, and detail-oriented — Uzair became an essential part of our remote dev team during a critical launch phase. His ability to own components and deliver fast was a huge win for us.",
    name: "Thomas Becker",
    title: "Tech Lead, Strive Labs",
    image: "/clients/thom.jpg"
  },
  {
    quote:
      "We needed a developer who could translate rough ideas into something usable and elegant. Uzair nailed the UX and handled the frontend architecture with confidence. His calm approach under pressure really stood out.",
    name: "Fatima Noor",
    title: "Co-Founder, NextByte",
    image: "/clients/noor.jpg"
  },
  {
    quote:
      "Very impressed by Uzair's work ethic. He took the time to understand the purpose behind the build and delivered clean, maintainable code — ahead of schedule. Great energy to work with.",
    name: "Jason Wright",
    title: "Startup Advisor, London",
    image: "/clients/jason.jpg"
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Freelance Frontend Developer",
    desc: "Handled end-to-end development of websites using React, Next.js & Tailwind; delivered on tight timelines with clear client communication.",
    className: "md:col-span-2",
    year: '2023 - present'
  },
  {
    id: 2,
    title: "Frontend Developer – Biglo Digital",
    desc: "Implemented UI components and improved responsive layouts; collaborated with cross-functional teams and adapted to fast project pivots.",
    className: "md:col-span-2",
    year: '2023 - 2024'
  },
  {
    id: 3,
    title: "Frontend Intern – Bilgo Digital",
    desc: "Assisted in building feature-rich Next.js interfaces; contributed reusable code and learned agile workflows through real team collaboration.",
    className: "md:col-span-2",
    year: '2023'
  },
  {
    id: 4,
    title: "Open Source Contributor",
    desc: "Took initiative to improve UI bugs and docs across GitHub projects; focused on clean code and async coordination with maintainers.",
    className: "md:col-span-2",
    year: 'present'
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/Muhammad-Uzair21",
  },
  {
    id: 3,
    img: "/linked.svg",
    link: "https://www.linkedin.com/in/muhammad-uzair-j21/",
  },
];