import QUnit from 'steal-qunit';
import { ViewModel } from './cirdep';

// ViewModel unit tests
QUnit.module('steal-cirdep/components/cirdep');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the cirdep component');
});
