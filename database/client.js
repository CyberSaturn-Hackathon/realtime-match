import knex from 'knex';

const client = knex({
  client: 'sqlite3',
  connection: {
    filename: './database/database.db',
  },
  useNullAsDefault: true,
});

client.schema.hasTable('matches').then((exists) => {
  if (!exists) {
    client.schema
      .createTable('matches', (table) => {
        table.increments('id').primary();
        table.string('teamA');
        table.string('teamB');
        table.integer('pointsA').defaultTo(0);
        table.integer('pointsB').defaultTo(0);
        table.string('tournament');
        table.string('place');
        table.string('modality');
        table.boolean('isActive').defaultTo(true);
        table.timestamp('createdAt').defaultTo(client.fn.now());
        table.timestamp('updatedAt').defaultTo(client.fn.now());
      })
      .then(() => {
        client.destroy();
      })
      .catch((err) => {
        console.error(err);
      });
  }
});

export { client };
