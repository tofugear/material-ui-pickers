import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Button, Dialog, DialogActions, DialogContent, IconButton, Paper, Tab, Tabs, TextField, Toolbar, Typography, withStyles, withTheme } from 'material-ui';
import moment from 'moment';
import { extendMoment } from 'moment-range';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var dialogWidth = 310;
var styles = {
  dialogRoot: {
    minWidth: dialogWidth
  },
  dialog: {
    width: dialogWidth,
    height: 420,

    '&:first-child': {
      padding: 0
    }
  }
};

var ModalDialog = function ModalDialog(props) {
  var children = props.children,
      classes = props.classes,
      onAccept = props.onAccept,
      onDismiss = props.onDismiss,
      dialogContentClassName = props.dialogContentClassName,
      other = objectWithoutProperties(props, ['children', 'classes', 'onAccept', 'onDismiss', 'dialogContentClassName']);


  return React.createElement(
    Dialog,
    _extends({ classes: { paper: classes.dialogRoot } }, other),
    React.createElement(
      DialogContent,
      { className: classnames(classes.dialog, dialogContentClassName) },
      children
    ),
    React.createElement(
      DialogActions,
      null,
      React.createElement(
        Button,
        { color: 'primary', onClick: onDismiss, tabIndex: -1 },
        ' Cancel '
      ),
      React.createElement(
        Button,
        { color: 'primary', onClick: onAccept },
        ' OK '
      )
    )
  );
};

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dialogContentClassName: PropTypes.string
};

ModalDialog.defaultProps = {
  dialogContentClassName: ''
};

var ModalDialog$1 = withStyles(styles, { name: 'MuiPickersModal' })(ModalDialog);

var DateTextField = function (_Component) {
  inherits(DateTextField, _Component);

  function DateTextField() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTextField.__proto__ || Object.getPrototypeOf(DateTextField)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = function (nextProps) {
      return _this.props.value !== nextProps.value || _this.props.format !== nextProps.format;
    }, _this.getDisplayDate = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          format = _this$props.format,
          invalidLabel = _this$props.invalidLabel,
          labelFunc = _this$props.labelFunc;


      var date = moment(value);

      if (labelFunc) {
        return labelFunc(date, invalidLabel);
      }

      return date.isValid() ? date.format(format) : invalidLabel;
    }, _this.handleChange = function (e) {
      var value = e.target.value;

      var momentValue = moment(value);

      if (momentValue.isValid()) {
        console.warn('Currently not supported keyboad input');
        // this.props.onChange(momentValue);
      }
    }, _this.handleFocus = function (e) {
      e.target.blur();
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;


      if (!disabled) {
        onClick(e);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          disabled = _props.disabled,
          onClick = _props.onClick,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          other = objectWithoutProperties(_props, ['value', 'format', 'disabled', 'onClick', 'invalidLabel', 'labelFunc']);


      return React.createElement(TextField, _extends({
        readOnly: true,
        value: this.getDisplayDate(),
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: function onBlur(e) {
          return e.preventDefault() && e.stopPropagation();
        },
        disabled: disabled
      }, other));
    }
  }]);
  return DateTextField;
}(Component);

DateTextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  disabled: PropTypes.bool,
  format: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func
};
DateTextField.defaultProps = {
  disabled: false,
  invalidLabel: 'Unknown',
  value: new Date(),
  labelFunc: undefined
};

var date = PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]);

var DomainPropTypes = {
  date: date
};

var ModalWrapper = function (_PureComponent) {
  inherits(ModalWrapper, _PureComponent);

  function ModalWrapper() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ModalWrapper.__proto__ || Object.getPrototypeOf(ModalWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      open: false
    }, _this.togglePicker = function () {
      _this.setState({ open: !_this.state.open });
    }, _this.handleAccept = function () {
      _this.togglePicker(); // close
      _this.props.onAccept();
    }, _this.handleDismiss = function () {
      _this.togglePicker();
      _this.props.onDismiss();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ModalWrapper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          children = _props.children,
          dialogContentClassName = _props.dialogContentClassName,
          onAccept = _props.onAccept,
          onDismiss = _props.onDismiss,
          invalidLabel = _props.invalidLabel,
          labelFunc = _props.labelFunc,
          other = objectWithoutProperties(_props, ['value', 'format', 'children', 'dialogContentClassName', 'onAccept', 'onDismiss', 'invalidLabel', 'labelFunc']);


      return React.createElement(
        'div',
        null,
        React.createElement(DateTextField, _extends({
          value: value,
          format: format,
          onClick: this.togglePicker
          // onFocus={this.togglePicker} <- Currently not properly works with .blur() on TextField
          , invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other)),
        React.createElement(
          ModalDialog$1,
          {
            open: this.state.open,
            onAccept: this.handleAccept,
            onDismiss: this.handleDismiss,
            dialogContentClassName: dialogContentClassName
          },
          children
        )
      );
    }
  }]);
  return ModalWrapper;
}(PureComponent);

ModalWrapper.propTypes = {
  value: DomainPropTypes.date,
  children: PropTypes.node.isRequired,
  format: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
  dialogContentClassName: PropTypes.string,
  invalidLabel: PropTypes.string,
  labelFunc: PropTypes.func
};
ModalWrapper.defaultProps = {
  dialogContentClassName: '',
  invalidLabel: undefined,
  value: new Date(),
  labelFunc: undefined
};

