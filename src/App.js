import { Banner } from "./components/Banner";
import { Basket } from "./components/Basket";
import { Items } from "./components/Items";

const items = [
  {
    id: 1,
    label: "Item1",
    price: 12.5,
  },
  {
    id: 2,
    label: "Item2",
    price: 14.5,
  },
  {
    id: 3,
    label: "Item3",
    price: 16.5,
  },
];

export const App = () => {
  return (
    <div className="App">
      <Banner />
      <Basket />
      <Items items={items} />
    </div>
  );
};
