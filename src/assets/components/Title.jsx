import data from "../data.json";

const Title = () => {
  return (
    <>
      {data.map((elem) => {
        return <h2> {elem.category}</h2>;
      })}
    </>
  );
};
export default Title;
