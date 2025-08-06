import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="container mx-auto py-8 px-4"
    >
      <h1 className="text-3xl font-bold font-['Inter'] text-[#111827] mb-6 mt-20">
        About Frontend Blog
      </h1>
      <p className="font-['Open Sans'] text-[#111827] mb-4">
        Welcome to the Frontend Blog, your resource for mastering web
        development. We cover key frontend technologies, including:
      </p>
      <ul className="list-disc pl-6 font-['Open Sans'] text-[#111827]">
        <li>
          <strong>HTML</strong>: Structure content with semantic markup.
        </li>
        <li>
          <strong>CSS</strong>: Style with flexbox, grid, and animations.
        </li>
        <li>
          <strong>Tailwind CSS</strong>: Build responsive designs with utility
          classes.
        </li>
        <li>
          <strong>JavaScript</strong>: Add interactivity with DOM manipulation.
        </li>
        <li>
          <strong>React</strong>: Create dynamic, component-based UIs.
        </li>
      </ul>
      <p className="font-['Open Sans'] text-[#111827] mt-4">
        Our goal is to provide clear, practical guides for frontend developers.
      </p>
    </motion.div>
  );
};

export default About;
