"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Typography from "@mui/material/Typography";

import ProjectCard from "./ProjectCard";

import projectData from "../../data.json";

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div
      style={{
        maxWidth: "700px"
      }}
    >
      <Typography
        variant="h6"
        style={{ marginBottom: "16px", marginTop: "40px" }}
      >
        Some projects I have worked on
      </Typography>
      <Slider {...settings}>
        {projectData.map((project, index) => (
          <div key={index}>
            <ProjectCard project={project} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
