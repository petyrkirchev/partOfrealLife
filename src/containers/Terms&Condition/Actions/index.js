import $ from 'jquery';

function getContent(success, fail) {
  $.get({
    url: 'http://localhost/adminsv/footer/views',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      title: 'Terms-&-conditions',
    },
  },
      ).then(
          success,
          fail,
          );
}

module.exports = {
  getContent,
};
