import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlocksCode extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_codes';
  info: {
    displayName: 'code';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    markdown: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

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
      'content-blocks.code': ContentBlocksCode;
      'content-blocks.text': ContentBlocksText;
      'content-blocks.title': ContentBlocksTitle;
    }
  }
}
