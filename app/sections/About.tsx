import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"A Little thing about me"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
                        <AnimatedBody text="I am a passionate and versatile developer with expertise in a wide range of technologies and frameworks. My experience spans from building dynamic web applications to creating seamless cross-platform mobile apps, showcasing a strong foundation in both frontend and backend development. I thrive on solving complex technical challenges and delivering innovative, user-focused solutions that meet modern technological demands." />

                        <AnimatedBody
                            delay={0.1}
                            text="Currently, I am pursuing a degree in Software Engineering at Telkom University, Bandung, which has further enriched my understanding of software development principles and industry best practices. My academic journey has provided me with a solid theoretical background, complementing my hands-on experience in various projects. This combination of education and practical expertise equips me to tackle diverse development tasks with confidence and creativity."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
