import { CategoryList } from "./../../components/categoryList/CategoryList";
import categories from "./../../categories.json"

const Home = () => {
  return (
  <CategoryList categories={categories}/>
  );
};

export default Home;