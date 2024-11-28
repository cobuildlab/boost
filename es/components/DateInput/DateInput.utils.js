import { DateTime } from 'luxon';
export var YEAR_MONTH_MASK = '99/9999';
export var DATE_MASK = '99/99/9999';
export var DATETIME_MASK = '99/99/9999, 99:99 aa';
export var YEAR_MONTH_FORMAT = 'MM/yyyy';
export var DATE_FORMAT = 'MM/dd/yyyy';
export var DATETIME_FORMAT = 'MM/dd/yyyy, hh:mm a';
export var fromISOToViewFormat = function fromISOToViewFormat(value, dateFormat) {
  if (value) {
    value = DateTime.fromISO(value);

    if (value.isValid) {
      value = value.toFormat(dateFormat || DATE_FORMAT);
    } else {
      value = '';
    }
  } else {
    value = '';
  }

  return value;
};
export var fromISOtoJSDate = function fromISOtoJSDate(value) {
  if (value) {
    value = DateTime.fromISO(value);

    if (value.isValid) {
      value = value.toJSDate();
    } else {
      value = null;
    }
  } else {
    value = null;
  }

  return value;
};
export var fromJSDateToISO = function fromJSDateToISO(value, withTime) {
  if (value) {
    value = DateTime.fromJSDate(value);
    value = fromLuxonToISO(value, withTime);
  } else {
    value = null;
  }

  return value;
};
export var fromViewFormatToLuxon = function fromViewFormatToLuxon(value, dateFormat) {
  if (value) {
    value = DateTime.fromFormat(value, dateFormat || DATE_FORMAT);
  } else {
    value = null;
  }

  return value;
};
export var fromLuxonToISO = function fromLuxonToISO(value, withTime) {
  if (value && value.isValid) {
    value = withTime ? value.setZone('utc').toISO() : value.toISODate();
  } else {
    value = null;
  }

  return value;
};