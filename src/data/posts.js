export const initialPosts = [
  {
    id: 1,
    title: "Introduction to HTML",
    description: "HTML is the foundation of every website structure.",
    content: `
HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It's the foundation of every website, and without it, browsers wouldn't know how to display content.

### Why Learn HTML?
HTML is the first language every frontend developer learns. It allows you to define headings, paragraphs, images, links, forms, and more.

### Common Tags:
- <h1> to <h6>: Headings
- <p>: Paragraph
- <a>: Anchor (links)
- <img>: Image
- <ul>, <ol>, <li>: Lists
- <div>: Container block

HTML works with CSS and JavaScript to bring websites to life. If HTML is the structure of a house, CSS is the design, and JavaScript is the interactivity.

### Final Tip:
Always keep your HTML semantic — use tags for what they’re meant to do. This helps with SEO and accessibility.
    `,
    tags: ["HTML", "Beginner"],
    category: "HTML",
    date: "2025-07-29",
    url: "https://source.unsplash.com/random/400x201"
  },
  {
    id: 2,
    title: "Getting Started with CSS",
    description: "CSS makes websites beautiful with layout, color, and style.",
    content: `
CSS (Cascading Style Sheets) is what makes your websites look beautiful. It controls colors, spacing, layout, fonts, animations, and responsiveness.

### Why CSS Matters:
Without CSS, websites would look like plain documents. CSS lets you transform HTML into a clean, stylish, responsive interface.

### What You Can Do with CSS:
- Change background and text colors
- Add padding and margin to elements
- Use Flexbox or Grid to create layouts
- Style buttons and forms
- Animate transitions and hover effects
- Make sites responsive for mobile devices

### Concepts You Should Learn:
- Box Model (content, padding, border, margin)
- Flexbox and CSS Grid
- Positioning (relative, absolute, fixed)
- Pseudo-classes like :hover, :focus
- Media Queries for responsiveness

### Final Tip:
Master the Box Model first. It’s the core concept behind spacing and layout in CSS.
    `,
    tags: ["CSS", "Styling"],
    category: "CSS",
    date: "2025-07-29",
    url: "https://source.unsplash.com/random/400x202"
  },
  {
    id: 3,
    title: "Understanding JavaScript Basics",
    description: "JavaScript brings interactivity to your webpages.",
    content: `
JavaScript is the programming language of the web. It adds behavior and interactivity to web pages — from popups to sliders, from form validation to dynamic content loading.

### Why JavaScript?
It allows websites to respond to user actions without refreshing the page. JavaScript also powers modern frameworks like React, Vue, and Angular.

### What You’ll Learn First:
- Variables (let, const)
- Data types: strings, numbers, arrays, objects
- Functions and how to reuse code
- Events like click, hover, submit
- Conditional statements (if/else)
- Loops for repeating actions
- DOM manipulation to change content

### Bonus:
JavaScript runs in the browser AND on servers (with Node.js). It's everywhere.

### Final Tip:
Practice building small things: a calculator, a todo list, a countdown timer — these will help you grow fast.
    `,
    tags: ["JavaScript", "Logic"],
    category: "JavaScript",
    date: "2025-07-29",
    url: "https://source.unsplash.com/random/400x203"
  },
  {
    id: 4,
    title: "Styling with Tailwind CSS",
    description: "Tailwind is a utility-first CSS framework for fast development.",
    content: `
Tailwind CSS is a utility-first CSS framework that lets you style elements directly in your HTML using predefined classes.

### Why Tailwind?
It speeds up development by removing the need for custom CSS. You build fast and keep your styles consistent.

### Key Concepts:
- Utility Classes: Write styles like \`bg-blue-500\` or \`text-center\` directly in your markup.
- Responsiveness: Use \`md:\`, \`lg:\`, etc., to style for different screen sizes.
- Customization: Use Tailwind config to add your own colors, fonts, spacing, etc.
- Reusability: Use \`@apply\` or components to avoid repetition.

### Example Benefits:
- No switching between HTML and CSS files
- Mobile-first out of the box
- Rapid prototyping and scaling
- Easy dark mode and theme support

### Final Tip:
Don’t memorize all the classes. Use the Tailwind docs and practice — soon it becomes second nature.
    `,
    tags: ["Tailwind", "CSS"],
    category: "Tailwind",
    date: "2025-07-29",
    url: "https://source.unsplash.com/random/400x204"
  },
  {
    id: 5,
    title: "Getting Started with React",
    description: "React is a powerful JavaScript library for building UIs.",
    content: `
React is a JavaScript library for building user interfaces. It’s component-based, declarative, and extremely popular in frontend development.

### Why React?
It allows developers to break UIs into small, reusable pieces (components). It also handles DOM updates efficiently using a virtual DOM.

### Key Concepts:
- Components: Reusable pieces of UI like buttons, forms, headers
- Props: Data passed into components
- State: Local memory for components (with useState)
- JSX: A syntax extension that lets you write HTML inside JavaScript
- Hooks: Functions like useEffect and useState that let you use state and lifecycle features

### Real World Use:
React is used in products like Facebook, Instagram, Airbnb, and Netflix. It’s great for building modern SPAs (Single Page Applications).

### Final Tip:
Focus on understanding props and state first — once you get them, everything else becomes easier.
    `,
    tags: ["React", "Components"],
    category: "React",
    date: "2025-07-29",
    url: "https://source.unsplash.com/random/400x205"
  }
];
