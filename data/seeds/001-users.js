
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
  .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 0,
          email: 'admin@admin.com',
          password: 'password',
          role: 'admin'
        },
        {
          id: 1,
          email: 'bruno@email.com',
          password: 'password',
          role: 'admin'
        },
        {
          id: 2,
          email: 'headmaster@headmaster.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 3,
          email: 'varun@vbb.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 4,
          email: 'Isadore37@hotmail.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 5,
          email: 'Reid.Gorczany@hotmail.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 6,
          email: 'mentees@mentees.com',
          password: 'password',
          role: 'mentee'
        },
        {
          id: 7,
          email: 'Pearlie.Dibbert@hotmail.com',
          password: 'password',
          role: 'mentee'
        }
      ]);
    });
};
