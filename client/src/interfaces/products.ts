export default interface Product {
  id: number;
  attributes: {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    image: {
      data: [];
      id: number;
      attributes: {
        url: string;
      };
    };
  };
}
