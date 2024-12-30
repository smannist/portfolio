import { Container } from "@mui/material";

import Header from "@/app/components/header/Header";
import ProjectCard from "@/app/components/project/ProjectCard";
import Footer from "@/app/components/footer/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <ProjectCard />
      <Footer />
    </Container>
  );
};

export default Home;
