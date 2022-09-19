import { orderBy } from "lodash";
export function Cats({ cats }) {
  const orderedCats = orderBy(cats, ["name"]);
  return orderedCats.map((cat, index) => (
    <h3 key={cat.name + index}>Pet Name: {cat.name}</h3>
  ));
}
