import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  actions: {
    favorite(number) {
      console.log('favoring', number);
    },

    unfavorite(number) {
      console.log('unfavoring', number);
    },
  }
});
