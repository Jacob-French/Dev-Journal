import type { Schema, Struct } from '@strapi/strapi';

export interface ContentBlocksCode extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_codes';
  info: {
    displayName: 'code';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.RichText;
    comment: Schema.Attribute.RichText;
    details: Schema.Attribute.RichText;
    gap: Schema.Attribute.Boolean;
    language: Schema.Attribute.Enumeration<
      [
        'bash',
        'css',
        'javascript',
        'json',
        'jsx',
        'markup',
        'php',
        'python',
        'typescript',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksCodeLines extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_code_lines';
  info: {
    displayName: 'code lines';
    icon: 'code';
  };
  attributes: {
    code: Schema.Attribute.RichText;
    gap: Schema.Attribute.Boolean;
  };
}

export interface ContentBlocksImage extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    shadow: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksImageAndText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_image_and_texts';
  info: {
    displayName: 'image and text';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image_left: Schema.Attribute.Boolean;
    text: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ContentBlocksLine extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_lines';
  info: {
    displayName: 'line';
  };
  attributes: {};
}

export interface ContentBlocksText extends Struct.ComponentSchema {
  collectionName: 'components_content_blocks_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    gap: Schema.Attribute.Boolean;
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
      'content-blocks.code-lines': ContentBlocksCodeLines;
      'content-blocks.image': ContentBlocksImage;
      'content-blocks.image-and-text': ContentBlocksImageAndText;
      'content-blocks.line': ContentBlocksLine;
      'content-blocks.text': ContentBlocksText;
      'content-blocks.title': ContentBlocksTitle;
    }
  }
}
