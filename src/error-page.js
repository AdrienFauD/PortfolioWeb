import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {


  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='home'>Home</Link>
    </div>
  );
}