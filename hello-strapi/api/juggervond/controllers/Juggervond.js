'use strict';

/**
 * Juggervond.js controller
 *
 * @description: A set of functions called "actions" for managing `Juggervond`.
 */

module.exports = {

  /**
   * Retrieve juggervond records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.juggervond.search(ctx.query);
    } else {
      return strapi.services.juggervond.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a juggervond record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.juggervond.fetch(ctx.params);
  },

  /**
   * Count juggervond records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.juggervond.count(ctx.query);
  },

  /**
   * Create a/an juggervond record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.juggervond.add(ctx.request.body);
  },

  /**
   * Update a/an juggervond record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.juggervond.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an juggervond record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.juggervond.remove(ctx.params);
  },

  /**
   * Add relation to a/an juggervond record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.juggervond.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an juggervond record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.juggervond.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an juggervond record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.juggervond.removeRelation(ctx.params, ctx.request.body);
  }
};
