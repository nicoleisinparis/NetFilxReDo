import data from "../data.json";
const Movie = () => {
  return (
    <>
      {data.map((elem) => {
        return (
          <div>
            {elem.images.map((url) => {
              return <img key={url} src={url} />;
            })}
          </div>
        );
      })}
    </>
  );
};

export default Movie;
