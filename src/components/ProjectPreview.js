import React from 'react';
// import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title, description, url }) => (
    <div className="project-preview">
        <a href={url} target="_blank" aria-label={title} rel="noopener noreferrer">
            <Image fluid={imageData} alt={title} />
        </a>
        <div className="project_desc">
        <h2>
            <a href={url} target="_blank" aria-label={title} rel="noopener noreferrer">{title}</a>
        </h2>
        <p>{description}</p>
        <p>
            <a href={url} target="_blank" aria-label={title} rel="noopener noreferrer">View Project</a>
        </p>
        </div>
    </div>
);

export default ProjectPreview;