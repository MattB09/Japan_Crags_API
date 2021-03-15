const knex = require('../db/knex');

module.exports = {
	Mutation: {
		//Crag mutations
		AddCrag: async (_, args) => {
			const newCrag = {
				name: args.input.name,
				city: args.input.city,
				prefecture_id: args.input.prefecture.id,
				style_id: args.input.style.id,
				description: args.input.description 
			}
			const result = await knex('crags').insert(newCrag).returning('*');
			return result[0];
		},
		UpdateCrag: async (_, args) => {
			const input = args.input;
      const cragToUpdate = (await knex('crags').where('id', "=", input.id))[0];
      for (const key in input) {
        if (key === 'prefecture') {
					cragToUpdate.prefecture_id = input[key].id;
				}else if (key === 'style') {
					cragToUpdate.style_id = input[key].id;	
				} else if (key !== "id") {
          cragToUpdate[key] = input[key];
				}
      }
			const result = await knex('crags').where('id', "=", input.id)
				.update(cragToUpdate).returning('*');
      return result[0];
		},
		DeleteCrag: async (_, args) => {
			let key;
			if (args.name) key = 'name';
			else key = 'id';
			const result = await knex('crags').where(key, '=', args[key])
				.delete().returning('*')
			return result[0];
		},

		// Prefecture mutations
		AddPrefecture: async(_, args) => {
			const result = await knex('prefectures').insert({
				name: args.input.name
			}).returning('*');
			console.log(result);
			return result[0];
		},
		UpdatePrefecture: async(_, args) => {
			const result = await knex('prefectures').where('id', '=', args.input.id)
				.update({ name: args.input.name }).returning('*');
			return result[0];
		},
		DeletePrefecture: async(_, args) => {
			let key;
			if (args.name) key = 'name';
			else key = 'id';
			const result = await knex('prefectures').where(key, '=', args[key])
				.delete().returning('*')
			return result[0];
		},

		// Style mutations
		AddStyle: async (_, args) => {
			const newStyle = {
				name: args.input.name,
				description: args.input.description || ""
			}
			const result = await knex('styles').insert(newStyle).returning('*');
			return result[0];
		},
		UpdateStyle: async (_, args) => {
			const input = args.input;
      const styleToUpdate = (await knex('styles').where('id', "=", input.id))[0];
      for (const key in input) {
				if (key !== "id") {
						styleToUpdate[key] = input[key];
				}
			}
			const result = await knex('styles').where('id', "=", input.id)
				.update(styleToUpdate).returning('*');
      return result[0];
		},
		DeleteStyle: async (_, args) => {
			let key;
			if (args.name) key = 'name';
			else key = 'id';
			const result = await knex('styles').where(key, '=', args[key])
				.delete().returning('*')
			return result[0];
		}
	},
	Query: {
		crags: async () => {
			const result = await knex.select('*').table('crags');
			return result;
		},
		crag: async (_,args) => {
			let key;
			if (args.name) key = 'name';
			else if (args.id) key = 'id';
			else if (args.city) key = 'city'
			const result = await knex('crags').where(key, '=', args[key]);
			return result[0];
		},
		prefectures: async () => {
			const result = await knex.select().table('prefectures');
			return result;
		},
		prefecture: async (_, args) => {
			let key;
			if (args.id) key = 'id';
			else key = 'name'
			const result = await knex('prefectures').where(key, '=', args[key]);
			return result[0];
		},
		styles: async () => {
			const result = await knex.select().table('styles');
			return result;
		},
		style: async (_, args) => {
			let key;
			if (args.id) key = 'id';
			else key = 'name';
			const result = await knex('styles').where(key, '=', args[key]);
			return result[0];
		}
	},
	Prefecture: {
		crags: async (root) => {
			const result = await knex('crags').where({prefecture_id: root.id}).select('*')
			return result;
		}
	},
	Style: {
		crags: async (root) => {
			const result = await knex('crags').where({style_id: root.id}).select('*')
			return result;
		}
	},
	Crag: {
		prefecture: async (root) => {
			const result = await knex('prefectures').where({id: root.prefecture_id});
			return result[0];
		},
		style: async (root) => {
			const result = await knex('styles').where({id: root.style_id})
			return result[0];
		}
	}
};