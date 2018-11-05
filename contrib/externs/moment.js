'use strict';

var moment = {};


/**
 * @interface
 */
moment.MomentDateObject = function() {};


/**
 * @interface
 */
moment.MomentLanguageData = function() {};


/**
 * @param {string} formatType
 * @return {string}
 */
moment.MomentLanguageData.prototype.longDateFormat = function(formatType) {};


/**
 * @interface
 */
moment.Duration = function() {};


/**
 * @param {boolean=} opt_withSuffix
 * @return {string}
 */
moment.Duration.prototype.humanize = function(opt_withSuffix) {};


/**
 * @param {string} units
 * @return {number}
 */
moment.Duration.prototype.as = function(units) {};


/**
 * @return {number}
 */
moment.Duration.prototype.milliseconds = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asMilliseconds = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.seconds = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asSeconds = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.minutes = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asMinutes = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.hours = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asHours = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.days = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asDays = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.months = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asMonths = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.years = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asYears = function() {};


/**
 * @param {(number|number|moment.Duration)} n
 * @param {string=} opt_p
 * @return {(moment.Duration|moment.Duration|moment.Duration)}
 */
moment.Duration.prototype.add = function(n, opt_p) {};


/**
 * @param {(number|number|moment.Duration)} n
 * @param {string=} opt_p
 * @return {(moment.Duration|moment.Duration|moment.Duration)}
 */
moment.Duration.prototype.subtract = function(n, opt_p) {};


/**
 * @return {string}
 */
moment.Duration.prototype.toISOString = function() {};


/**
 * @return {string}
 */
moment.Duration.prototype.toJSON = function() {};


/**
 * @interface
 */
moment.MomentInput = function() {};


/**
 * @interface
 */
moment.MomentCalendar = function() {};


/**
 * @interface
 */
moment.MomentRelativeTime = function() {};


/**
 * @interface
 */
moment.MomentLongDateFormat = function() {};


/**
 * @interface
 */
moment.BaseMomentLanguage = function() {};


/**
 * @interface
 */
moment.MomentLanguage = function() {};


/**
 * @interface
 */
moment.Moment = function() {};


/**
 * @param {string} format
 * @return {(string|string)}
 */
moment.Moment.prototype.format = function(format) {};


/**
 * @param {boolean=} opt_withoutSuffix
 * @return {string}
 */
moment.Moment.prototype.fromNow = function(opt_withoutSuffix) {};


/**
 * @param {string} unitOfTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.startOf = function(unitOfTime) {};


/**
 * @param {string} unitOfTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.endOf = function(unitOfTime) {};


/**
 * @param {(string|number|string|moment.MomentInput|moment.Duration)} unitOfTime
 * @param {(number|string|string)=} opt_amount
 * @return {(moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.add = function(unitOfTime, opt_amount) {};


/**
 * @param {(string|number|string|moment.MomentInput|moment.Duration)} unitOfTime
 * @param {(number|string|string)=} opt_amount
 * @return {(moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.subtract = function(unitOfTime, opt_amount) {};


/**
 * @param {(moment.Moment|moment.Moment)} start
 * @param {moment.MomentCalendar} formats
 * @return {(string|string|string)}
 */
moment.Moment.prototype.calendar = function(start, formats) {};


/**
 * @return {moment.Moment}
 */
moment.Moment.prototype.clone = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.valueOf = function() {};


/**
 * @return {moment.Moment}
 */
moment.Moment.prototype.local = function() {};


/**
 * @return {moment.Moment}
 */
moment.Moment.prototype.utc = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isValid = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.invalidAt = function() {};


/**
 * @param {number} y
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.year = function(y) {};


/**
 * @param {number} q
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.quarter = function(q) {};


/**
 * @param {(number|string)} M
 * @return {(moment.Moment|moment.Moment|number)}
 */
moment.Moment.prototype.month = function(M) {};


/**
 * @param {(number|string)} d
 * @return {(moment.Moment|moment.Moment|number)}
 */
moment.Moment.prototype.day = function(d) {};


