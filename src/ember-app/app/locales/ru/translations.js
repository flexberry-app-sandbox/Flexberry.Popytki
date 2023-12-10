import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Popytki',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Popytki',
          title: 'Popytki'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
