import { module, test } from 'qunit';
import { setupRenderingTest, setupApplicationTest } from 'ember-qunit';
import { render, click, currentURL, visit } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import setupMirage from 'ember-cli-mirage/addon-test-support/setup-mirage';

module('Integration | Component | car-listing', function(hooks) {
  setupRenderingTest(hooks);

  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{car-listing}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#car-listing}}
        template block text
      {{/car-listing}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
