'use strict';

/**
 * Thingamajig.js controller
 *
 * @description: A set of functions called "actions" for managing `Thingamajig`.
 */

module.exports = {

  /**
   * Retrieve thingamajig records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.thingamajig.search(ctx.query);
    } else {
      return strapi.services.thingamajig.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a thingamajig record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.thingamajig.fetch(ctx.params);
  },

  /**
   * Count thingamajig records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.thingamajig.count(ctx.query);
  },

  /**
   * Create a/an thingamajig record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.thingamajig.add(ctx.request.body);
  },

  /**
   * Update a/an thingamajig record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.thingamajig.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an thingamajig record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.thingamajig.remove(ctx.params);
  },

  /**
   * Add relation to a/an thingamajig record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.thingamajig.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an thingamajig record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.thingamajig.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an thingamajig record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.thingamajig.removeRelation(ctx.params, ctx.request.body);
  }
};
