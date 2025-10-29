import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlocksTitle extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-blocks.title': ContentBlocksTitle;
    }
  }
}
