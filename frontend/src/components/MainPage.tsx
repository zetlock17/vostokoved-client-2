import AdvantagesBlock from "./AdvantagesBlock"
import GoalAudience from "./GoalAudience"
import Header from "./Header"
import HeroBlock from "./HeroBlock"
import PossibilitiesBlock from "./PossibilitiesBlock"
import EndBlock from "./EndBlock"

const MainPage = () => {
  return (
    <div>
      <Header />
      <HeroBlock />
      <PossibilitiesBlock />
      <GoalAudience />
      <AdvantagesBlock />
      <EndBlock />
    </div>
  )
}

export default MainPage