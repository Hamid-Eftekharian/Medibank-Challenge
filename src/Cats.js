import { orderBy } from "lodash";
export function Cats({ cats }) {
  // console.log(cats);

  const orderedCats = orderBy(cats, ["name"]);
  return orderedCats.map((cat) => <h3 key={cat.name}>Pet Name: {cat.name}</h3>);
}
