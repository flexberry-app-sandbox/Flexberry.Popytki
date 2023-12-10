import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-popytki-рекомендац', 'Unit | Serializer | i-i-s-popytki-рекомендац', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-popytki-рекомендац',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-popytki-возраст',
    'transform:i-i-s-popytki-категор-сотрудн',
    'transform:i-i-s-popytki-стаж',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
