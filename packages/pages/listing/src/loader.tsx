import type { Route } from "./routes/+types/_public-layout.carros";
import type { Data } from "./types";

export default async function loader(props: Route.LoaderArgs) {
  console.log("### SERVER ###", props.params);

  const primaryData: Data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ test: 123 });
    }, 200);
  });

  const secondaryData: Promise<Data> = new Promise((resolve) => {
    setTimeout(() => {
      resolve({ foo: "bar" });
    }, 5000);
  });

  return { primaryData, secondaryData };
}
