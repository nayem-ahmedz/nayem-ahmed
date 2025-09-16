const hcProjects = [
    {
        id: 1,
        name: 'Parallax Website',
        tech: ['HTML', 'CSS'],
        description: 'A simple parallax scrolling website showcasing smooth background transitions and layered design. It highlights the depth illusion and creative scrolling interaction using pure HTML and CSS.',
        ss: '/project-images/parallax-website.webp',
        link: 'https://nayem-ahmedz.github.io/parallax-website/',
        repo: 'https://github.com/nayem-ahmedz/parallax-website',
        features: ['Parallax effect on scrolling', 'Responsive design for desktop, tablet, and mobile']
    },
    {
        id: 2,
        name: 'Tribute Website',
        tech: ['HTML', 'CSS'],
        description: 'A single-page tribute dedicated to Hazrat Muhammad (SAW). It highlights a few important details about his life in a clean, minimal design. The page also includes a link to the Wikipedia article for readers who wish to explore more.',
        ss: '/project-images/tribute-website.webp',
        link: 'https://wev-dev.netlify.app/projects/web-projects/css/tribute-website/',
        repo: 'https://github.com/nayem-ahmedz/tribute-website',
        features: ['Some information about the Prophet (PBUH)', 'Responsive design', 'Wiki link to read more']
    },
    {
        id: 3,
        name: 'Furniture Website',
        tech: ['HTML', 'CSS'],
        description: 'A static landing page for a furniture store featuring product displays, banners, and responsive layouts. Designed to simulate an e-commerce style interface with attractive visuals.',
        ss: '/project-images/furniture-website.webp',
        link: 'https://wev-dev.netlify.app/projects/furniture-website/',
        repo: 'https://github.com/nayem-ahmedz/furniture-website',
        features: ['Banner', 'Product card', 'Subscribe Newsletter', 'Contact Form', 'Google Maps embedded via iframe', 'Grid-layout footer', 'Fully responsive design']
    },
    {
        id: 4,
        name: 'Time Planner App',
        tech: ['HTML', 'CSS'],
        description: 'A web page showcasing the Time Planner mobile application. It presents the app’s features, pricing, usage video, and detailed information about the full application. Visitors can explore the app and learn how it helps manage time effectively.',
        ss: '/project-images/time-planner-app.webp',
        link: 'https://wev-dev.netlify.app/projects/time-planner-app/',
        repo: 'https://github.com/nayem-ahmedz/time-planner-app',
        features: ['Hero-banner', 'YouTube video embedded via iframe', 'Product card', 'Contact Form', 'Google map embeded via iframe', 'Fully responsive design']
    },
    {
        id: 5,
        name: 'Flowers Mart',
        tech: ['HTML', 'CSS'],
        description: 'An online flower shop concept with product cards, prices, and categories. It emphasizes colorful design, user-friendly navigation, and e-commerce style presentation.',
        ss: '/project-images/flowers-mart.webp',
        link: 'https://nayem-ahmedz.github.io/flowers-mart/',
        repo: 'https://github.com/nayem-ahmedz/flowers-mart',
        features: ['Hero-banner', 'Flower cards', 'Banner with badge', 'Latest deal designed using grid', '4-colum grid layout in footer', 'Responsive design']
    }
];
const jsProjects = [
    {
        id: 1,
        name: 'Age Calculator',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'A simple app that calculates exact age from a user\'s birth date. It demonstrates input handling, date logic, and dynamic result display with JavaScript.',
        ss: '/project-images/life-timer-app.webp',
        link: 'https://wev-dev.netlify.app/projects/web-projects/js/life-timer-app/',
        repo: 'https://github.com/nayem-ahmedz/life-timer-app',
        features: ['Calculate age', 'Dynamic and engaging output', 'Responsive design']
    },
    {
        id: 2,
        name: 'Random Image Generator',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'An app that fetches and displays random images on click. It practices DOM manipulation, event handling, and integrating dark and light mode',
        ss: '/project-images/random-image-generator.webp',
        link: 'https://wev-dev.netlify.app/projects/web-projects/js/random-image-generator/',
        repo: 'https://github.com/nayem-ahmedz/random-image-generator',
        features: ['Generate random image', 'Dark and Light mode', 'Responsive Design']
    },
    {
        id: 3,
        name: 'Budget Tracker',
        tech: ['HTML', 'TailwindCSS', 'Daisy UI', 'JavaScript'],
        description: 'A web app that helps you manage your budget efficiently for trips. Users can select destinations and transportation options like bus, train, or flight. It demonstrates practical use of JavaScript DOM manipulation while planning and tracking expenses.',
        ss: '/project-images/budget-tracker.webp',
        link: 'https://nz-budget-tracker.netlify.app/',
        repo: 'https://github.com/nayem-ahmedz/budget-tracker',
        features: ['Card', 'Add to cart', 'Manage cart', 'View total expenses', 'Cart badge on nav', 'Plan trips efficiently', 'Responsive Design']
    },
    {
        id: 4,
        name: 'Emergency Hotline',
        tech: ['HTML', 'TailwindCSS', 'Daisy UI', 'JavaScript'],
        description: 'A small utility app that lists important emergency contact numbers. It provides quick access with a clean, responsive interface.',
        ss: '/project-images/emergency-hotline.webp',
        link: 'https://nayem-ahmedz.github.io/emergency-hotline/',
        repo: 'https://github.com/nayem-ahmedz/emergency-hotline',
        features: ['Emergency contacts at your fingertips', 'Demo calling', 'Call history', 'Favourite contact', 'Single tap copy number', 'Clear history', 'Resposive design']
    },
    {
        id: 5,
        name: 'English Janala',
        tech: ['HTML', 'TailwindCSS', 'Daisy UI', 'JavaScript', 'Fetch API'],
        description: 'An educational app for learning new English words. It fetches vocabulary dynamically and updates the interface to support language practice.',
        ss: '/project-images/english-janala.webp',
        link: 'https://nayem-ahmedz.github.io/english-janala/',
        repo: 'https://github.com/nayem-ahmedz/english-janala',
        features: ['Improves vocabulary practice interactively', 'Dynamically fetched words using API', 'Lesson level selection', 'Empty lesson level message', 'Search word functionality', 'Responsive design']
    }
];
const gameProjects = [
    {
        id: 1,
        name: 'Simple Ludo',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'A simple browser-based Ludo game where players roll a dice to earn points, aiming to reach at least 20 to win. Built with HTML, CSS, and JavaScript, it demonstrates generating random numbers, displaying dice images, and DOM manipulation. Features include a Play Again option, a progress bar, and storing high scores in localStorage.',
        ss: '/project-images/simple-ludo.webp',
        link: 'https://simple-ludo-game.netlify.app/',
        repo: 'https://github.com/nayem-ahmedz/simple-ludo-game',
        features: ['5 chances to roll dice', 'Achive 20 points to win', 'Progress bar for scores', 'Replay option available', 'Show highscore', 'High score saved in localStorage']
    }
];
const univProjects = [
    {
        id: 1,
        name: 'Blood Donation MS',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        description: 'A web app for managing blood donors, inventory, and appointments. Designed to simplify donation tracking and improve accessibility of information.',
        ss: '/project-images/blood-donation-management-system.webp',
        link: 'https://uni-project1.netlify.app/',
        repo: 'https://github.com/nayem-ahmedz/blood-donation-management-system',
        features: ['Donor registration and management', 'Sign up and login system', 'Blood inventory management', 'Appointment scheduling', 'Reports and analytics']
    },
    {
        id: 2,
        name: 'Student-Parent Portal',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
        description: 'A communication platform between students, parents, and schools. It provides result viewing, tuition tracking, and announcements in a structured system.',
        ss: '/project-images/student-parent-portal.webp',
        link: '',
        repo: 'https://github.com/nayem-ahmedz/student-parent-portal',
        features: ['Student dashboard', 'Result viewing', 'Tuition fee tracking', 'Notice board/announcements']
    }
];

export {hcProjects, jsProjects, gameProjects, univProjects}