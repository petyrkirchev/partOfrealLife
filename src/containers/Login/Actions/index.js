import $ from 'jquery';

function loginUser(data, success, fail) {
  $.post('http://localhost/auth/login',
        { user: data }).then(success, fail);
}

module.exports = {
  loginUser,
};
