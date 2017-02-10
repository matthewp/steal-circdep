import { sharedFunc } from './cirdep';
import Component from 'can-component';
import Map from 'can-map';
import template from './secondary.stache';

var viewModel = Map.extend({
  sharedFunc/*() {
    return "this is not a shared function"
  }*/
});


export default Component.extend({
  tag: 'secondary-component',
  viewModel,
  template
});
