'use strict';

/**
 * Mascerund.js controller
 *
 * @description: A set of functions called "actions" for managing `Mascerund`.
 */

module.exports = {

  /**
   * Retrieve mascerund records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.mascerund.search(ctx.query);
    } else {
      return strapi.services.mascerund.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a mascerund record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.mascerund.fetch(ctx.params);
  },

  /**
   * Count mascerund records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.mascerund.count(ctx.query);
  },

  /**
   * Create a/an mascerund record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.mascerund.add(ctx.request.body);
  },

  /**
   * Update a/an mascerund record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.mascerund.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an mascerund record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.mascerund.remove(ctx.params);
  },

  /**
   * Add relation to a/an mascerund record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.mascerund.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an mascerund record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.mascerund.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an mascerund record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.mascerund.removeRelation(ctx.params, ctx.request.body);
  }
};
