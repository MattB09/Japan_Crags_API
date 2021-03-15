
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('styles').del()
    .then(function () {
      // Inserts seed entries
      return knex('styles').insert([
        {id: 1, name: 'sport', description: 'Sport climbing refers to when the rock has permanent anchors bolted into it for protection. The climber, attached to a rope, clips their quick draws onto the anchor and then clips their rope into the quickdraw.'},
        {id: 2, name: 'bouldering', description: 'Bouldering refers to climbing done on small rock formations without the use of ropes. The climbers will typically place crash pads underneath the climb to soften their fall.'},
        {id: 3, name: 'trad', description: 'Trad climbing refers to when the climber places their own protection to the rock and remove it when complete. The climber places the gear as they ascend, then clips their quickdraw into the gear, and then clips their rope into the quickdraw.'}
      ]);
    });
};
