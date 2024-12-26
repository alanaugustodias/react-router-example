export type Data = { [name: string]: string | number };

export type LoaderData = {
  primaryData: Data;
  secondaryData: Promise<Data>;
};