var CalendarHeader = function CalendarHeader(props) {
  var classes = props.classes,
      currentMonth = props.currentMonth,
      onMonthChange = props.onMonthChange,
      leftArrowIcon = props.leftArrowIcon,
      rightArrowIcon = props.rightArrowIcon;


  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(currentMonth.clone().add(1, 'months'));
  };
  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(currentMonth.clone().subtract(1, 'months'));
  };
  var weekdays = [0, 1, 2, 3, 4, 5, 6].map(function (dayOfWeek) {
    return moment().weekday(dayOfWeek).format('dd');
  });

  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: classes.switchHeader },
      React.createElement(
        IconButton,
        { onClick: selectPreviousMonth },
        leftArrowIcon
      ),
      React.createElement(
        'div',
        { className: classes.monthName },
        currentMonth.format('MMMM YYYY')
      ),
      React.createElement(
        IconButton,
        { onClick: selectNextMonth },
        rightArrowIcon
      )
    ),
    React.createElement(
      'div',
      { className: classes.daysHeader },
      weekdays.map(function (day) {
        return React.createElement(
          'div',
          { key: day, className: classes.dayLabel },
          ' ',
          day,
          ' '
        );
      })
    )
  );
};

CalendarHeader.propTypes = {
  currentMonth: PropTypes.object.isRequired,
  onMonthChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node
};

CalendarHeader.defaultProps = {
  leftArrowIcon: 'keyboard_arrow_left',
  rightArrowIcon: 'keyboard_arrow_right'
};

var styles$3 = function styles(theme) {
  return {
    switchHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px 0 20px'
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dayLabel: {
      width: 36,
      margin: '0 2px',
      fontSize: 13,
      textAlign: 'center',
      color: theme.palette.text.hint
    },
    monthName: {
      color: theme.palette.text.primary
    }
  };
};

var CalendarHeader$1 = withStyles(styles$3)(CalendarHeader, { name: 'MuiPickersCalendarHeader' });

var moment$1 = extendMoment(moment);

var Calendar = function (_Component) {
  inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      currentMonth: _this.props.date.clone().startOf('month')
    }, _this.onDateSelect = function (day) {
      var date = _this.props.date;

      var updatedDate = day.clone().hours(date.hours()).minutes(date.minutes());

      _this.props.onChange(updatedDate);
    }, _this.handleChangeMonth = function (newMonth) {
      _this.setState({ currentMonth: newMonth });
    }, _this.validateMinMaxDate = function (day) {
      var _this$props = _this.props,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate;

      var startOfDay = function startOfDay(date) {
        return moment$1(date).startOf('day');
      };

      return minDate && day.isBefore(startOfDay(minDate)) || maxDate && day.isAfter(startOfDay(maxDate));
    }, _this.shouldDisableDate = function (day) {
      var disableFuture = _this.props.disableFuture;

      return disableFuture && day.isAfter(moment$1()) || _this.validateMinMaxDate(day);
    }, _this.renderWeeks = function () {
      var currentMonth = _this.state.currentMonth;

      var start = currentMonth.clone().startOf('week');
      var end = currentMonth.clone().endOf('month').endOf('week');

      return Array.from(moment$1.range(start, end).by('week')).map(function (week) {
        return React.createElement(
          'div',
          { key: 'week-' + week.toString(), className: _this.props.classes.week },
          _this.renderDays(week)
        );
      });
    }, _this.renderDays = function (week) {
      var _this$props2 = _this.props,
          classes = _this$props2.classes,
          date = _this$props2.date,
          renderDay = _this$props2.renderDay;


      var selectedDate = date.clone().startOf('day');
      var formattedSelectedDate = selectedDate.format();
      var end = week.clone().endOf('week');
      var currentMonthNumber = _this.state.currentMonth.get('month');

      return Array.from(moment$1.range(week, end).by('day')).map(function (day) {
        var _classnames2;

        // should be applied both for wrapper and button
        var disabledClass = classnames(defineProperty({}, classes.disabled, _this.shouldDisableDate(day)));
        var dayInCurrentMonth = day.get('month') === currentMonthNumber;

        var dayClass = classnames(classes.day, disabledClass, (_classnames2 = {}, defineProperty(_classnames2, classes.hidden, !dayInCurrentMonth), defineProperty(_classnames2, classes.selected, day.format() === formattedSelectedDate), _classnames2));

        var dayComponent = React.createElement(
          IconButton,
          { className: dayClass },
          React.createElement(
            'span',
            null,
            ' ',
            day.format('DD'),
            ' '
          )
        );

        if (renderDay) {
          dayComponent = renderDay(day, selectedDate, dayInCurrentMonth, dayComponent);
        }

        return React.createElement(
          'div',
          {
            key: day.toString(),
            onClick: function onClick() {
              return dayInCurrentMonth && _this.onDateSelect(day);
            },
            onKeyPress: function onKeyPress() {
              return dayInCurrentMonth && _this.onDateSelect(day);
            },
            className: disabledClass,
            role: 'presentation'
          },
          dayComponent
        );
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Calendar, [{
    key: 'render',
    value: function render() {
      var currentMonth = this.state.currentMonth;
      var classes = this.props.classes;


      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(CalendarHeader$1, {
          currentMonth: currentMonth,
          onMonthChange: this.handleChangeMonth,
          leftArrowIcon: this.props.leftArrowIcon,
          rightArrowIcon: this.props.rightArrowIcon
        }),
        React.createElement(
          'div',
          { className: classes.calendar },
          this.renderWeeks()
        )
      );
    }
  }]);
  return Calendar;
}(Component);

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disableFuture: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func
};
Calendar.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disableFuture: false,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined
};
var styles$2 = function styles(theme) {
  return {
    calendar: {
      marginTop: 5
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    day: {
      width: 36,
      height: 36,
      fontSize: 14,
      margin: '0 2px',
      color: theme.palette.text.primary
    },
    selected: {
      color: theme.palette.primary[700],
      backgroundColor: theme.palette.primary[200]
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    }
  };
};

var Calendar$1 = withStyles(styles$2, { name: 'MuiPickersCalendar' })(Calendar);

var moment$2 = extendMoment(moment);

var YearSelection = function (_PureComponent) {
  inherits(YearSelection, _PureComponent);

  function YearSelection() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, YearSelection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = YearSelection.__proto__ || Object.getPrototypeOf(YearSelection)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.scrollToCurrentYear();
    }, _this.onYearSelect = function (year) {
      var _this$props = _this.props,
          date = _this$props.date,
          onChange = _this$props.onChange;


      var newDate = date.clone().set('year', year);
      onChange(newDate);
    }, _this.scrollToCurrentYear = function () {
      var _this$props2 = _this.props,
          animateYearScrolling = _this$props2.animateYearScrolling,
          classes = _this$props2.classes;

      var currentYearElement = document.getElementsByClassName(classes.selectedYear)[0];

      if (currentYearElement) {
        currentYearElement.scrollIntoView({
          behavior: animateYearScrolling ? 'smooth' : 'auto'
        });
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(YearSelection, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          date = _props.date,
          classes = _props.classes,
          disableFuture = _props.disableFuture;

      var currentYear = date.get('year');

      return React.createElement(
        'div',
        { className: classes.container },
        Array.from(moment$2.range(minDate, maxDate).by('year')).map(function (year) {
          var _classnames;

          var yearNumber = year.get('year');
          var className = classnames(classes.yearItem, (_classnames = {}, defineProperty(_classnames, classes.selectedYear, yearNumber === currentYear), defineProperty(_classnames, classes.disabled, disableFuture && year.isAfter(moment$2())), _classnames));

          return React.createElement(
            'div',
            {
              role: 'button',
              key: year.format('YYYY'),
              className: className,
              tabIndex: yearNumber,
              onClick: function onClick() {
                return _this2.onYearSelect(yearNumber);
              },
              onKeyPress: function onKeyPress() {
                return _this2.onYearSelect(yearNumber);
              }
            },
            yearNumber
          );
        })
      );
    }
  }]);
  return YearSelection;
}(PureComponent);

