import { CategoryList } from "./components/categoryList/CategoryList";
import categories from "./categories.json"
const App = () => {
  return (
  <CategoryList categories={categories}/>
  );
};

export default App;
