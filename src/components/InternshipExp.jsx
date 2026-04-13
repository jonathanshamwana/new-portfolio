import React from 'react';
import { Collapse } from "antd";
import '../styles/Internship.css';

const { Panel } = Collapse;

const InternshipExperience = () => {
    return (
        <section id="internships" className="pt-12 pb-14 bg-site">
            <div className="border-t-2 border-gray-300 my-8"></div>
            <div className="container mx-auto px-10">
                <h1 className="text-2xl text-center mb-8 mt-20">Internship Experience</h1>
                <p className="m-12 text-lg text-center max-w-3xl mx-auto">
                    This summer, I was a Growth Engineering Intern @ SiPhox Health. 
                    SiPhox is revolutionizing blood testing, and how we understand our bodies and live longer healthier lives.
                </p>
                <Collapse className="custom-collapse max-w-5xl mx-auto rounded-lg shadow-md mb-20">
                    <Panel header={<h2 className="text-lg">Maxims and philosophies I picked up</h2>} key="5">
                        <ol className="p-2">
                            <li className="p-2"><b>Default to speed.</b> In 99% of cases, you're better off developing, learning and iterating faster.</li>
                            <li className="p-2"><b>Spend 1-2 hours more on early decisions.</b> The decisions you make at the start of a project have massive implications later on. Poor early decisions can lead to excessive iteration, or the sunk costs fallacy.</li>
                            <li className="p-2"><b>Turn ChatGPT into your second brain.</b> AI won't do everything for you, but it can fill many skill gaps you have, making you less reliant on your busy colleagues.</li>
                            <li className="p-2"><b>Assume you'll embarrass yourself.</b> Especially in a startup, you'll often work outside of the 'scope' of your role. As you pick up new skills and technologies, just assume you'll mess up. Laugh about it.</li>
                            <li className="p-2"><b>Be radically optimistic.</b> Hard work driven by fear is less sustainable than hard work driven by near-delusional confidence in your mission and work.</li>
                        </ol>
                    </Panel>
                    <Panel header={<h2 className="text-lg">What was my objective?</h2>} key="1">
                        <p className="p-4">My top-level objective was to design, build, and market a freemium product that would get more people into the top of SiPhox's funnel to later be converted to paying customers.</p>
                    </Panel>
                    <Panel header={<h2 className="text-lg">What did I achieve?</h2>} key="2">
                        <p className="pb-4 p-2"><b>The outputs:</b></p>
                        <ol>
                            <li>A tool that lets people upload their 3rd-party blood test results to the SiPhox dashboard.</li>
                            <li>A landing page dedicated to this tool.</li>
                            <li>A product launch and marketing strategy, including paid ads, and posts for Reddit, X, and Launch YC.</li>
                            <li>A plan to scale the tool from 100 users to 10k users.</li>
                        </ol>
                        <p className="pb-4 p-2"><b>The impact:</b></p>
                        <ol>
                            <li>To-date, 100+ people have used the feature I built, and are now on SiPhox's platform and mailing list. I don't have access to data beyond this, but I'm confident that this will be a valuable customer acquisition channel for SiPhox</li>
                        </ol>
                    </Panel>
                    <Panel header={<h2 className="text-lg">What skills did I learn?</h2>} key="3">
                        <ol>
                            <li className="p-2"><b>Full-stack development:</b> React, Javascript, Typescript, Express, Node, AWS, and many more. I already called myself a full-stack developer prior to the internship, but now I wear that badge with confidence.</li>
                            <li className="p-2"><b>Documentation:</b> this goes beyond documenting code, but also documenting my process, and being an internal and external evangelist for my work.</li>
                            <li className="p-2"><b>End-to-end marketing:</b> I integrated email marketing, organic content, paid ads, and other mediums into a full marketing flow, designed to get people in and through the funnel.</li>
                            <li className="p-2"><b>Agile development:</b> although this was inconsistent (because startups can be scrappy), I learned how to plan and execute sprints, ensuring I'm working on the highest priority tasks.</li>
                        </ol>
                    </Panel>
                    <Panel header={<h2 className="text-lg">What should I have done differently?</h2>} key="4">
                        <ol>
                            <li className="p-2"><b>Been more opinionated.</b> For the first 2/3 of the internship, I felt imposter syndrome and often reserved my opinion even when I believed I had valuable insight.</li>
                            <li className="p-2"><b>Started speaking to customers earlier.</b> I learned more about the users I was building for in the final two weeks than the previous 10. All because I spent hours chatting to users on Reddit.</li>
                            <li className="py-2"><b>Drawn clearer boundaries.</b> I'm a hard worker and am happy to work 60+ hours per week on a mission that moves me. But even then, if I don't communicate clear boundaries with my manager and colleagues, I'll exist in a constant state of working.</li>
                        </ol>
                    </Panel>
                </Collapse>
                <div className="relative mx-auto" style={{ paddingBottom: '46.875%', height: 0, maxWidth: '75%' }}>
                    <iframe 
                        src="https://www.loom.com/embed/cf58b874538249bc91026d074a38fdde?sid=b80b045b-4cae-4240-8e0b-e294df733ede" 
                        webkitAllowFullScreen 
                        mozAllowFullScreen 
                        allowFullScreen 
                        className="absolute top-0 left-0 w-full h-full loomEmbed"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default InternshipExperience;