YearSelection.propTypes = {
  date: PropTypes.shape({}).isRequired,
  minDate: DomainPropTypes.date.isRequired,
  maxDate: DomainPropTypes.date.isRequired,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disableFuture: PropTypes.bool.isRequired,
  animateYearScrolling: PropTypes.bool
};
YearSelection.defaultProps = {
  animateYearScrolling: false
};
var styles$4 = function styles(theme) {
  return {
    container: {
      maxHeight: 320,
      overflowY: 'auto',
      justifyContent: 'center'
    },
    yearItem: {
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      color: theme.palette.text.primary
    },
    selectedYear: {
      fontSize: 26,
      margin: '10px 0',
      color: theme.palette.primary[500]
    },
    disabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
};

var YearSelection$1 = withStyles(styles$4, { name: 'MuiPickersYearSelection' })(YearSelection);

var PickerToolbar = function PickerToolbar(props) {
  var children = props.children,
      className = props.className,
      classes = props.classes,
      other = objectWithoutProperties(props, ['children', 'className', 'classes']);


  return React.createElement(
    Toolbar,
    _extends({ className: classnames(classes.toolbar, className) }, other),
    children
  );
};

PickerToolbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

PickerToolbar.defaultProps = {
  className: ''
};

var styles$5 = function styles(theme) {
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 100,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.background.default
    }
  };
};

var PickerToolbar$1 = withStyles(styles$5, { name: 'MuiPickersToolbar' })(PickerToolbar);

var ToolbarButton = function ToolbarButton(props) {
  var classes = props.classes,
      selected = props.selected,
      label = props.label,
      className = props.className,
      other = objectWithoutProperties(props, ['classes', 'selected', 'label', 'className']);


  return React.createElement(
    Typography,
    _extends({
      className: classnames(classes.toolbarBtn, className, defineProperty({}, classes.toolbarBtnSelected, selected))
    }, other),
    label
  );
};

ToolbarButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};

ToolbarButton.defaultProps = {
  className: ''
};

var styles$6 = function styles(theme) {
  return {
    toolbarBtn: {
      cursor: 'pointer',
      color: theme.palette.common.lightWhite
    },
    toolbarBtnSelected: {
      color: theme.palette.common.white
    }
  };
};

var ToolbarButton$1 = withStyles(styles$6, { name: 'MuiPickersToolbarButton' })(ToolbarButton);

var DatePicker = function (_PureComponent) {
  inherits(DatePicker, _PureComponent);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      showYearSelection: _this.props.openToYearSelection
    }, _this.handleYearSelect = function (date) {
      _this.props.onChange(date, false);
      _this.openCalendar();
    }, _this.openYearSelection = function () {
      _this.props.onClick && _this.props.onClick();
      _this.setState({ showYearSelection: true });
    }, _this.openCalendar = function () {
      _this.props.onClick && _this.props.onClick();
      _this.setState({ showYearSelection: false });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DatePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          disableFuture = _props.disableFuture,
          onChange = _props.onChange,
          animateYearScrolling = _props.animateYearScrolling,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay;
      var showYearSelection = this.state.showYearSelection;


      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(
          PickerToolbar$1,
          null,
          React.createElement(ToolbarButton$1, {
            type: 'subheading',
            onClick: this.openYearSelection,
            selected: showYearSelection,
            label: this.date.format('YYYY')
          }),
          React.createElement(ToolbarButton$1, {
            type: 'display1',
            onClick: this.openCalendar,
            selected: !showYearSelection,
            label: this.date.format('ddd, MMM DD')
          })
        ),
        this.props.children,
        showYearSelection ? React.createElement(YearSelection$1, {
          date: this.date,
          onChange: this.handleYearSelect,
          minDate: this.minDate,
          maxDate: this.maxDate,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling
        }) : React.createElement(Calendar$1, {
          date: this.date,
          onChange: onChange,
          disableFuture: disableFuture,
          minDate: this.minDate,
          maxDate: this.maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay
        })
      );
    }
  }, {
    key: 'date',
    get: function get$$1() {
      return this.props.date.startOf('day');
    }
  }, {
    key: 'minDate',
    get: function get$$1() {
      return moment(this.props.minDate);
    }
  }, {
    key: 'maxDate',
    get: function get$$1() {
      return moment(this.props.maxDate);
    }
  }]);
  return DatePicker;
}(PureComponent);

DatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  disableFuture: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  openToYearSelection: PropTypes.bool,
  children: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  onClick: PropTypes.func
};
DatePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  disableFuture: false,
  animateYearScrolling: undefined,
  openToYearSelection: false,
  children: null,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  onClick: undefined
};
var styles$1 = function styles() {
  return {};
};

var DatePicker$1 = withStyles(styles$1, { name: 'MuiPickersDatePicker' })(DatePicker);

/* eslint-disable react/sort-comp */

var PickerBase = function (_PureComponent) {
  inherits(PickerBase, _PureComponent);

  function PickerBase() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, PickerBase);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = PickerBase.__proto__ || Object.getPrototypeOf(PickerBase)).call.apply(_ref, [this].concat(args))), _this), _this.getValidDateOrCurrent = function () {
      var date = moment(_this.props.value);

      return date.isValid() ? date : moment();
    }, _this.state = {
      date: _this.getValidDateOrCurrent()
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.value !== prevProps.value) {
        _this.setState({ date: _this.getValidDateOrCurrent() });
      }
    }, _this.handleAccept = function () {
      var dateToReturn = _this.props.returnMoment ? _this.state.date : _this.state.date.toDate();

      _this.props.onChange(dateToReturn);
    }, _this.handleDismiss = function () {
      _this.setState({ date: _this.getValidDateOrCurrent() });
    }, _this.handleChange = function (date) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      _this.setState({ date: date }, function () {
        if (isFinish && _this.props.autoOk) {
          _this.handleAccept();
          _this.togglePicker();
        }
      });
    }, _this.togglePicker = function () {
      _this.wrapper.togglePicker();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  return PickerBase;
}(PureComponent);

PickerBase.propTypes = {
  value: DomainPropTypes.date,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  returnMoment: PropTypes.bool
};
PickerBase.defaultProps = {
  value: new Date(),
  autoOk: false,
  returnMoment: false
};

var DatePickerWrapper = function (_PickerBase) {
  inherits(DatePickerWrapper, _PickerBase);

  function DatePickerWrapper() {
    classCallCheck(this, DatePickerWrapper);
    return possibleConstructorReturn(this, (DatePickerWrapper.__proto__ || Object.getPrototypeOf(DatePickerWrapper)).apply(this, arguments));
  }

  createClass(DatePickerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          onChange = _props.onChange,
          disableFuture = _props.disableFuture,
          animateYearScrolling = _props.animateYearScrolling,
          openToYearSelection = _props.openToYearSelection,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'minDate', 'maxDate', 'onChange', 'disableFuture', 'animateYearScrolling', 'openToYearSelection', 'returnMoment', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'renderDay', 'labelFunc']);


      return React.createElement(
        ModalWrapper,
        _extends({
          ref: function ref(node) {
            _this2.wrapper = node;
          },
          value: value,
          format: format,
          onAccept: this.handleAccept,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other),
        React.createElement(DatePicker$1, {
          date: date,
          onChange: this.handleChange,
          disableFuture: disableFuture,
          animateYearScrolling: animateYearScrolling,
          openToYearSelection: openToYearSelection,
          minDate: minDate,
          maxDate: maxDate,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          renderDay: renderDay
        })
      );
    }
  }]);
  return DatePickerWrapper;
}(PickerBase);

DatePickerWrapper.propTypes = {
  value: DomainPropTypes.date,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  disableFuture: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  openToYearSelection: PropTypes.bool,
  returnMoment: PropTypes.bool,
  invalidLabel: PropTypes.string,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  renderDay: PropTypes.func,
  labelFunc: PropTypes.func
};
DatePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do',
  autoOk: false,
  returnMoment: true,
  minDate: undefined,
  maxDate: undefined,
  disableFuture: undefined,
  animateYearScrolling: undefined,
  openToYearSelection: undefined,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined
};

var ClockPointer = function (_Component) {
  inherits(ClockPointer, _Component);

  function ClockPointer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockPointer.__proto__ || Object.getPrototypeOf(ClockPointer)).call.apply(_ref, [this].concat(args))), _this), _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          max = _this$props.max;

      var angle = 360 / max * value;

      return {
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockPointer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          hasSelected = _props.hasSelected;


      return React.createElement(
        'div',
        {
          className: classes.pointer,
          style: this.getAngleStyle()
        },
        React.createElement('div', { className: classnames(classes.thumb, defineProperty({}, classes.noPoint, hasSelected)) })
      );
    }
  }]);
  return ClockPointer;
}(Component);

ClockPointer.propTypes = {
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  hasSelected: PropTypes.bool.isRequired,
  max: PropTypes.number.isRequired
};
var styles$9 = function styles(theme) {
  return {
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary[500],
      height: '40%',
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.common.white,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: '14px solid ' + theme.palette.primary[500],
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary[500]
    }
  };
};

var ClockPointer$1 = withStyles(styles$9, { name: 'MuiPickersClockPointer' })(ClockPointer);

var HOURS = 'hours';

var MINUTES = 'minutes';

var clockType = Object.freeze({
	HOURS: HOURS,
	MINUTES: MINUTES
});

var center = {
  x: 260 / 2,
  y: 260 / 2
};

var basePoint = {
  x: center.x,
  y: 0
};

var cx = basePoint.x - center.x;
var cy = basePoint.y - center.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - center.x;
  var y = offsetY - center.y;

  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);

  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;

  var value = Math.floor(deg / step) || 0;

  return value;
};

var getHours = function getHours(offsetX, offsetY) {
  var value = getAngleValue(30, offsetX, offsetY) || 12;

  return value % 12;
};

var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6;

  var value = getAngleValue(step, offsetX, offsetY);

  return value;
};

var convertToMeridiem = function convertToMeridiem(time, meridiem) {
  if (time.format('a') !== meridiem) {
    var hours = meridiem === 'am' ? time.hours() - 12 : time.hours() + 12;

    return time.clone().hours(hours);
  }

  return time;
};

