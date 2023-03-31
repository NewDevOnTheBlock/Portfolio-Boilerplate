import React from "react";
import { FaEye } from "react-icons/fa";
import flashcard from "../assets/flashcard-thumbnail.png"
import restaurant from "../assets/restaurant-thumbnail.png"
import movies from "../assets/welovemovies-thumbnail.png"
import recipes from "../assets/recipetracker-thumbnail.png"
import grubdash from "../assets/grubdash.png"
import library from "../assets/local-library.png"

function Projects() {
  return (
    <section className="content-container">
      <main className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-row">
            <div className="project-card">
              <h4>Restaurant Reservation App</h4>
              <div className="img-overlay">
                <img className="project-img" src={restaurant} alt={"project-img"} />
                <a href="https://restaurant-reservations-front.onrender.com">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <h4>Flash-O-Matic Study Application</h4>
              <div className="img-overlay">
                <img className="project-img" src={flashcard} alt={"project-img"} />
                <a href="https://flashcards-frontend-uyqj.onrender.com">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <h4>GrubDash</h4>
              <div className="img-overlay">
                <img className="project-img" src={grubdash} alt={"project-img"} />
                <a href="https://github.com/NewDevOnTheBlock/Grubdash-Application">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
          </div>
          <div className="project-row">
            <div className="project-card">
              <h4>WeLoveMovies</h4>
              <div className="img-overlay">
                <img className="project-img" src={movies} alt={"project-img"} />
                <a href="https://we-love-movies-frontend-qip9.onrender.com">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <h4>Recipe Tracker</h4>
              <div className="img-overlay">
                <img className="project-img" src={recipes} alt="project-img" />
                <a href="https://recipe-tracker-m-front.onrender.com/">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
            <div className="project-card">
              <h4>Local Library</h4>
              <div className="img-overlay">
                <img className="project-img" src={library} alt={"project-img"} />
                <a href="https://github.com/NewDevOnTheBlock/Local-Library-Application">
                  <FaEye className="icon-xlarge" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Projects;
