import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const ProjectPreview = ({ slug, imageData, title, description }) => (
    <div className="project-preview">
        <Link to={`/${slug}`}>
            <Image fluid={imageData} alt={title} />
        </Link>
        <div className="project_desc">
        <h2>
            <Link to={`/${slug}`}>{title}</Link>
        </h2>
        <p>{description}</p>
        <p>
            <Link to={`/${slug}`}>View Project</Link>
        </p>
        </div>
    </div>
);

export default ProjectPreview;