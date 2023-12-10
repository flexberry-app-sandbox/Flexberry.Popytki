import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-popytki-анкеты-l');
  this.route('i-i-s-popytki-анкеты-e',
  { path: 'i-i-s-popytki-анкеты-e/:id' });
  this.route('i-i-s-popytki-анкеты-e.new',
  { path: 'i-i-s-popytki-анкеты-e/new' });
  this.route('i-i-s-popytki-причин-увольн-l');
  this.route('i-i-s-popytki-причин-увольн-e',
  { path: 'i-i-s-popytki-причин-увольн-e/:id' });
  this.route('i-i-s-popytki-причин-увольн-e.new',
  { path: 'i-i-s-popytki-причин-увольн-e/new' });
  this.route('i-i-s-popytki-специалист-l');
  this.route('i-i-s-popytki-специалист-e',
  { path: 'i-i-s-popytki-специалист-e/:id' });
  this.route('i-i-s-popytki-специалист-e.new',
  { path: 'i-i-s-popytki-специалист-e/new' });
});

export default Router;
