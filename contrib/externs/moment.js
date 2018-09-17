'use strict';

var moment = {};


/**
 * @interface
 */
moment.Locale = function() {};


/**
 * @param {moment.CalendarKey=} opt_key
 * @param {moment.Moment=} opt_m
 * @param {moment.Moment=} opt_now
 * @return {string}
 */
moment.Locale.prototype.calendar = function(opt_key, opt_m, opt_now) {};


/**
 * @param {moment.LongDateFormatKey} key
 * @return {string}
 */
moment.Locale.prototype.longDateFormat = function(key) {};


/**
 * @return {string}
 */
moment.Locale.prototype.invalidDate = function() {};


/**
 * @param {number} n
 * @return {string}
 */
moment.Locale.prototype.ordinal = function(n) {};


/**
 * @param {string} inp
 * @return {string}
 */
moment.Locale.prototype.preparse = function(inp) {};


/**
 * @param {string} inp
 * @return {string}
 */
moment.Locale.prototype.postformat = function(inp) {};


/**
 * @param {number} n
 * @param {boolean} withoutSuffix
 * @param {moment.RelativeTimeKey} key
 * @param {boolean} isFuture
 * @return {string}
 */
moment.Locale.prototype.relativeTime = function(n, withoutSuffix, key, isFuture) {};


/**
 * @param {number} diff
 * @param {string} absRelTime
 * @return {string}
 */
moment.Locale.prototype.pastFuture = function(diff, absRelTime) {};


/**
 * @param {moment.Object} config
 */
moment.Locale.prototype.set = function(config) {};


/**
 * @param {moment.Moment} m
 * @param {string=} opt_format
 * @return {(Array<string>|string)}
 */
moment.Locale.prototype.months = function(m, opt_format) {};


/**
 * @param {moment.Moment} m
 * @param {string=} opt_format
 * @return {(Array<string>|string)}
 */
moment.Locale.prototype.monthsShort = function(m, opt_format) {};


/**
 * @param {string} monthName
 * @param {string} format
 * @param {boolean} strict
 * @return {number}
 */
moment.Locale.prototype.monthsParse = function(monthName, format, strict) {};


/**
 * @param {boolean} strict
 * @return {moment.RegExp}
 */
moment.Locale.prototype.monthsRegex = function(strict) {};


/**
 * @param {boolean} strict
 * @return {moment.RegExp}
 */
moment.Locale.prototype.monthsShortRegex = function(strict) {};


/**
 * @param {moment.Moment} m
 * @return {number}
 */
moment.Locale.prototype.week = function(m) {};


/**
 * @return {number}
 */
moment.Locale.prototype.firstDayOfYear = function() {};


/**
 * @return {number}
 */
moment.Locale.prototype.firstDayOfWeek = function() {};


/**
 * @param {moment.Moment} m
 * @param {string=} opt_format
 * @return {(Array<string>|string)}
 */
moment.Locale.prototype.weekdays = function(m, opt_format) {};


/**
 * @param {moment.Moment} m
 * @return {(Array<string>|string)}
 */
moment.Locale.prototype.weekdaysMin = function(m) {};


/**
 * @param {moment.Moment} m
 * @return {(Array<string>|string)}
 */
moment.Locale.prototype.weekdaysShort = function(m) {};


/**
 * @param {string} weekdayName
 * @param {string} format
 * @param {boolean} strict
 * @return {number}
 */
moment.Locale.prototype.weekdaysParse = function(weekdayName, format, strict) {};


/**
 * @param {boolean} strict
 * @return {moment.RegExp}
 */
moment.Locale.prototype.weekdaysRegex = function(strict) {};


/**
 * @param {boolean} strict
 * @return {moment.RegExp}
 */
moment.Locale.prototype.weekdaysShortRegex = function(strict) {};


/**
 * @param {boolean} strict
 * @return {moment.RegExp}
 */
moment.Locale.prototype.weekdaysMinRegex = function(strict) {};


/**
 * @param {string} input
 * @return {boolean}
 */
moment.Locale.prototype.isPM = function(input) {};


