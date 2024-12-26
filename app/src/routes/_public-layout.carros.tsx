import Listing from "@gca-web-app/listing/src";
export { default as loader } from "@gca-web-app/listing/src/loader";

import type { Route } from "./+types/_public-layout.carros";

const Carros = (props: Route.ComponentProps) => (
  <Listing {...props.loaderData} />
);

export default Carros;