var Clock = function (_Component) {
  inherits(Clock, _Component);

  function Clock() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Clock.__proto__ || Object.getPrototypeOf(Clock)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchMove = function (e) {
      _this.setTime(e);
    }, _this.handleTouchEnd = function (e) {
      _this.handleTouchMove(e);
    }, _this.handleUp = function (event) {
      event.preventDefault();
      _this.setTime(event.nativeEvent, true);
    }, _this.handleMove = function (e) {
      e.preventDefault();
      e.stopPropagation();
      // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari
      var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

      if (isButtonPressed) {
        _this.setTime(e.nativeEvent, false);
      }
    }, _this.hasSelected = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          value = _this$props.value;


      if (type === HOURS) {
        return true;
      }

      return value % 5 === 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Clock, [{
    key: 'setTime',
    value: function setTime(e) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var offsetX = e.offsetX,
          offsetY = e.offsetY;


      if (typeof offsetX === 'undefined') {
        var rect = e.target.getBoundingClientRect();

        offsetX = e.changedTouches[0].clientX - rect.left;
        offsetY = e.changedTouches[0].clientY - rect.top;
      }

      var value = this.props.type === MINUTES ? getMinutes(offsetX, offsetY) : getHours(offsetX, offsetY);

      this.props.onChange(value, isFinish);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          value = _props.value,
          children = _props.children,
          type = _props.type;


      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(
          'div',
          {
            className: classes.clock
          },
          React.createElement('div', {
            role: 'menu',
            tabIndex: -1,
            className: classes.squareMask,
            onTouchMove: this.handleTouchMove,
            onTouchEnd: this.handleTouchEnd,
            onMouseUp: this.handleUp,
            onMouseMove: this.handleMove
          }),
          React.createElement(ClockPointer$1, {
            max: type === HOURS ? 12 : 60,
            hasSelected: this.hasSelected(),
            value: value
          }),
          children
        )
      );
    }
  }]);
  return Clock;
}(Component);

Clock.propTypes = {
  type: PropTypes.oneOf(Object.values(clockType)).isRequired,
  classes: PropTypes.object.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired
};
var styles$8 = function styles() {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: 40
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
    },
    squareMask: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      pointerEvents: 'auto',
      outline: 'none'
    }
  };
};

var Clock$1 = withStyles(styles$8, { name: 'MuiPickersClock' })(Clock);

var positions = [[0, 5], [55, 19.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];

var ClockNumber = function (_Component) {
  inherits(ClockNumber, _Component);

  function ClockNumber() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, ClockNumber);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ClockNumber.__proto__ || Object.getPrototypeOf(ClockNumber)).call.apply(_ref, [this].concat(args))), _this), _this.getTransformStyle = function (index) {
      var position = positions[index];

      return {
        transform: 'translate(' + position[0] + 'px, ' + position[1] + 'px'
      };
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(ClockNumber, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          selected = _props.selected,
          label = _props.label,
          index = _props.index,
          classes = _props.classes;


      var className = classnames(classes.clockNumber, defineProperty({}, classes.selected, selected));

      return React.createElement(
        'div',
        {
          className: className,
          style: this.getTransformStyle(index)
        },
        label
      );
    }
  }]);
  return ClockNumber;
}(Component);

