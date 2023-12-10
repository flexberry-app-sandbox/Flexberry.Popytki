import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import КатегорСотруднEnum from '../enums/i-i-s-popytki-категор-сотрудн';

export default FlexberryEnum.extend({
  enum: КатегорСотруднEnum,
  sourceType: 'IIS.Popytki.КатегорСотрудн'
});
