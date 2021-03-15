
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prefectures').del()
    .then(function () {
      // Inserts seed entries
      return knex('prefectures').insert([
        {id: 1, name: 'Tokyo'},
        {id: 2, name: 'Kanagawa'},
        {id: 3, name: 'Nagano'},
        {id: 4, name: 'Izu'}
      ]);
    });
};