ClockNumber.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
};
var styles$10 = function styles(theme) {
  return {
    clockNumber: {
      width: 32,
      height: 32,
      position: 'absolute',
      left: 'calc(50% - 16px)',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    selected: {
      color: 'white'
    }
  };
};

var ClockNumber$1 = withStyles(styles$10, { name: 'MuiPickersClockNumber' })(ClockNumber);

var HourView = function (_PureComponent) {
  inherits(HourView, _PureComponent);

  function HourView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, HourView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HourView.__proto__ || Object.getPrototypeOf(HourView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (hours, isFinish) {
      var updatedTime = _this.props.date.clone().hour(hours);

      _this.props.onChange(updatedTime, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(HourView, [{
    key: 'render',
    value: function render() {
      var date = this.props.date;


      var value = date.get('hours');
      var ampmValue = Number(date.format('hh'));

      return React.createElement(
        Clock$1,
        {
          type: HOURS,
          onChange: this.handleChange,
          value: value
        },
        React.createElement(ClockNumber$1, { label: '12', selected: ampmValue === 12, index: 0 }),
        React.createElement(ClockNumber$1, { label: '1', selected: ampmValue === 1, index: 1 }),
        React.createElement(ClockNumber$1, { label: '2', selected: ampmValue === 2, index: 2 }),
        React.createElement(ClockNumber$1, { label: '3', selected: ampmValue === 3, index: 3 }),
        React.createElement(ClockNumber$1, { label: '4', selected: ampmValue === 4, index: 4 }),
        React.createElement(ClockNumber$1, { label: '5', selected: ampmValue === 5, index: 5 }),
        React.createElement(ClockNumber$1, { label: '6', selected: ampmValue === 6, index: 6 }),
        React.createElement(ClockNumber$1, { label: '7', selected: ampmValue === 7, index: 7 }),
        React.createElement(ClockNumber$1, { label: '8', selected: ampmValue === 8, index: 8 }),
        React.createElement(ClockNumber$1, { label: '9', selected: ampmValue === 9, index: 9 }),
        React.createElement(ClockNumber$1, { label: '10', selected: ampmValue === 10, index: 10 }),
        React.createElement(ClockNumber$1, { label: '11', selected: ampmValue === 11, index: 11 })
      );
    }
  }]);
  return HourView;
}(PureComponent);

HourView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

var MinutesView = function (_Component) {
  inherits(MinutesView, _Component);

  function MinutesView() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, MinutesView);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = MinutesView.__proto__ || Object.getPrototypeOf(MinutesView)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (minutes, isFinish) {
      var updatedDate = _this.props.date.clone().minutes(minutes);
      _this.props.onChange(updatedDate, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(MinutesView, [{
    key: 'render',
    value: function render() {
      var value = this.props.date.get('minutes');

      return React.createElement(
        Clock$1,
        {
          type: MINUTES,
          onChange: this.handleChange,
          value: value
        },
        React.createElement(ClockNumber$1, { label: '00', selected: value === 0, index: 0 }),
        React.createElement(ClockNumber$1, { label: '05', selected: value === 5, index: 1 }),
        React.createElement(ClockNumber$1, { label: '10', selected: value === 10, index: 2 }),
        React.createElement(ClockNumber$1, { label: '15', selected: value === 15, index: 3 }),
        React.createElement(ClockNumber$1, { label: '20', selected: value === 20, index: 4 }),
        React.createElement(ClockNumber$1, { label: '25', selected: value === 25, index: 5 }),
        React.createElement(ClockNumber$1, { label: '30', selected: value === 30, index: 6 }),
        React.createElement(ClockNumber$1, { label: '35', selected: value === 35, index: 7 }),
        React.createElement(ClockNumber$1, { label: '40', selected: value === 40, index: 8 }),
        React.createElement(ClockNumber$1, { label: '45', selected: value === 45, index: 9 }),
        React.createElement(ClockNumber$1, { label: '50', selected: value === 50, index: 10 }),
        React.createElement(ClockNumber$1, { label: '55', selected: value === 55, index: 11 })
      );
    }
  }]);
  return MinutesView;
}(Component);

MinutesView.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

var TimePicker = function (_Component) {
  inherits(TimePicker, _Component);

  function TimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TimePicker.__proto__ || Object.getPrototypeOf(TimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isHourViewShown: true,
      meridiemMode: _this.props.date.format('a')
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(false)(_this.props.date, false);
        });
      };
    }, _this.handleChange = function (openMinutes) {
      return function (time, isFinish) {
        var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode);

        if (isFinish) {
          if (!openMinutes) {
            _this.props.onChange(withMeridiem, isFinish);
            return;
          }

          _this.openMinutesView();
        }

        _this.props.onChange(withMeridiem, false);
      };
    }, _this.openMinutesView = function () {
      _this.setState({ isHourViewShown: false });
    }, _this.openHourView = function () {
      _this.setState({ isHourViewShown: true });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(TimePicker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          date = _props.date;
      var _state = this.state,
          isHourViewShown = _state.isHourViewShown,
          meridiemMode = _state.meridiemMode;


      return React.createElement(
        'div',
        { className: classes.container },
        React.createElement(
          PickerToolbar$1,
          { className: classes.toolbar },
          React.createElement(ToolbarButton$1, {
            type: 'display3',
            onClick: this.openHourView,
            selected: isHourViewShown,
            label: date.format('hh')
          }),
          React.createElement(ToolbarButton$1, {
            type: 'display3',
            label: ':',
            selected: false,
            className: classes.separator
          }),
          React.createElement(ToolbarButton$1, {
            type: 'display3',
            onClick: this.openMinutesView,
            selected: !isHourViewShown,
            label: date.format('mm')
          }),
          React.createElement(
            'div',
            { className: classes.ampmSelection },
            React.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'am',
              type: 'subheading',
              label: 'AM',
              onClick: this.setMeridiemMode('am')
            }),
            React.createElement(ToolbarButton$1, {
              className: classes.ampmLabel,
              selected: meridiemMode === 'pm',
              type: 'subheading',
              label: 'PM',
              onClick: this.setMeridiemMode('pm')
            })
          )
        ),
        this.props.children,
        isHourViewShown ? React.createElement(HourView, {
          date: date,
          meridiemMode: meridiemMode,
          onChange: this.handleChange(true)
        }) : React.createElement(MinutesView, {
          date: date,
          onChange: this.handleChange(false)
        })
      );
    }
  }]);
  return TimePicker;
}(Component);

TimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
};
TimePicker.defaultProps = {
  children: null
};
var styles$7 = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 50
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 20,
      marginRight: -20
    },
    ampmLabel: {
      fontSize: 18
    }
  };
};

var TimePicker$1 = withStyles(styles$7, { name: 'MuiPickersTimePicker' })(TimePicker);

var TimePickerWrapper = function (_PickerBase) {
  inherits(TimePickerWrapper, _PickerBase);

  function TimePickerWrapper() {
    classCallCheck(this, TimePickerWrapper);
    return possibleConstructorReturn(this, (TimePickerWrapper.__proto__ || Object.getPrototypeOf(TimePickerWrapper)).apply(this, arguments));
  }

  createClass(TimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          onChange = _props.onChange,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'onChange', 'returnMoment', 'invalidLabel']);


      return React.createElement(
        ModalWrapper,
        _extends({
          ref: function ref(node) {
            _this2.wrapper = node;
          },
          value: value,
          format: format,
          onAccept: this.handleAccept,
          onDismiss: this.handleDismiss,
          invalidLabel: invalidLabel
        }, other),
        React.createElement(TimePicker$1, {
          date: date,
          onChange: this.handleChange
        })
      );
    }
  }]);
  return TimePickerWrapper;
}(PickerBase);

TimePickerWrapper.propTypes = {
  value: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  returnMoment: PropTypes.bool,
  invalidLabel: PropTypes.string
};
TimePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'hh:mm A',
  autoOk: false,
  returnMoment: true,
  invalidLabel: undefined
};

var DateTimePickerView = function DateTimePickerView(props) {
  var view = props.view,
      selected = props.selected,
      children = props.children,
      classes = props.classes;


  if (view !== selected) {
    return null;
  }

  return React.createElement(
    'div',
    { className: classnames(defineProperty({}, classes.hidden, view !== selected)) },
    children
  );
};

DateTimePickerView.propTypes = {
  view: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired
};

var styles$13 = {};

var View = withStyles(styles$13, { name: 'MuiPickerDTPickerView ' })(DateTimePickerView);

