import {moduleForModel, test} from 'ember-qunit';

moduleForModel('wordpress', 'Unit | Serializer | wordpress', {
	// Specify the other units that are required for this test.
	needs: ['serializer:wordpress']
});

// Replace this with your real tests.
test('it serializes records', function (assert) {
	let record = this.subject({title: 'what'});
	let serializedRecord = record.serialize();
	assert.ok(serializedRecord);
});
