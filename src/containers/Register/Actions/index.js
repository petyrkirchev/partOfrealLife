import $ from 'jquery';

function createUser(newUser, success, fail) {
  $.post('http://localhost/db/users/register',
    { user: newUser }).then(success, fail);
}

module.exports = {
  createUser,
};