/**
 * @param {number} d
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.date = function(d) {};


/**
 * @param {number} h
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.hour = function(h) {};


/**
 * @param {number} h
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.hours = function(h) {};


/**
 * @param {number} m
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.minute = function(m) {};


/**
 * @param {number} m
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.minutes = function(m) {};


/**
 * @param {number} s
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.second = function(s) {};


/**
 * @param {number} s
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.seconds = function(s) {};


/**
 * @param {number} ms
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.millisecond = function(ms) {};


/**
 * @param {number} ms
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.milliseconds = function(ms) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.weekday = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.isoWeekday = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.weekYear = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.isoWeekYear = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.week = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.weeks = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.isoWeek = function(d) {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.isoWeeks = function(d) {};


/**
 * @return {number}
 */
moment.Moment.prototype.weeksInYear = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.isoWeeksInYear = function() {};


/**
 * @param {number} d
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.dayOfYear = function(d) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} f
 * @param {boolean=} opt_suffix
 * @return {string}
 */
moment.Moment.prototype.from = function(f, opt_suffix) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} f
 * @param {boolean=} opt_suffix
 * @return {string}
 */
moment.Moment.prototype.to = function(f, opt_suffix) {};


/**
 * @param {boolean=} opt_withoutPrefix
 * @return {string}
 */
moment.Moment.prototype.toNow = function(opt_withoutPrefix) {};


/**
 * @param {(moment.Moment|moment.Moment|moment.Moment)} b
 * @param {(string|string)} unitOfTime
 * @param {boolean} round
 * @return {(number|number|number)}
 */
moment.Moment.prototype.diff = function(b, unitOfTime, round) {};


/**
 * @return {Array<number>}
 */
moment.Moment.prototype.toArray = function() {};


/**
 * @return {moment.Date}
 */
moment.Moment.prototype.toDate = function() {};


/**
 * @return {string}
 */
moment.Moment.prototype.toISOString = function() {};


/**
 * @return {string}
 */
moment.Moment.prototype.toJSON = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.unix = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isLeapYear = function() {};


/**
 * @param {(number|string)} b
 * @return {(number|moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.zone = function(b) {};


/**
 * @param {(number|string)} b
 * @return {(number|moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.utcOffset = function(b) {};


/**
 * @return {number}
 */
moment.Moment.prototype.daysInMonth = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isDST = function() {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} b
 * @param {string=} opt_granularity
 * @return {(boolean|boolean)}
 */
moment.Moment.prototype.isBefore = function(b, opt_granularity) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} b
 * @param {string=} opt_granularity
 * @return {(boolean|boolean)}
 */
moment.Moment.prototype.isAfter = function(b, opt_granularity) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} b
 * @param {string=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isSame = function(b, opt_granularity) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} a
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. number>)} b
 * @param {string=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isBetween = function(a, b, opt_granularity) {};


/**
 * @param {(string|boolean)} language
 * @return {(moment.Moment|moment.Moment|moment.MomentLanguage)}
 */
moment.Moment.prototype.lang = function(language) {};


/**
 * @param {(string|boolean)} language
 * @return {(moment.Moment|moment.Moment|string)}
 */
moment.Moment.prototype.locale = function(language) {};


/**
 * @param {(string|boolean)} language
 * @return {(moment.Moment|moment.Moment|moment.MomentLanguage)}
 */
moment.Moment.prototype.localeData = function(language) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. any>|string)} date
 * @param {string} format
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.max = function(date, format) {};


/**
 * @param {(moment.Moment |moment. string |moment. number |moment. Date |Array<moment. any>|string)} date
 * @param {string} format
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.min = function(date, format) {};


/**
 * @param {string} unit
 * @return {number}
 */
moment.Moment.prototype.get = function(unit) {};


/**
 * @param {(string|moment.MomentInput)} unit
 * @param {number=} opt_value
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.set = function(unit, opt_value) {};


/**
 * @return {moment.MomentDateObject}
 */
moment.Moment.prototype.toObject = function() {};


/**
 * @type {string}
 */
moment.version;


