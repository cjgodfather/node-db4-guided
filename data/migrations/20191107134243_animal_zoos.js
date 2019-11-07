exports.up = function(knex) {
  return knex.schema
    .createTable("zoos", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("animals_zoos", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();

      tbl
        .integer("zoos_id")
        .unsigned()
        .references("id")
        .inTable("zoos")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("animal_id")
        .unsigned()
        .references("id")
        .inTable("animals")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {};
