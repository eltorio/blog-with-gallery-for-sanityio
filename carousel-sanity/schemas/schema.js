import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import category from './category';
import post from './post';
import blockContent from './blockContent';
import author from './author';
import gallery from './gallery.js';

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    post,
    blockContent,
    author,
    category,
    gallery
  ]),
})
