'use strict';
/**
 * 分页排序中间件
 */
module.exports = async (ctx, next) => {
  const { query } = ctx.request;

  ctx.validate({
    pageField: { type: 'string', required: false },
    pageSort: { type: 'enum', values: [ 'ASC', 'DESC' ], required: false },
    size: { type: 'string', format: /\d+/, required: false },
    page: { type: 'string', format: /\d+/, required: false },
  }, query);

  const {
    pageField = 'updated_at',
    pageSort = 'DESC',
  } = query;

  const pageSize = Math.floor(query.size) || 20;
  const pageIndex = Math.floor(query.page) || 1;

  ctx.page = { pageField, pageSort, pageSize, pageIndex };

  return next();
};
