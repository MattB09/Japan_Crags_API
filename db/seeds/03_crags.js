
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('crags').del()
    .then(function () {
      // Inserts seed entries
      return knex('crags').insert([
        {id: 1, name: 'Tennou Iwa', city: 'Akiruno-shi', prefecture_id: 1, style_id: 1, description: 'Roughly 40 routes ranging from 5.7 to 5.12. Easy access by bus from Musashi-Itsukaichi station. Single pitch routes. '},
        {id: 2, name: 'Maku Iwa', city: 'Yugawara', prefecture_id: 2, style_id: 1, description: 'Roughly 80 routes ranging from 5.8 to 5.13. Accessible by bus from Yugawara station. Single pitch routes.'},
        {id: 3, name: 'Ogawayama Bouldering', city: 'Kawakamimura', prefecture_id: 3, style_id: 2, description: 'Huge bouldering area with a nice campground. Also has multipitch sport climbing in the same area (see Ogawayama Sport Climbing). Hundreds of bouldering routes available. Best to go by car.'}
      ]);
    });
};