/**
 * @type {moment.Moment}
 */
moment.fn;


/**
 * @param {(number|Array<number>|string|string|string|string|moment.Date|moment.Moment|moment.Object)} date
 * @param {(string|string|Array<string>|Array<string>)=} opt_format
 * @param {(boolean|string|boolean|string)=} opt_strict
 * @param {(boolean|boolean)=} opt_strict
 * @return {(moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment|moment.Moment)}
 */
moment.utc = function(date, opt_format, opt_strict, opt_strict) {};


/**
 * @param {number} timestamp
 * @return {moment.Moment}
 */
moment.unix = function(timestamp) {};


/**
 * @param {moment.Object=} opt_parsingFlags
 * @return {moment.Moment}
 */
moment.invalid = function(opt_parsingFlags) {};


/**
 * @param {*} m
 * @return {(boolean|boolean)}
 */
moment.isMoment = function(m) {};


/**
 * @param {*} m
 * @return {boolean}
 */
moment.isDate = function(m) {};


/**
 * @param {*} d
 * @return {(boolean|boolean)}
 */
moment.isDuration = function(d) {};


/**
 * @param {(string|string)=} opt_language
 * @param {moment.MomentLanguage=} opt_definition
 * @return {(string|string)}
 */
moment.lang = function(opt_language, opt_definition) {};


/**
 * @param {(string|Array<string>|string)=} opt_language
 * @param {moment.MomentLanguage=} opt_definition
 * @return {(string|string|string)}
 */
moment.locale = function(opt_language, opt_definition) {};


/**
 * @param {string=} opt_language
 * @return {moment.MomentLanguageData}
 */
moment.localeData = function(opt_language) {};


/**
 * @type {*}
 */
moment.longDateFormat;


/**
 * @type {*}
 */
moment.relativeTime;


/**
 * @type {function(hour:number,minute:number,isLowercase:boolean):string}
 */
moment.meridiem;


/**
 * @type {*}
 */
moment.calendar;


/**
 * @type {function(num:number):string}
 */
moment.ordinal;


/**
 * @param {(moment.Number|moment.Number|moment.MomentInput|*)} milliseconds
 * @param {string=} opt_unitOfTime
 * @return {(moment.Duration|moment.Duration|moment.Duration|moment.Duration|moment.Duration)}
 */
moment.duration = function(milliseconds, opt_unitOfTime) {};


/**
 * @param {string} date
 * @return {moment.Moment}
 */
moment.parseZone = function(date) {};


/**
 * @param {(number|string|string)} index
 * @param {number} index
 * @return {(Array<string>|string|Array<string>|string)}
 */
moment.months = function(index, index) {};


/**
 * @param {(number|string|string)} index
 * @param {number} index
 * @return {(Array<string>|string|Array<string>|string)}
 */
moment.monthsShort = function(index, index) {};


/**
 * @param {(number|string|string)} index
 * @param {number} index
 * @return {(Array<string>|string|Array<string>|string)}
 */
moment.weekdays = function(index, index) {};


/**
 * @param {(number|string|string)} index
 * @param {number} index
 * @return {(Array<string>|string|Array<string>|string)}
 */
moment.weekdaysShort = function(index, index) {};


/**
 * @param {(number|string|string)} index
 * @param {number} index
 * @return {(Array<string>|string|Array<string>|string)}
 */
moment.weekdaysMin = function(index, index) {};


/**
 * @param {Moment} moments
 * @return {moment.Moment}
 */
moment.min = function(moments) {};


/**
 * @param {Moment} moments
 * @return {moment.Moment}
 */
moment.max = function(moments) {};


/**
 * @param {string} unit
 * @return {string}
 */
moment.normalizeUnits = function(unit) {};


/**
 * @param {(string|string)} threshold
 * @param {number} limit
 * @return {(moment.number |moment. boolean|boolean)}
 */
moment.relativeTimeThreshold = function(threshold, limit) {};


/**

*/
moment.ISO_8601 = function() {};


/**
 * @type {string}
 */
moment.defaultFormat;
