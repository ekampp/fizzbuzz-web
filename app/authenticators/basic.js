import Basic from 'ember-simple-auth/authenticators/base';

const { RSVP } = Ember;

export default Basic.extend({
  restore(data) {
  },

  authenticate(username, password) {
    $.ajaxSetup({
      headers: {
        'Authorization': 'Basic ' + btoa(username + ':' + password),
      }
    });
    return RSVP.resolve();
  },

  invalidate(data) {
  }
});
