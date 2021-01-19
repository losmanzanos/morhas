import React, { useState } from "react";
import "./Project.css";
import Modal from "../Modal/Modal";

const Project = (props) => {
  console.log(props);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [description, setDescription] = useState("");
  const showModal = (e) => {
    setShow(true);
  };

  const { projects } = props;
  const projectList = projects.map((project) => {
    return (
      <>
        <div className="project-tile mobile">
          <figure>
            <figcaption>
              <h3 className="name">{project.title}</h3>
            </figcaption>
            <img
              src={project.image}
              alt={project.title}
              onClick={(e) => {
                setDescription(project.description);
                setTitle(project.title);
                setPurchasePrice(project.purchasePrice);
                setCurrentValue(project.currentValue);
                showModal();
              }}
            />
          </figure>

          <Modal
            show={show}
            setShow={setShow}
            title={title}
            description={description}
            purchasePrice={purchasePrice}
            currentValue={currentValue}
          />
        </div>

        <div className="desktop">
          <figure>
            <figcaption>
              {/* <h3 className="name">{project.title}</h3> */}
            </figcaption>
            <img
              className="desktop-condo"
              src={project.image}
              alt={project.title}
            />
          </figure>
          <div className="condo-description">
            <h3 className="name" style={{ color: "black" }}>
              {project.title}
            </h3>
            <p>Purchase Price: {project.purchasePrice}</p>
            <p>Current Value: {project.currentValue}</p>
            <p>Description:</p>
          </div>
        </div>
      </>
    );
  });
  return <div className="project-list">{projectList}</div>;
};

export default Project;
