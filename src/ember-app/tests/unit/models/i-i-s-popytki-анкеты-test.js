import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-popytki-анкеты', 'Unit | Model | i-i-s-popytki-анкеты', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-popytki-анкеты',
    'model:i-i-s-popytki-причин-увольн',
    'model:i-i-s-popytki-рекомендац',
    'model:i-i-s-popytki-специалист',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