/**
 * @param {number} hour
 * @param {number} minute
 * @param {boolean} isLower
 * @return {string}
 */
moment.Locale.prototype.meridiem = function(hour, minute, isLower) {};


/**
 * @interface
 */
moment.StandaloneFormatSpec = function() {};


/**
 * @interface
 */
moment.WeekSpec = function() {};


/**
 * @interface
 */
moment.CalendarSpec = function() {};


/**
 * @interface
 */
moment.RelativeTimeSpec = function() {};


/**
 * @interface
 */
moment.LongDateFormatSpec = function() {};


/**
 * @interface
 */
moment.LocaleSpecification = function() {};


/**
 * @interface
 */
moment.MomentObjectOutput = function() {};


/**
 * @interface
 */
moment.Duration = function() {};


/**
 * @return {moment.Duration}
 */
moment.Duration.prototype.clone = function() {};


/**
 * @param {boolean=} opt_withSuffix
 * @return {string}
 */
moment.Duration.prototype.humanize = function(opt_withSuffix) {};


/**
 * @return {moment.Duration}
 */
moment.Duration.prototype.abs = function() {};


/**
 * @param {moment.undefined} units
 * @return {number}
 */
moment.Duration.prototype.as = function(units) {};


/**
 * @param {moment.undefined} units
 * @return {number}
 */
moment.Duration.prototype.get = function(units) {};


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
moment.Duration.prototype.weeks = function() {};


/**
 * @return {number}
 */
moment.Duration.prototype.asWeeks = function() {};


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
 * @param {moment.DurationInputArg1=} opt_inp
 * @param {moment.DurationInputArg2=} opt_unit
 * @return {moment.Duration}
 */
moment.Duration.prototype.add = function(opt_inp, opt_unit) {};


/**
 * @param {moment.DurationInputArg1=} opt_inp
 * @param {moment.DurationInputArg2=} opt_unit
 * @return {moment.Duration}
 */
moment.Duration.prototype.subtract = function(opt_inp, opt_unit) {};


/**
 * @param {moment.LocaleSpecifier} locale
 * @return {(string|moment.Duration)}
 */
moment.Duration.prototype.locale = function(locale) {};


/**
 * @return {moment.Locale}
 */
moment.Duration.prototype.localeData = function() {};


/**
 * @return {string}
 */
moment.Duration.prototype.toISOString = function() {};


/**
 * @return {string}
 */
moment.Duration.prototype.toJSON = function() {};


/**
 * @param {moment.LocaleSpecifier} locale
 * @return {(moment.Moment|moment.Locale)}
 */
moment.Duration.prototype.lang = function(locale) {};


/**
 * @return {string}
 */
moment.Duration.prototype.toIsoString = function() {};


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
moment.MomentParsingFlags = function() {};


/**
 * @interface
 */
moment.MomentParsingFlagsOpt = function() {};


/**
 * @interface
 */
moment.MomentBuiltinFormat = function() {};


var moment.unitOfTime = {};


/**
 * @interface
 */
moment.MomentInputObject = function() {};


/**
 * @interface
 */
moment.DurationInputObject = function() {};


/**
 * @interface
 */
moment.MomentSetObject = function() {};


/**
 * @interface
 */
moment.FromTo = function() {};


/**
 * @interface
 */
moment.MomentCreationData = function() {};


/**
 * @interface
 */
moment.Moment = function() {};


/**
 * @param {string=} opt_format
 * @return {string}
 */
moment.Moment.prototype.format = function(opt_format) {};


/**
 * @param {moment.undefined} unitOfTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.startOf = function(unitOfTime) {};


/**
 * @param {moment.undefined} unitOfTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.endOf = function(unitOfTime) {};


/**
 * @param {(moment.DurationInputArg1|moment.undefined)=} opt_amount
 * @param {(moment.DurationInputArg2|number,string)=} opt_unit
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.add = function(opt_amount, opt_unit) {};


/**
 * @param {(moment.DurationInputArg1|moment.undefined)=} opt_amount
 * @param {(moment.DurationInputArg2|number,string)=} opt_unit
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.subtract = function(opt_amount, opt_unit) {};


/**
 * @param {moment.MomentInput=} opt_time
 * @param {moment.CalendarSpec=} opt_formats
 * @return {string}
 */
