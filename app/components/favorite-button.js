import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),

  tagName: 'span',

  actions: {
    favorite(number) {
      console.log('favoring', number);
      this.get('store').createRecord('favorite', {
        number: number,
      }).save();
      this.get('store').findRecord('number', number).then((number) => {
        number.set('favorite', true);
      })
    },

    unfavorite(number) {
      console.log('unfavoring', number);
      this.get('store').findRecord('favorite', number).then((fav) => {
        if(fav.destroyRecord()) {
          this.get('store').findRecord('number', number).then((number) => {
            number.set('favorite', false);
          });
        }
      });
    },
  }
});
