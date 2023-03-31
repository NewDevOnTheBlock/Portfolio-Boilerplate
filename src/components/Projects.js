import React from "react";
import { FaEye } from "react-icons/fa";

function Projects() {
    return (
        <section className="content-container">
            <main className="projects-container">
            <h2>Projects</h2>
                <div className="projects-grid">
                    <div className="project-row">
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>Restaurant Reservation App</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>Flash-O-Matic Study Application</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>GrubDash</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>WeLoveMovies</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>Recipe Tracker</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                        <div className="project-card">
                            <img className="project-img" src="#" alt="project-img" />
                            <h4>Local Library</h4>
                            <a href="#"><FaEye className="icon-xlarge"/></a>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Projects;