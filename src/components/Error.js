import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1> My Error page </h1>
      <h1> {error.status} </h1>
      <h1> {error.message} </h1>
    </div>
  );
};

export default Error;
