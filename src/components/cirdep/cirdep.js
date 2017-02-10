import Component from 'can-component';
import Map from 'can-map';
import 'can-map-define';
import './cirdep.less';
import template from './cirdep.stache';
import './secondary.js';

export const sharedFunc = function() {
  return "This is the shared function being called.";
}

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the cirdep component'
    }
  },
  sharedFunc
});

export default Component.extend({
  tag: 'cirdep',
  viewModel: ViewModel,
  template
});
