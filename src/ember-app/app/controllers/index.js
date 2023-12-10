import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.popytki.caption'),
          title: i18n.t('forms.application.sitemap.popytki.title'),
          children: [{
            link: 'i-i-s-popytki-анкеты-l',
            caption: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-анкеты-l.caption'),
            title: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-анкеты-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-popytki-специалист-l',
            caption: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-специалист-l.caption'),
            title: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-специалист-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-popytki-причин-увольн-l',
            caption: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-причин-увольн-l.caption'),
            title: i18n.t('forms.application.sitemap.popytki.i-i-s-popytki-причин-увольн-l.title'),
            icon: 'archive',
            children: null
          }]
        }
      ]
    };
  }),
})