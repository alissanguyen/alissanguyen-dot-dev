import * as React from 'react';
import ExternalLinkButton from '~/components/ExternalLinkButton/ExternalLinkButton';
import { otherProjects } from '~/constants';

const OtherProjects: React.FC= ({ }) => {
 return (
    <div className="others-wrapper">
    <ul className="other-projects-wrapper m-0 p-0 text-base flex flex-col">
      {otherProjects.map((project) => (
        <li className="other-project-wrapper grid grid-cols-4" key={project.name}>
          <div
            className="info inline-flex items-center"
            style={{ width: 250 }}
          >
            <img src={project.icon} alt={project.name} />
            <p>{project.name}</p>
          </div>
          <span className="flex-1">{project.description}</span>
          <div className="inline-flex items-center">
            <ExternalLinkButton
              to={project.gitRepo}
              linkProps={{
                target: "_blank"
              }}
            >
              View source
            </ExternalLinkButton>
            <div className="mr-4"></div>
            <ExternalLinkButton
              to={project.website}
              linkProps={{
                target: "_blank"
              }}
            >
              Visit Website
            </ExternalLinkButton>
          </div>
        </li>
      ))}
    </ul>
  </div>
 )
}

export default OtherProjects