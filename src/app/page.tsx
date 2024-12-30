import { Container } from "@mui/material";

import Header from "@/app/components/header/Header";
import CardSlider from "@/app/components/project/CardSlider";
import Footer from "@/app/components/footer/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <CardSlider />
      <Footer />
    </Container>
  );
};

export default Home;
