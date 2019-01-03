'use strict';

/**
 * Excelsior.js controller
 *
 * @description: A set of functions called "actions" for managing `Excelsior`.
 */

module.exports = {

  /**
   * Retrieve excelsior records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.excelsior.search(ctx.query);
    } else {
      return strapi.services.excelsior.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a excelsior record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.excelsior.fetch(ctx.params);
  },

  /**
   * Count excelsior records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.excelsior.count(ctx.query);
  },

  /**
   * Create a/an excelsior record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.excelsior.add(ctx.request.body);
  },

  /**
   * Update a/an excelsior record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.excelsior.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an excelsior record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.excelsior.remove(ctx.params);
  },

  /**
   * Add relation to a/an excelsior record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.excelsior.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an excelsior record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.excelsior.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an excelsior record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.excelsior.removeRelation(ctx.params, ctx.request.body);
  }
};
