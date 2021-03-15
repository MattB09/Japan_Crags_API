
exports.up = function(knex) {
  return knex.schema.createTable('prefectures', (table)=> {
      table.increments();
      table.string('name').notNullable();
  })
  .createTable('styles', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('description', 2000)
  })
  .createTable('crags', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('city').notNullable();
    // prefecture - FK
    table.integer('prefecture_id').references('id').inTable('prefectures').notNullable();
    // style - FK
    table.integer('style_id').references('id').inTable('styles').notNullable();
    table.string('description', 2000);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('crags').dropTable('styles').dropTable('prefectures');
};
