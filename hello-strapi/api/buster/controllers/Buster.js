'use strict';

/**
 * Buster.js controller
 *
 * @description: A set of functions called "actions" for managing `Buster`.
 */

module.exports = {

  /**
   * Retrieve buster records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.buster.search(ctx.query);
    } else {
      return strapi.services.buster.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a buster record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.buster.fetch(ctx.params);
  },

  /**
   * Count buster records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.buster.count(ctx.query);
  },

  /**
   * Create a/an buster record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.buster.add(ctx.request.body);
  },

  /**
   * Update a/an buster record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.buster.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an buster record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.buster.remove(ctx.params);
  },

  /**
   * Add relation to a/an buster record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.buster.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an buster record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.buster.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an buster record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.buster.removeRelation(ctx.params, ctx.request.body);
  }
};
