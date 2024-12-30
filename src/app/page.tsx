import { NextPage } from "next";

import Header from "@/app/components/header/Header";
import ProjectCard from "@/app/components/project/Project";
import Footer from "@/app/components/footer/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <ProjectCard />
      <Footer />
    </>
  );
};

export default Home;
