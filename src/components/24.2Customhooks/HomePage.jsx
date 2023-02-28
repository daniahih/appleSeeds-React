import { useFetchData } from "./UseFetchFunction";
export default function HomePage() {
  const obj = useFetchData("https://63f862ec6978b1f91058264e.mockapi.io/shoes");
  console.log(obj);
  return (
    <>
      <h1>hello</h1>
      {obj.isloaded ? (
        obj.data.map((e) => (
          <>
            <h1>{e.name}</h1>
            <img src={e.img} style={{ width: "100px", height: "100px" }}></img>
            <span>{e.price}</span>
          </>
        ))
      ) : (
        <>error</>
      )}
    </>
  );
}
