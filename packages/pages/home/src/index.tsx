import { Link } from "react-router";

export default function Home() {
  return (
    <article>
      <h1>Home page</h1>
      <ul>
        <li><Link to="/carros">Carros</Link></li>
      </ul>
    </article>
  );
}
