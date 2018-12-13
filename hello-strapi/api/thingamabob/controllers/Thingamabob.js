'use strict';

/**
 * Thingamabob.js controller
 *
 * @description: A set of functions called "actions" for managing `Thingamabob`.
 */

module.exports = {

  /**
   * Retrieve thingamabob records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.thingamabob.search(ctx.query);
    } else {
      return strapi.services.thingamabob.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a thingamabob record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.thingamabob.fetch(ctx.params);
  },

  /**
   * Count thingamabob records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.thingamabob.count(ctx.query);
  },

  /**
   * Create a/an thingamabob record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.thingamabob.add(ctx.request.body);
  },

  /**
   * Update a/an thingamabob record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.thingamabob.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an thingamabob record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.thingamabob.remove(ctx.params);
  },

  /**
   * Add relation to a/an thingamabob record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.thingamabob.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an thingamabob record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.thingamabob.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an thingamabob record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.thingamabob.removeRelation(ctx.params, ctx.request.body);
  }
};