var YEAR = 'year';

var DATE = 'date';

var HOUR = 'hour';

var MINUTES$1 = 'minutes';

var viewType = Object.freeze({
	YEAR: YEAR,
	DATE: DATE,
	HOUR: HOUR,
	MINUTES: MINUTES$1
});

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === DATE || openView === YEAR) {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return DATE;
  }

  return HOUR;
};

var DateTimePickerTabs = function DateTimePickerTabs(props) {
  var view = props.view,
      onChange = props.onChange,
      classes = props.classes,
      theme = props.theme,
      dateRangeIcon = props.dateRangeIcon,
      timeIcon = props.timeIcon;


  var indicatorColor = theme.palette.type === 'light' ? 'accent' : 'primary';
  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return React.createElement(
    Paper,
    null,
    React.createElement(
      Tabs,
      {
        fullWidth: true,
        value: viewToTabIndex(view),
        onChange: handleChange,
        className: classes.tabs,
        indicatorColor: indicatorColor
      },
      React.createElement(Tab, { value: 'date', icon: dateRangeIcon }),
      React.createElement(Tab, { value: 'time', icon: timeIcon })
    )
  );
};

DateTimePickerTabs.propTypes = {
  view: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node
};

DateTimePickerTabs.defaultProps = {
  dateRangeIcon: 'date_range',
  timeIcon: 'access_time'
};

var styles$14 = function styles(theme) {
  return {
    tabs: {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary[500] : theme.palette.background.default
    }
  };
};

var DateTimePickerTabs$1 = withTheme()(withStyles(styles$14, { name: 'MuiPickerDTTabs' })(DateTimePickerTabs));

var DateTimePickerHeader = function DateTimePickerHeader(props) {
  var date = props.date,
      classes = props.classes,
      openView = props.openView,
      meridiemMode = props.meridiemMode,
      onOpenViewChange = props.onOpenViewChange,
      setMeridiemMode = props.setMeridiemMode;


  var changeOpenView = function changeOpenView(view) {
    return function () {
      return onOpenViewChange(view);
    };
  };

  return React.createElement(
    PickerToolbar$1,
    { className: classes.toolbar },
    React.createElement(
      'div',
      { className: classes.dateHeader },
      React.createElement(ToolbarButton$1, {
        type: 'subheading',
        onClick: changeOpenView(YEAR),
        selected: openView === YEAR,
        label: date.format('YYYY')
      }),
      React.createElement(ToolbarButton$1, {
        type: 'display1',
        onClick: changeOpenView(DATE),
        selected: openView === DATE,
        label: date.format('MMM DD')
      })
    ),
    React.createElement(
      'div',
      { className: classes.timeHeader },
      React.createElement(ToolbarButton$1, {
        type: 'display2',
        onClick: changeOpenView(HOUR),
        selected: openView === HOUR,
        label: date.format('hh')
      }),
      React.createElement(ToolbarButton$1, {
        type: 'display2',
        label: ':',
        selected: false,
        className: classes.separator
      }),
      React.createElement(ToolbarButton$1, {
        type: 'display2',
        onClick: changeOpenView(MINUTES$1),
        selected: openView === MINUTES$1,
        label: date.format('mm')
      }),
      React.createElement(
        'div',
        { className: classes.ampmSelection },
        React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'am',
          type: 'subheading',
          label: 'AM',
          onClick: setMeridiemMode('am')
        }),
        React.createElement(ToolbarButton$1, {
          className: classes.ampmLabel,
          selected: meridiemMode === 'pm',
          type: 'subheading',
          label: 'PM',
          onClick: setMeridiemMode('pm')
        })
      )
    )
  );
};

DateTimePickerHeader.propTypes = {
  date: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  meridiemMode: PropTypes.string.isRequired,
  openView: PropTypes.string.isRequired,
  onOpenViewChange: PropTypes.func.isRequired,
  setMeridiemMode: PropTypes.func.isRequired
};

var styles$15 = function styles() {
  return {
    toolbar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    ampmSelection: {
      marginLeft: 10,
      marginRight: -10
    },
    ampmLabel: {
      fontSize: 18
    },
    dateHeader: {
      width: '42%',
      height: 65
    },
    timeHeader: {
      height: 65,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end'
    }
  };
};

var DatetimePickerHeader = withStyles(styles$15)(DateTimePickerHeader);

var DateTimePicker = function (_Component) {
  inherits(DateTimePicker, _Component);

  function DateTimePicker() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, DateTimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      openView: _this.props.openTo,
      meridiemMode: _this.props.date.format('a')
    }, _this.onChange = function (nextView) {
      return function (time) {
        var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

        _this.handleChange(time);

        if (isFinish && _this.props.autoSubmit) {
          _this.handleViewChange(nextView);
        }
      };
    }, _this.setMeridiemMode = function (mode) {
      return function () {
        _this.setState({ meridiemMode: mode }, function () {
          return _this.handleChange(_this.props.date, false);
        });
      };
    }, _this.handleViewChange = function (view) {
      _this.setState({ openView: view });
    }, _this.handleChange = function (time) {
      var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var withMeridiem = convertToMeridiem(time, _this.state.meridiemMode);
      _this.props.onChange(withMeridiem, isFinish);
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(DateTimePicker, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          openView = _state.openView,
          meridiemMode = _state.meridiemMode;
      var _props = this.props,
          date = _props.date,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          disableFuture = _props.disableFuture,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay;


      return React.createElement(
        'div',
        null,
        React.createElement(DatetimePickerHeader, {
          date: date,
          openView: openView,
          meridiemMode: meridiemMode,
          setMeridiemMode: this.setMeridiemMode,
          onOpenViewChange: this.handleViewChange
        }),
        showTabs && React.createElement(DateTimePickerTabs$1, {
          view: openView,
          onChange: this.handleViewChange,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon
        }),
        React.createElement(
          View,
          { view: YEAR, selected: openView },
          React.createElement(YearSelection$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.onChange(DATE),
            disableFuture: disableFuture
          })
        ),
        React.createElement(
          View,
          { view: DATE, selected: openView },
          React.createElement(Calendar$1, {
            date: date,
            minDate: minDate,
            maxDate: maxDate,
            onChange: this.onChange(HOUR),
            disableFuture: disableFuture,
            leftArrowIcon: leftArrowIcon,
            rightArrowIcon: rightArrowIcon,
            renderDay: renderDay
          })
        ),
        React.createElement(
          View,
          { view: HOUR, selected: openView },
          React.createElement(HourView, {
            date: date,
            meridiemMode: meridiemMode,
            onChange: this.onChange(MINUTES$1)
          })
        ),
        React.createElement(
          View,
          { view: MINUTES$1, selected: openView },
          React.createElement(MinutesView, {
            date: date,
            onChange: this.handleChange
          })
        )
      );
    }
  }]);
  return DateTimePicker;
}(Component);

