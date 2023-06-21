const knex = require('knex')({
	client: 'better-sqlite3',
	connection: {
		filename: './database.sqlite',
	},
});

knex.schema
	.createTableIfNotExists('matchs', function (table) {
		table.increments('id').primary();
		table.string('teamA');
		table.string('teamB');
		table.integer('pointsA');
		table.integer('pointsB');
		table.string('tournament');
		table.string('place');
		table.string('modality');
		table.timestamp('created_at').defaultTo(knex.fn.now());
		table.timestamp('updated_at').defaultTo(knex.fn.now());
	})
	.then(() => {
		knex.destroy();
	})
	.catch((err) => {
		console.error(err);
	});

module.exports = knex;
