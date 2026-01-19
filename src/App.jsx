import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const uniqueCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(uniqueCategories);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