moment.Moment.prototype.calendar = function(opt_time, opt_formats) {};


/**
 * @return {moment.Moment}
 */
moment.Moment.prototype.clone = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.valueOf = function() {};


/**
 * @param {boolean=} opt_keepLocalTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.local = function(opt_keepLocalTime) {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isLocal = function() {};


/**
 * @param {boolean=} opt_keepLocalTime
 * @return {moment.Moment}
 */
moment.Moment.prototype.utc = function(opt_keepLocalTime) {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isUTC = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isUtc = function() {};


/**
 * @return {moment.Moment}
 */
moment.Moment.prototype.parseZone = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isValid = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.invalidAt = function() {};


/**
 * @param {moment.MomentInput=} opt_other
 * @return {boolean}
 */
moment.Moment.prototype.hasAlignedHourOffset = function(opt_other) {};


/**
 * @return {moment.MomentCreationData}
 */
moment.Moment.prototype.creationData = function() {};


/**
 * @return {moment.MomentParsingFlags}
 */
moment.Moment.prototype.parsingFlags = function() {};


/**
 * @param {number} y
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.year = function(y) {};


/**
 * @param {number} y
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.years = function(y) {};


/**
 * @param {number} q
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.quarter = function(q) {};


/**
 * @param {number} q
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.quarters = function(q) {};


/**
 * @param {(number|string)} M
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.month = function(M) {};


/**
 * @param {(number|string)} M
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.months = function(M) {};


/**
 * @param {(number|string)} d
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.day = function(d) {};


/**
 * @param {(number|string)} d
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.days = function(d) {};


/**
 * @param {number} d
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.date = function(d) {};


/**
 * @param {number} d
 * @return {(moment.Moment|number)}
 */
moment.Moment.prototype.dates = function(d) {};


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
 * @param {(number|string)} d
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
 * @param {moment.MomentInput} inp
 * @param {boolean=} opt_suffix
 * @return {string}
 */
moment.Moment.prototype.from = function(inp, opt_suffix) {};


/**
 * @param {moment.MomentInput} inp
 * @param {boolean=} opt_suffix
 * @return {string}
 */
moment.Moment.prototype.to = function(inp, opt_suffix) {};


/**
 * @param {boolean=} opt_withoutSuffix
 * @return {string}
 */
moment.Moment.prototype.fromNow = function(opt_withoutSuffix) {};


/**
 * @param {boolean=} opt_withoutPrefix
 * @return {string}
 */
moment.Moment.prototype.toNow = function(opt_withoutPrefix) {};


/**
 * @param {moment.MomentInput} b
 * @param {moment.undefined=} opt_unitOfTime
 * @param {boolean=} opt_precise
 * @return {number}
 */
moment.Moment.prototype.diff = function(b, opt_unitOfTime, opt_precise) {};


/**
 * @return {Array<number>}
 */
moment.Moment.prototype.toArray = function() {};


/**
 * @return {moment.Date}
 */
moment.Moment.prototype.toDate = function() {};


/**
 * @param {boolean=} opt_keepOffset
 * @return {string}
 */
moment.Moment.prototype.toISOString = function(opt_keepOffset) {};


/**
 * @return {string}
 */
moment.Moment.prototype.inspect = function() {};


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
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.zone = function(b) {};


/**
 * @param {(number|string)} b
 * @param {boolean=} opt_keepLocalTime
 * @return {(number|moment.Moment)}
 */
moment.Moment.prototype.utcOffset = function(b, opt_keepLocalTime) {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isUtcOffset = function() {};


/**
 * @return {number}
 */
moment.Moment.prototype.daysInMonth = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isDST = function() {};


/**
 * @return {string}
 */
moment.Moment.prototype.zoneAbbr = function() {};


/**
 * @return {string}
 */
moment.Moment.prototype.zoneName = function() {};


/**
 * @param {moment.MomentInput=} opt_inp
 * @param {moment.undefined=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isBefore = function(opt_inp, opt_granularity) {};


/**
 * @param {moment.MomentInput=} opt_inp
 * @param {moment.undefined=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isAfter = function(opt_inp, opt_granularity) {};


/**
 * @param {moment.MomentInput=} opt_inp
 * @param {moment.undefined=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isSame = function(opt_inp, opt_granularity) {};


/**
 * @param {moment.MomentInput=} opt_inp
 * @param {moment.undefined=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isSameOrAfter = function(opt_inp, opt_granularity) {};


/**
 * @param {moment.MomentInput=} opt_inp
 * @param {moment.undefined=} opt_granularity
 * @return {boolean}
 */
moment.Moment.prototype.isSameOrBefore = function(opt_inp, opt_granularity) {};


/**
 * @param {moment.MomentInput} a
 * @param {moment.MomentInput} b
 * @param {moment.undefined=} opt_granularity
 * @param {(moment."()" |moment. "[)" |moment. "(]" |moment. "[]")=} opt_inclusivity
 * @return {boolean}
 */
moment.Moment.prototype.isBetween = function(a, b, opt_granularity, opt_inclusivity) {};


/**
 * @param {moment.LocaleSpecifier} language
 * @return {(moment.Moment|moment.Locale)}
 */
moment.Moment.prototype.lang = function(language) {};


/**
 * @param {moment.LocaleSpecifier} locale
 * @return {(string|moment.Moment)}
 */
moment.Moment.prototype.locale = function(locale) {};


/**
 * @return {moment.Locale}
 */
moment.Moment.prototype.localeData = function() {};


/**
 * @return {boolean}
 */
moment.Moment.prototype.isDSTShifted = function() {};


/**
 * @param {(moment.MomentInput|moment.MomentInput)=} opt_inp
 * @param {(moment.MomentFormatSpecification|moment.MomentFormatSpecification)=} opt_format
 * @param {(boolean|string)=} opt_strict
 * @param {boolean=} opt_strict
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.max = function(opt_inp, opt_format, opt_strict, opt_strict) {};


/**
 * @param {(moment.MomentInput|moment.MomentInput)=} opt_inp
 * @param {(moment.MomentFormatSpecification|moment.MomentFormatSpecification)=} opt_format
 * @param {(boolean|string)=} opt_strict
 * @param {boolean=} opt_strict
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.min = function(opt_inp, opt_format, opt_strict, opt_strict) {};


/**
 * @param {moment.undefined} unit
 * @return {number}
 */
moment.Moment.prototype.get = function(unit) {};


/**
 * @param {(moment.undefined|moment.MomentSetObject)} unit
 * @param {number=} opt_value
 * @return {(moment.Moment|moment.Moment)}
 */
moment.Moment.prototype.set = function(unit, opt_value) {};


/**
 * @return {moment.MomentObjectOutput}
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
 * @param {(moment.MomentInput|moment.MomentInput)=} opt_inp
 * @param {(moment.MomentFormatSpecification|moment.MomentFormatSpecification)=} opt_format
 * @param {(boolean|string)=} opt_strict
 * @param {boolean=} opt_strict
 * @return {(moment.Moment|moment.Moment)}
 */
moment.utc = function(opt_inp, opt_format, opt_strict, opt_strict) {};


/**
 * @param {number} timestamp
 * @return {moment.Moment}
 */
moment.unix = function(timestamp) {};


/**
 * @param {moment.MomentParsingFlagsOpt=} opt_flags
 * @return {moment.Moment}
 */
moment.invalid = function(opt_flags) {};


/**
 * @param {*} m
 * @return {moment.m is Moment}
 */
moment.isMoment = function(m) {};


/**
 * @param {*} m
 * @return {moment.m is Date}
 */
moment.isDate = function(m) {};


/**
 * @param {*} d
 * @return {moment.d is Duration}
 */
moment.isDuration = function(d) {};


/**
 * @param {(string|string)=} opt_language
 * @param {moment.Locale=} opt_definition
 * @return {(string|string)}
 */
moment.lang = function(opt_language, opt_definition) {};


/**
 * @param {(string|Array<string>|string)=} opt_language
 * @param {(moment.LocaleSpecification |moment. void)=} opt_definition
 * @return {(string|string|string)}
 */
moment.locale = function(opt_language, opt_definition) {};


/**
 * @param {(moment.string |Array<moment. string>)=} opt_key
 * @return {moment.Locale}
 */
moment.localeData = function(opt_key) {};


/**
 * @param {moment.DurationInputArg1=} opt_inp
 * @param {moment.DurationInputArg2=} opt_unit
 * @return {moment.Duration}
 */
moment.duration = function(opt_inp, opt_unit) {};


/**
 * @param {(moment.MomentInput|moment.MomentInput)=} opt_inp
 * @param {(moment.MomentFormatSpecification|moment.MomentFormatSpecification)=} opt_format
 * @param {(boolean|string)=} opt_strict
 * @param {boolean=} opt_strict
 * @return {(moment.Moment|moment.Moment)}
 */
moment.parseZone = function(opt_inp, opt_format, opt_strict, opt_strict) {};


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
 * @param {(number|string|string|boolean|boolean|boolean|boolean)} index
 * @param {(number|number|string|string)=} opt_index
 * @param {number=} opt_index
 * @return {(Array<string>|string|Array<string>|string|Array<string>|string|Array<string>|string)}
 */
moment.weekdays = function(index, opt_index, opt_index) {};


/**
 * @param {(number|string|string|boolean|boolean|boolean|boolean)} index
 * @param {(number|number|string|string)=} opt_index
 * @param {number=} opt_index
 * @return {(Array<string>|string|Array<string>|string|Array<string>|string|Array<string>|string)}
 */
moment.weekdaysShort = function(index, opt_index, opt_index) {};


/**
 * @param {(number|string|string|boolean|boolean|boolean|boolean)} index
 * @param {(number|number|string|string)=} opt_index
 * @param {number=} opt_index
 * @return {(Array<string>|string|Array<string>|string|Array<string>|string|Array<string>|string)}
 */
moment.weekdaysMin = function(index, opt_index, opt_index) {};


/**
 * @param {(Array<moment.Moment>|Moment)} moments
 * @return {(moment.Moment|moment.Moment)}
 */
moment.min = function(moments) {};


/**
 * @param {(Array<moment.Moment>|Moment)} moments
 * @return {(moment.Moment|moment.Moment)}
 */
moment.max = function(moments) {};


/**
 * @return {number}
 */
moment.now = function() {};


/**
 * @param {string} language
 * @param {(moment.LocaleSpecification |moment. void)} localeSpec
 * @return {moment.Locale}
 */
moment.defineLocale = function(language, localeSpec) {};


/**
 * @param {string} language
 * @param {(moment.LocaleSpecification |moment. void)} localeSpec
 * @return {moment.Locale}
 */
moment.updateLocale = function(language, localeSpec) {};


/**
 * @return {Array<string>}
 */
moment.locales = function() {};


/**
 * @param {moment.undefined} unit
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
 * @param {function(num:number):number} fn
 * @return {(boolean|function(num:number):number)}
 */
moment.relativeTimeRounding = function(fn) {};


/**
 * @param {moment.Moment} m
 * @param {moment.Moment} now
 * @return {string}
 */
moment.calendarFormat = function(m, now) {};


/**
 * @param {string} input
 * @return {number}
 */
moment.parseTwoDigitYear = function(input) {};


/**
 * @type {moment.MomentBuiltinFormat}
 */
moment.ISO_8601;


/**
 * @type {moment.MomentBuiltinFormat}
 */
moment.RFC_2822;


/**
 * @type {string}
 */
moment.defaultFormat;


/**
 * @type {string}
 */
moment.defaultFormatUtc;


/**
 * @type {{DATETIME_LOCAL: string, DATETIME_LOCAL_SECONDS: string, DATETIME_LOCAL_MS: string, DATE: string, TIME: string, TIME_SECONDS: string, TIME_MS: string, WEEK: string, MONTH: string}}
 */
moment.HTML5_FMT;
