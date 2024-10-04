export type ItemsData = {
  version: string;
  data: {
    [key: string]: Items;
  };
};
export type Items = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  image: {
    full: string;
  };
};
