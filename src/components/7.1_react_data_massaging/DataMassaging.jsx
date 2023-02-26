// 1. Export the data array to the relevant component.
import data from "./data";
console.log(data);
export default function DataMassaging() {
  return (
    <>
      {data.filter((e) => e.birthday > 1990)}

      <h1> hello </h1>
    </>
  );
}
// Create a function that returns an array of all the
// names from the object. //done

{
  /* {data.map((e) => {
        return (
          <ul>
            <li>{e.name}</li>
          </ul>
        );
    })} */
}
// Create a function that returns all the objects that are
// born before 1990.
{
  data.filter((e) => e.birthday > 1990);
}
