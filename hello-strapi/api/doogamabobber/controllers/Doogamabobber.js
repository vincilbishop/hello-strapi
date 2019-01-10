'use strict';

/**
 * Doogamabobber.js controller
 *
 * @description: A set of functions called "actions" for managing `Doogamabobber`.
 */

module.exports = {

  /**
   * Retrieve doogamabobber records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.doogamabobber.search(ctx.query);
    } else {
      return strapi.services.doogamabobber.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a doogamabobber record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.doogamabobber.fetch(ctx.params);
  },

  /**
   * Count doogamabobber records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.doogamabobber.count(ctx.query);
  },

  /**
   * Create a/an doogamabobber record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.doogamabobber.add(ctx.request.body);
  },

  /**
   * Update a/an doogamabobber record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.doogamabobber.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an doogamabobber record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.doogamabobber.remove(ctx.params);
  },

  /**
   * Add relation to a/an doogamabobber record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.doogamabobber.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an doogamabobber record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.doogamabobber.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an doogamabobber record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.doogamabobber.removeRelation(ctx.params, ctx.request.body);
  }
};
