
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
          id: 2,
          email: 'bruno@email.com',
          password: 'password',
          role: 'admin'
        },
        {
          id: 3,
          email: 'Keagan.Thiel@yahoo.com',
          password: 'password',
          role: 'admin'
        },
        {
          id: 4,
          email: 'headmaster@headmaster.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 5,
          email: 'varun@vbb.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 6,
          email: 'Isadore37@hotmail.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 7,
          email: 'Reid.Gorczany@hotmail.com',
          password: 'password',
          role: 'headmaster'
        },
        {
          id: 8,
          email: 'mentees@mentees.com',
          password: 'password',
          role: 'mentee'
        },
        {
          id: 9,
          email: 'Pearlie.Dibbert@hotmail.com',
          password: 'password',
          role: 'mentee'
        }
      ]);
    });
};
