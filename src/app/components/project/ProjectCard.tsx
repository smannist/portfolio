"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Card, CardContent, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";

import projectData from "../../data.json";

const ProjectCard = () => {
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
    <div className="mt-10">
      <Typography variant="h6">Projects</Typography>
      <Grid container spacing={2} component="div" className="mt-5">
        {projectData.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6 }} key={index}>
            <Card
              style={{
                position: "relative",
                padding: "16px",
                boxShadow:
                  "0px -2px 10px rgba(0, 0, 0, 0.05), 0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0px 6px 15px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0px 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <CardContent>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px"
                    }}
                  >
                    <Typography variant="h6">{project.name}</Typography>
                    <StarIcon style={{ color: "gold" }} />
                    <Typography variant="body2" style={{ fontWeight: "bold" }}>
                      {stars !== null ? stars : "N/A"}
                    </Typography>
                  </div>
                  <Typography variant="body2">
                    {project.project_date}
                  </Typography>
                </div>
                <Image
                  src={project.image}
                  width={500}
                  height={500}
                  alt="Project image"
                  style={{ marginTop: "16px", marginBottom: "20px" }}
                />
                <Button
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    fontWeight: 600,
                    backgroundColor: "black",
                    color: "white"
                  }}
                >
                  Repository
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectCard;
