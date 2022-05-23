'use strict';

/**
 *  customer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::customer.customer', {
  count(ctx) {
      var { query } = ctx.request
      return strapi.query('api::customer.customer').count(query);
  }
});
