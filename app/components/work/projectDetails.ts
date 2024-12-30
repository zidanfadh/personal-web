import {
    SiCplusplus,
    SiFramer,
    SiGithub, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiWebgl,
    SiZig
} from "react-icons/si";
import {IconType} from "react-icons";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Kalis AI",
        description:
            "Kalis AI is a company specializing in Avatar AI technology. I contribute by developing prompts and APIs to enhance the functionality of voice assistants.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiFramer],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.framer.com/motion/"],
        github: "#",
        demo: "https://www.kalis.ai/",
        image: "/projects/Kalis-Logograph-Vector.png",
        available: true,
    },
    {
        id: 1,
        name: "GENKOM",
        description:
            "I created Genkom, an online platform designed to streamline the registration process for professional certification tests, enabling institutions to grant professional titles efficiently.",
        technologies: [SiWebgl,SiTypescript, SiReact],
        techNames: ["WebGL", "Typescript", "React"],
        techLinks: ["https://get.webgl.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "#",
        demo: "https://genkom.profezi.com",
        image: "/projects/genkom.png",
        available: true,
    },
];
