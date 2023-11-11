import React from 'react';
import Card from './Card';
import data from '../assets/data.json';

const Project = () => {

    const projectarray = data.projects;
    return (

        <div id="work">
            <div >
                <h3>My Recent <span>Works</span></h3>
                <p>Here are a few projects I've worked on recently.</p>
            </div>
            <div >
                {projectarray.map((projectarray) => {
                    return <div key={projectarray.githubLink}>
                        <Card title={projectarray.title} description={projectarray.description} imgLink={projectarray.imgSrc} demoLink={projectarray.url} />
                    </div>
                })}
            </div>

        </div>

    )
}

export default Project
