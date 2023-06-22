const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: './database/database.db',
	},
	useNullAsDefault: true,
});

knex.schema.hasTable('matches').then((exists) => {
	if (!exists) {
		knex.schema
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
				table.timestamp('createdAt').defaultTo(knex.fn.now());
				table.timestamp('updatedAt').defaultTo(knex.fn.now());
			})
			.then(() => {
				knex.destroy();
			})
			.catch((err) => {
				console.error(err);
			});
	}
});

module.exports = knex;
