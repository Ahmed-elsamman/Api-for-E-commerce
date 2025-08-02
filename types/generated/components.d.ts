import type { Schema, Struct } from '@strapi/strapi';

export interface ProductQuantityItems extends Struct.ComponentSchema {
  collectionName: 'components_product_quantity_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    total: Schema.Attribute.BigInteger;
  };
}

export interface ProductItems extends Struct.ComponentSchema {
  collectionName: 'components_product_items';
  info: {
    displayName: 'items';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product-quantity.items': ProductQuantityItems;
      'product.items': ProductItems;
    }
  }
}
