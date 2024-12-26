import { use } from "react";

export default function AsyncComponent({
  data,
}: {
  data: Promise<{ [name: string]: string | number }>;
}) {
  const value = use(data);
  return <h3>{`Secondary data: ${value["foo"]}`}</h3>;
}
