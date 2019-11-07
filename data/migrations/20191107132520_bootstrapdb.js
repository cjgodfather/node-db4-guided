exports.up = function(knex) {
  return knex.schema
    .createTable("species", tbl => {
      // the type of Primay key is:integer without negative values, also called unsigned
      tbl.increments();
      tbl.string("name", 255).notNullable();
    })
    .createTable("animals", tbl => {
      tbl.increments();
      tbl.string("name", 255).notNullable();

      // define Foriegn Key
      tbl
        .integer("species_id")
        .unsigned()
        .references("id")
        .inTable("species")
        .onDelete("RESTRICT") // deleting the record from the primary key table;
        .onUpdate("CASCADE"); // updating the value of the primary key table;
    });
};

exports.down = function(knex) {};
