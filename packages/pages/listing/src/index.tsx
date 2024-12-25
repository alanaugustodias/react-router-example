import { Link } from "react-router";

import Button from "@gca-web-app/components/src/Button";

export default function Carros() {
  return (
    <article>
      <Link to="/">Back</Link>
      <h1 className="text-purple">Carros</h1>
      <Button>Click me!</Button>
    </article>
  );
}
