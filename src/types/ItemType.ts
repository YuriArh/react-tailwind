export type Item = {
  _id: string;
  amount: string;
  type: string;
  name: {
    first: string;
    last: string;
  };
  compnay: string;
  email: string;
  phone: string;
  address: string;
};

export type NewItem = {
  _id: string;
  amount: string;
  type: string;
  name: string;
};
