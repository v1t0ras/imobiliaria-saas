export type PropertySpec = {
  label: string;
  value: string;
};

export type PropertyCard = {
  id: string;
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  price: string;
  specs: PropertySpec[];
};
