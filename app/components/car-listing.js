import Component from '@ember/component';

export default Component.extend({
  //Here, we are defining the isWide boolean that will be utilized in .hbs to toggle the size of the image
  isWide: false,
  //this action will be triggered in our .hbs file. Refer there to see
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
