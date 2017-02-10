import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('steal-cirdep functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('steal-cirdep main page shows up', function() {
  F('title').text('steal-cirdep', 'Title is set');
});
