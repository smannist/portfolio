import Header from "@/app/components/header/Header";
import CardSlider from "@/app/components/project/CardSlider";
import Footer from "@/app/components/footer/Footer";
import HuggingFaceSpace from "@/app/components/gradio/HuggingFaceSpace";

const Home = () => {
  return (
    <div>
      <Header />
      <CardSlider />
      <HuggingFaceSpace
        spaceUrl="https://huggingface.co/spaces/Smannist/aboutme"
        title='"Try asking the AI: "tell me about yourself"'
      />
      <Footer />
    </div>
  );
};

export default Home;
