import BodyContent from "../components/BodyContent";
import Header from "../components/Header";
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
