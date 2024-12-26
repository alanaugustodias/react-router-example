import Button from "@gca-web-app/components/src/Button";
import { Suspense, use } from "react";

import type { Data, LoaderData } from "./types";

function AsyncComponent({ data }: { data: Promise<Data> }) {
  const value = use(data);
  return <h3>{`Secondary data: ${value["foo"]}`}</h3>;
}

export default function Carros({ primaryData, secondaryData }: LoaderData) {
  return (
    <article>
      <h1 className="text-purple">Carros</h1>
      <p>{primaryData.test}</p>
      <Button>Click me!</Button>

      <Suspense fallback={<div>Loading...</div>}>
        <AsyncComponent data={secondaryData} />
      </Suspense>
    </article>
  );
}
