import BodyContent from "../components/home/BodyContent";
import Header from "../components/home/Header";
import Nav from "../components/Nav";
import SkillsIcons from "../components/SkillsIcons";

function Home() {
  return (
    <div>
      <Nav/>
      <Header />
      <SkillsIcons />
      <BodyContent />
    </div>
  );
}

export default Home;
