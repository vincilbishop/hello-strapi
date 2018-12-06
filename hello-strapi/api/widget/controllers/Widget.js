'use strict';

/**
 * Widget.js controller
 *
 * @description: A set of functions called "actions" for managing `Widget`.
 */

module.exports = {

  /**
   * Retrieve widget records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.widget.search(ctx.query);
    } else {
      return strapi.services.widget.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a widget record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.widget.fetch(ctx.params);
  },

  /**
   * Count widget records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.widget.count(ctx.query);
  },

  /**
   * Create a/an widget record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.widget.add(ctx.request.body);
  },

  /**
   * Update a/an widget record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.widget.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an widget record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.widget.remove(ctx.params);
  },

  /**
   * Add relation to a/an widget record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.widget.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an widget record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.widget.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an widget record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.widget.removeRelation(ctx.params, ctx.request.body);
  }
};
