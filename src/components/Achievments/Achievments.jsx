import axios from 'axios';
import { useEffect, useState } from 'react';
import SAchievements from './Style';

export default function Achievements() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`).then(({ data }) => {
      setProjects(data);
    });
  }, []);
  return (
    <SAchievements id="achievments">
      <div className="container">
        <div className="title-projects">
          <div className="title">
            <h1>Réalisations</h1>
          </div>
          <div className="projects">
            {projects.map((project) => {
              return (
                <div key={project.id} className="one-project">
                  <div className="picture">
                    <img
                      src={project.imgSrc || null}
                      alt={project.imgAlt || null}
                    />
                  </div>

                  <div className="title-content">
                    <h2>{project.title || null}</h2>
                    <p>{project.content || null}</p>
                  </div>

                  <div className="btn">
                    <a
                      href={project.reposFrontend}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button type="button">
                        {project.title}
                        <img
                          src="/img/Achievments/github-svg-icon-3.png"
                          alt="github-icon"
                        />
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SAchievements>
  );
}
