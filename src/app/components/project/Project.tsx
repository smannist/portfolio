"use client";

import { useEffect, useState } from "react";

import { NextComponentType } from "next";
import Image from "next/image";

import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import StarIcon from "@mui/icons-material/Star";

import styles from "./Project.module.css";
import projectData from "../../data.json";

// TODO
// Figure out best location for fetching + make projects component
// for displaying multiple projects
const ProjectCard: NextComponentType = () => {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${new URL(
            projectData[0].repository
          ).pathname.substring(1)}`
        );
        if (!response.ok) throw new Error("Failed to fetch repository data");
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <div className="mt-20">
      <p className={`${styles.text} font-noto mt-3`}>My projects</p>
      {projectData.map((project, index) => (
        <Card key={index} sx={{ width: 320, position: "relative" }}>
          <div>
            <Typography level="title-lg">{project.name}</Typography>
            <Typography level="body-sm">{project.project_date}</Typography>
          </div>
          <AspectRatio minHeight="120px" maxHeight="200px">
            <Image
              src={project.image}
              width={500}
              height={500}
              alt="Project image"
            />
          </AspectRatio>
          <CardContent orientation="horizontal">
            <div
              style={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <StarIcon sx={{ color: "gold", marginRight: "4px" }} />
              <Typography level="body-sm" sx={{ fontWeight: "bold" }}>
                {stars !== null ? stars : "N/A"}
              </Typography>
            </div>
            <Button
              component="a"
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              size="md"
              aria-label="Explore Repository"
              sx={{
                ml: "auto",
                alignSelf: "center",
                fontWeight: 600,
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333"
                }
              }}
            >
              Repository
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectCard;
