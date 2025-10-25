import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksEvent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_events';
  info: {
    displayName: 'event';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLogin extends Struct.ComponentSchema {
  collectionName: 'components_blocks_logins';
  info: {
    displayName: 'login';
  };
  attributes: {
    email: Schema.Attribute.String;
    password: Schema.Attribute.Password;
    username: Schema.Attribute.String;
  };
}

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.event': BlocksEvent;
      'blocks.login': BlocksLogin;
      'blocks.paragraph': BlocksParagraph;
    }
  }
}
