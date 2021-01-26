exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 0,
          email: 'admin@admin.com',
          password:
            '$2a$10$5H3tdCQ8GhpMNZjlypCsluq/pvCnpy2pn8CMXcYT7SVJI.PV38PLa',
          role: 'admin',
        },
        {
          id: 1,
          email: 'bruno@admin.com',
          password:
            '$2a$10$Dv9KPUEZRGaaZMo8n3Wv.eUJteEImsD6as700Rm4RxpcvCO5qBoUW',
          role: 'admin',
        },
        {
          id: 2,
          email: 'headmaster@headmaster.com',
          password:
            '$2a$10$PclemzjDF5R9Lme2HZwFa.VTbATnrwTCyaC64At7VGw9NVoHmdCHK',
          role: 'headmaster',
        },
        {
          id: 3,
          email: 'varun@vbb.com',
          password:
            '$2a$10$hWx57EXEZZkcMlJZRfmq.O0rO2khV77shR4vsWm4Krxd/BC.8t.x2',
          role: 'headmaster',
        },
        {
          id: 4,
          email: 'Isadore37@hotmail.com',
          password:
            '$2a$10$SNtzdqT6q.NibxwwzLGpaua8lPlUQcfuPhUv/W16tVqzSkCMq87sS',
          role: 'headmaster',
        },
        {
          id: 5,
          email: 'Reid.Gorczany@hotmail.com',
          password:
            '$2a$10$sDsbzIsLAoALnBxYLzt4j.FZE989eMs.jbt.j2q3LcdI3sTb0Mdmi',
          role: 'headmaster',
        },
        {
          id: 6,
          email: 'mentees@mentees.com',
          password:
            '$2a$10$p7mhS4kr0jZXCGLwIBQvbubekHa2dKlbIRZBqIkMDMj.yOzIjuW2u',
          role: 'mentee',
        },
        {
          id: 7,
          email: 'teacher@teacher.com',
          password:
            '$2a$10$ZxTnHLrPE7EaE1eTeR8/7.ebCHuQDonysneBqACJLGZLSx9Kk9bKS',
          role: 'teacher',
        },
        {
          id: 8,
          email: 'guest@guest.com',
          password:
            '$2a$10$XZsiv936sgzaqA2xas63pug0fsUr3.t8/NEwOekLKwKrX44ph4ICO',
          role: 'guest',
        },
        {
          id: 9,
          email: 'mentor@mentor.com',
          password:
            '$2a$10$cPhoz4m8iWvtzI.ji4oPOeSAn7qWBiChM4AjhbdSQ7jiZj6sB.JZG',
          role: 'mentor',
        },
      ]);
    });
};
