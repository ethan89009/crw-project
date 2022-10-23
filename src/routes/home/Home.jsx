import categories from "./../../categories.json"
import { Directory } from "../../components/directory/Directory";

const Home = () => {
  return (
  <Directory categories={categories}/>
  );
};

export default Home;