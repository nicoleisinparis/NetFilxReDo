import data from "../data.json";
const Content = () => {
  return (
    <div>
      {data.map((elem) => {
        return (
          <div className="box">
            <h2>{elem.category}</h2>
            <div className="scroll">
              {elem.images.map((url) => {
                return <img key={url} src={url} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
