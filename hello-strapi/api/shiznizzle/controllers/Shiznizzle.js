'use strict';

/**
 * Shiznizzle.js controller
 *
 * @description: A set of functions called "actions" for managing `Shiznizzle`.
 */

module.exports = {

  /**
   * Retrieve shiznizzle records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.shiznizzle.search(ctx.query);
    } else {
      return strapi.services.shiznizzle.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a shiznizzle record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.shiznizzle.fetch(ctx.params);
  },

  /**
   * Count shiznizzle records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.shiznizzle.count(ctx.query);
  },

  /**
   * Create a/an shiznizzle record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.shiznizzle.add(ctx.request.body);
  },

  /**
   * Update a/an shiznizzle record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.shiznizzle.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an shiznizzle record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.shiznizzle.remove(ctx.params);
  },

  /**
   * Add relation to a/an shiznizzle record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.shiznizzle.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an shiznizzle record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.shiznizzle.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an shiznizzle record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.shiznizzle.removeRelation(ctx.params, ctx.request.body);
  }
};
