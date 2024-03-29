"use client"
import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import React from 'react';

function Page() {
    return (
        <div className='w-screen h-screen flex flex-wrap overflow-hidden items-center justify-center bg-center bg-cover bg-gradient-to-t  from-black  to-very-dark-purple '>
            <div className='grid  mt-16 gap-5 max-w-[90%] max-h-[70vh] overflow-y-auto md:grid-cols-1 lg:grid-cols-2  '>
                {/* max-h-[80vh] sets the maximum height of the container */}
                {/* overflow-y-auto enables vertical scrolling when necessary */}
                {Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        htmlContent={project.text} // Pass the HTML content
                        image={project.src}
                        github={project.github}
                        url={project.url}
                    />
                ))}
            </div>
        </div>
    );
}

export default Page;
