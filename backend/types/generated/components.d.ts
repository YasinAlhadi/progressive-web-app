import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductsProducts extends Schema.Component {
  collectionName: 'components_products_products';
  info: {
    displayName: 'Products';
  };
  attributes: {
    title: Attribute.String;
    images: Attribute.Media<'images', true>;
    price: Attribute.Float & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'products.products': ProductsProducts;
    }
  }
}
