import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISPopytkiАнкетыLForm from './forms/i-i-s-popytki-анкеты-l';
import IISPopytkiПричинУвольнLForm from './forms/i-i-s-popytki-причин-увольн-l';
import IISPopytkiСпециалистLForm from './forms/i-i-s-popytki-специалист-l';
import IISPopytkiАнкетыEForm from './forms/i-i-s-popytki-анкеты-e';
import IISPopytkiПричинУвольнEForm from './forms/i-i-s-popytki-причин-увольн-e';
import IISPopytkiСпециалистEForm from './forms/i-i-s-popytki-специалист-e';
import IISPopytkiАнкетыModel from './models/i-i-s-popytki-анкеты';
import IISPopytkiПричинУвольнModel from './models/i-i-s-popytki-причин-увольн';
import IISPopytkiРекомендацModel from './models/i-i-s-popytki-рекомендац';
import IISPopytkiСпециалистModel from './models/i-i-s-popytki-специалист';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-popytki-анкеты': IISPopytkiАнкетыModel,
    'i-i-s-popytki-причин-увольн': IISPopytkiПричинУвольнModel,
    'i-i-s-popytki-рекомендац': IISPopytkiРекомендацModel,
    'i-i-s-popytki-специалист': IISPopytkiСпециалистModel
  },

  'application-name': 'Popytki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Popytki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Popytki',
          title: 'Popytki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        popytki: {
          caption: 'Popytki',
          title: 'Popytki',
          'i-i-s-popytki-анкеты-l': {
            caption: 'Анкеты',
            title: ''
          },
          'i-i-s-popytki-специалист-l': {
            caption: 'Специалист',
            title: ''
          },
          'i-i-s-popytki-причин-увольн-l': {
            caption: 'Причин увольн',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-popytki-анкеты-l': IISPopytkiАнкетыLForm,
    'i-i-s-popytki-причин-увольн-l': IISPopytkiПричинУвольнLForm,
    'i-i-s-popytki-специалист-l': IISPopytkiСпециалистLForm,
    'i-i-s-popytki-анкеты-e': IISPopytkiАнкетыEForm,
    'i-i-s-popytki-причин-увольн-e': IISPopytkiПричинУвольнEForm,
    'i-i-s-popytki-специалист-e': IISPopytkiСпециалистEForm
  },

});

export default translations;