DateTimePicker.propTypes = {
  date: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  autoSubmit: PropTypes.bool,
  openTo: PropTypes.oneOf(Object.values(viewType)),
  disableFuture: PropTypes.bool,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func
};
DateTimePicker.defaultProps = {
  minDate: '1900-01-01',
  maxDate: '2100-01-01',
  autoSubmit: true,
  openTo: DATE,
  disableFuture: false,
  showTabs: true,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined
};
var styles$12 = function styles() {
  return {};
};

var DateTimePicker$1 = withStyles(styles$12)(DateTimePicker);

var DateTimePickerWrapper = function (_PickerBase) {
  inherits(DateTimePickerWrapper, _PickerBase);

  function DateTimePickerWrapper() {
    classCallCheck(this, DateTimePickerWrapper);
    return possibleConstructorReturn(this, (DateTimePickerWrapper.__proto__ || Object.getPrototypeOf(DateTimePickerWrapper)).apply(this, arguments));
  }

  createClass(DateTimePickerWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var date = this.state.date;
      var _props = this.props,
          value = _props.value,
          format = _props.format,
          autoOk = _props.autoOk,
          openTo = _props.openTo,
          classes = _props.classes,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          showTabs = _props.showTabs,
          autoSubmit = _props.autoSubmit,
          disableFuture = _props.disableFuture,
          returnMoment = _props.returnMoment,
          invalidLabel = _props.invalidLabel,
          leftArrowIcon = _props.leftArrowIcon,
          rightArrowIcon = _props.rightArrowIcon,
          dateRangeIcon = _props.dateRangeIcon,
          timeIcon = _props.timeIcon,
          renderDay = _props.renderDay,
          labelFunc = _props.labelFunc,
          other = objectWithoutProperties(_props, ['value', 'format', 'autoOk', 'openTo', 'classes', 'minDate', 'maxDate', 'showTabs', 'autoSubmit', 'disableFuture', 'returnMoment', 'invalidLabel', 'leftArrowIcon', 'rightArrowIcon', 'dateRangeIcon', 'timeIcon', 'renderDay', 'labelFunc']);


      var dialogClassName = classnames(classes.dialogContent, defineProperty({}, classes.noTabs, !showTabs));

      return React.createElement(
        ModalWrapper,
        _extends({
          ref: function ref(node) {
            _this2.wrapper = node;
          },
          value: value,
          format: format,
          onAccept: this.handleAccept,
          onDismiss: this.handleDismiss,
          dialogContentClassName: dialogClassName,
          invalidLabel: invalidLabel,
          labelFunc: labelFunc
        }, other),
        React.createElement(DateTimePicker$1, {
          date: date,
          openTo: openTo,
          autoSubmit: autoSubmit,
          onChange: this.handleChange,
          disableFuture: disableFuture,
          minDate: minDate,
          maxDate: maxDate,
          showTabs: showTabs,
          leftArrowIcon: leftArrowIcon,
          rightArrowIcon: rightArrowIcon,
          dateRangeIcon: dateRangeIcon,
          timeIcon: timeIcon,
          renderDay: renderDay
        })
      );
    }
  }]);
  return DateTimePickerWrapper;
}(PickerBase);

DateTimePickerWrapper.propTypes = {
  value: DomainPropTypes.date,
  format: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoOk: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  autoSubmit: PropTypes.bool,
  disableFuture: PropTypes.bool,
  openTo: PropTypes.string,
  minDate: DomainPropTypes.date,
  maxDate: DomainPropTypes.date,
  showTabs: PropTypes.bool,
  returnMoment: PropTypes.bool,
  invalidLabel: PropTypes.string,
  leftArrowIcon: PropTypes.node,
  rightArrowIcon: PropTypes.node,
  dateRangeIcon: PropTypes.node,
  timeIcon: PropTypes.node,
  renderDay: PropTypes.func,
  labelFunc: PropTypes.func
};
DateTimePickerWrapper.defaultProps = {
  value: new Date(),
  format: 'MMMM Do hh:mm a',
  autoOk: false,
  autoSubmit: undefined,
  openTo: undefined,
  disableFuture: undefined,
  minDate: undefined,
  maxDate: undefined,
  showTabs: true,
  returnMoment: true,
  invalidLabel: undefined,
  leftArrowIcon: undefined,
  rightArrowIcon: undefined,
  dateRangeIcon: undefined,
  timeIcon: undefined,
  renderDay: undefined,
  labelFunc: undefined
};
var styles$11 = {
  dialogContent: {
    height: 470,
    width: 310
  },
  noTabs: {
    height: 422
  }
};

var DateTimePickerWrapper$1 = withStyles(styles$11, { name: 'MuiPickerDTPickerModal' })(DateTimePickerWrapper);

export { DatePickerWrapper as DatePicker, TimePickerWrapper as TimePicker, DateTimePickerWrapper$1 as DateTimePicker };
//# sourceMappingURL=material-ui-pickers.es.js.map
