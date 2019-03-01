(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _component_service_dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/service/dataservice */ "./src/app/component/service/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        // this.sub = this.dataService.getQuotes()
        //     .subscribe(quote => {
        //       console.log(quote);
        //     });
        this.dataService = dataService;
        this.contactList = [];
        this.calendarDate = new Date();
        this.calendarDate = new Date(1551697131284);
        this.events = [
            {
                "title": "Kubernetes Workshop",
                "start": "2019-02-25T11:00:00",
                "end": "2019-03-02T14:00:00"
            },
            {
                "title": "Microservice Workshop",
                "start": "2019-02-25T03:00:00",
                "end": "2019-03-03T06:00:00"
            },
            {
                "title": "Docker Workshop",
                "start": "2019-03-07",
                "end": "2019-03-09"
            },
            {
                "title": "Kubernetes Workshop",
                "start": "2019-03-11",
                "end": "2019-03-12"
            },
            {
                "title": "Microservice Workshop",
                "start": "2019-03-13",
                "end": "2019-03-14"
            },
            {
                "title": "Docker Workshop",
                "start": "2019-03-17",
                "end": "2019-03-18"
            },
            {
                "title": "Amexio Meetup",
                "start": "2019-03-25T18:00:00",
                "end": "2019-03-25T20:00:00"
            },
            {
                "title": "Angular Event",
                "start": "2019-03-27T11:25:00",
                "end": "2019-03-27T12:25:00"
            },
            {
                "title": "Amexio Meetup",
                "start": "2019-03-16T11:00:00",
                "end": "2019-03-16T12:30:00"
            },
            {
                "title": "Amexio Meetup ",
                "start": "2019-02-22T18:25:00",
                "end": "2019-02-22T21:25:00"
            },
            {
                "title": "121 Conference",
                "start": "2019-04-12",
                "end": "2019-04-13"
            },
            {
                "title": "122 Conference",
                "start": "2019-05-22",
                "end": "2019-05-24"
            },
            {
                "title": "All Hands Meeting",
                "start": "2019-02-28T10:15:00",
                "end": "2019-02-28T10:30:00"
            },
            {
                "title": "All Hands Meeting",
                "start": "2019-04-30T10:15:00",
                "end": "2019-04-30T10:30:00"
            },
            {
                "title": "All Hands Meeting",
                "start": "2019-05-31T10:15:00",
                "end": "2019-05-31T10:30:00"
            },
            {
                "title": "Technology Conference",
                "start": "2019-03-05"
            },
            {
                "title": "All Hands Meeting",
                "start": "2019-03-22T10:15:00",
                "end": "2019-03-22T12:30:00"
            }
        ];
        // this.events = [
        // {
        //   "title": "Kubernetes Batch 1",
        //   "start": "2019-02-22T10:00:00",
        //   "end": "2019-02-25T13:00:00"
        // },
        // {
        //   "title": "Microservice Batch 1",
        //   "start": "2019-02-21T15:00:00",
        //   "end": "2019-02-23T18:00:00"
        // }
        // ];
        this.contactList = [
            {
                'name': 'Ketan Gote',
                'description': 'UI/UX, Microservice, Kubernetes, Docker ',
                'imagepath': 'https://i.ibb.co/zxvy25m/ketan.jpg',
                'bgcolor': 'linear-gradient(40deg,#12c2e9, #ec38bc)'
            },
            {
                'name': 'Sagar Jadhav',
                'description': 'Angular, Java, Microservices',
                'imagepath': 'https://media.licdn.com/dms/image/C5103AQF3EDkCcxqsnQ/profile-displayphoto-shrink_100_100/0?e=1554336000&v=beta&t=RhxgAziI4yMWqftaeq6WPvMlSKJgWSzZH5c6H5zT6Yc',
                'bgcolor': 'linear-gradient(40deg,#141E30,#243B55)'
            },
            {
                'name': 'Dattaram Gawas',
                'description': 'UI / UX Desinger',
                'imagepath': 'https://i.ibb.co/J7QyC3g/dats.jpg',
                'bgcolor': 'linear-gradient(40deg,#a8ff78, #78ffd6)'
            },
            {
                'name': 'Rashmi Thakker',
                'description': 'UI Developer',
                'imagepath': 'https://i.ibb.co/cJSjBtd/rashmi.jpg',
                'bgcolor': 'linear-gradient(40deg,#457fca, #5691c8)'
            },
            {
                'name': 'Ashwini Agre',
                'description': 'UI Developer',
                'imagepath': 'https://i.ibb.co/th1kSKq/ashwini.jpg',
                'bgcolor': 'linear-gradient(40deg,#bc4e9c, #f80759)'
            },
            {
                'name': 'Deepali Arvind',
                'description': 'Security Analyst',
                'imagepath': 'https://i.ibb.co/3CTVNq8/dipali.jpg',
                'bgcolor': 'linear-gradient(40deg,#40E0D0, #FF0080)'
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var stompClient;
        var socket = new SockJS('http://localhost:8080/chat');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/messages', function (messageOutput) {
                console.log(messageOutput.body);
            });
        });
    };
    AppComponent.prototype.onEventClicked = function (event) {
        console.log(event);
    };
    AppComponent.prototype.setCalendarDate = function () {
        debugger;
        this.calendarDate = new Date(this.calendarDate.setMonth(this.calendarDate.getMonth() + 1));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_component_service_dataservice__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amexio-ng-extensions */ "./node_modules/amexio-ng-extensions/amexio-ng-extensions.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/calendar/calendar.component */ "./src/app/component/calendar/calendar.component.ts");
/* harmony import */ var _component_calendar_calendar_month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/calendar/calendar.month */ "./src/app/component/calendar/calendar.month.ts");
/* harmony import */ var _component_calendar_calendar_daytimewise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/calendar/calendar.daytimewise.component */ "./src/app/component/calendar/calendar.daytimewise.component.ts");
/* harmony import */ var _component_calendar_calendar_year_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/calendar/calendar.year.component */ "./src/app/component/calendar/calendar.year.component.ts");
/* harmony import */ var _component_service_dataservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/service/dataservice */ "./src/app/component/service/dataservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                // AmexioInputHelperComponent,
                // DropDownListComponent,
                // AmexioDropDownComponent1,
                // FilterPipe,
                // TextFieldComponent,
                // FormComponent,
                // AmexiotimelineComponent1,
                // AmexiotimelineeventComponent1,
                // FormGroupComponent,
                // AmexioCardCE,
                // AmexioCardCEBody,
                // AmexioCardCEHeader,
                // AmexioCardCEAction,
                // AmexioBadgeComponent,
                // DemoComponent,
                _component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["AmexioCalendarComponent1"],
                _component_calendar_calendar_month__WEBPACK_IMPORTED_MODULE_6__["AmexioCalendarMonthComponent1"],
                _component_calendar_calendar_daytimewise_component__WEBPACK_IMPORTED_MODULE_7__["AmexioCalendarDayTimeWiseComponent1"],
                _component_calendar_calendar_year_component__WEBPACK_IMPORTED_MODULE_8__["AmexioCalendarYearComponent1"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioWidgetModule"],
                amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["AmexioEnterpriseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [amexio_ng_extensions__WEBPACK_IMPORTED_MODULE_2__["DeviceQueryService"], _component_service_dataservice__WEBPACK_IMPORTED_MODULE_9__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/calendar/calendar.common.css":
/*!********************************************************!*\
  !*** ./src/app/component/calendar/calendar.common.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    table-layout: fixed;\n    border-collapse: collapse;\n    border-spacing: 0;\n    position: relative;\n    z-index: 1;\n}\n"

/***/ }),

/***/ "./src/app/component/calendar/calendar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/calendar/calendar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nbutton, em {\n    cursor: pointer;\n}\n "

/***/ }),

/***/ "./src/app/component/calendar/calendar.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/calendar/calendar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-header card-header\">\n    <div style=\"display: inline-flex;\">\n        <div *ngIf=\"(currentState === 'month')\"> {{currrentDate | date : 'MMMM, y'}} </div>\n        <div *ngIf=\"(currentState === 'week')\"> {{displayHeaders[0] | date : 'd MMM'}} -\n            {{displayHeaders[6] | date : 'd MMM'}} {{displayHeaders[6] | date : 'y'}} </div>\n        <div *ngIf=\"(currentState === 'day')\"> {{currrentDate | date : 'd MMMM, y'}} </div>\n        <div *ngIf=\"(currentState === 'year')\"> {{currrentDate | date : 'y'}} </div>\n\n        <div class=\"calendar-navigation\">\n            <em style=\"padding-right: 20px;\" class=\"fa fa-chevron-left\" aria-hidden=\"true\" (click)=\"previous()\"></em>\n            <em style=\"padding-right: 20px;\" class=\"fa fa-chevron-right\" aria-hidden=\"true\" (click)=\"next()\"></em>\n        </div>\n    </div>\n    <div>{{title}}</div>\n    <div>\n        <button (click)=\"setState('day')\">Day</button>\n        <button (click)=\"setState('week')\">Week</button>\n        <button (click)=\"setState('month')\">Month</button>\n        <button (click)=\"setState('year')\">Year</button>\n    </div>\n</div>\n<amexio-calendar-month1 *ngIf=\"(currentState === 'month')\" [headers]=\"displayHeaders\"\n    [calendar-data]=\"calendarMonthData\" [calendar-row]=\"calendarRow\" (onEventClicked)=\"onMonthEvent($event)\">\n</amexio-calendar-month1>\n<amexio-calendar-day-timewise1 (onHeaderClicked)=\"onDaytimeHeaderClick($event)\" *ngIf=\"(currentState === 'week' || currentState === 'day')\" [headers]=\"displayHeaders\"\n    [calendar-data]=\"calendarWeekData\" (onEventClicked)=\"onDayTimeWiseEvent($event)\"> </amexio-calendar-day-timewise1>\n<amexio-calendar-year1 *ngIf=\"(currentState === 'year')\" [headers]=\"displayHeaders\" [calendar-data]=\"calendarMonthData\"\n    (onHeaderClicked)=\"onYearHeaderClicked($event)\" (onEventClicked)=\"onYearEvent($event)\"> </amexio-calendar-year1>\n\n<pre>\n{{calendarMonthData|json}}    \n</pre>    "

/***/ }),

/***/ "./src/app/component/calendar/calendar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/calendar/calendar.component.ts ***!
  \**********************************************************/
/*! exports provided: AmexioCalendarComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioCalendarComponent1", function() { return AmexioCalendarComponent1; });
/* harmony import */ var _calendar_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar.const */ "./src/app/component/calendar/calendar.const.ts");
/* harmony import */ var _calendarevent_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendarevent.model */ "./src/app/component/calendar/calendarevent.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_dateutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dateutils */ "./src/app/component/utils/dateutils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmexioCalendarComponent1 = /** @class */ (function () {
    function AmexioCalendarComponent1() {
        this.displayHeaders = [];
        this.calendarMonthData = [];
        this.calendarWeekData = [];
        this.onEventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.currentState = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH;
        this.headertype = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].SHORT;
        this.currrentDate = new Date();
        this.events = [];
        this.adu = new _utils_dateutils__WEBPACK_IMPORTED_MODULE_3__["AmexioDateUtils"]();
        this.weekHeaders = { title: _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].ALL_DAY_TEXT, daywiseevent: null, time: null };
        this.eventColorGrouping = false;
    }
    Object.defineProperty(AmexioCalendarComponent1.prototype, "calendardate", {
        get: function () {
            return this._calenadrDate;
        },
        set: function (v) {
            debugger;
            if (v != null) {
                try {
                    this._calenadrDate = v;
                    console.log("In calendar date ", v);
                    this.currrentDate = new Date(v);
                    this.createData(this.currrentDate);
                }
                catch (e) {
                    console.log("Unable to parse date ", v);
                    this.currrentDate = new Date();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    AmexioCalendarComponent1.prototype.ngOnInit = function () {
        this.initCalendar();
    };
    AmexioCalendarComponent1.prototype.initCalendar = function () {
        this.validateEventData();
        this.createData(this.currrentDate);
    };
    AmexioCalendarComponent1.prototype.validateEventData = function () {
        var _this = this;
        var newEvents = [];
        var i = 1;
        this.events.forEach(function (event) {
            if ((event.start + '').indexOf('T') !== -1) {
                event.hasTimeSlot = true;
            }
            if (i > 9) {
                i = 1;
            }
            if (_this.eventColorGrouping) {
                event['eventclass'] = 'calendar-active-' + i;
            }
            if (event.end) {
                var events1 = _this.generatEventData(new Date(event.start), new Date(event.end));
                events1.forEach(function (event1) {
                    var newobj = Object.assign({}, event);
                    newobj.start = event1;
                    newEvents.push(newobj);
                });
            }
            i++;
        });
        newEvents.forEach(function (event) {
            _this.events.push(event);
        });
    };
    AmexioCalendarComponent1.prototype.assignColorToEvents = function () {
    };
    AmexioCalendarComponent1.prototype.generatEventData = function (startDate, endDate) {
        var event = [];
        var flag = false;
        while (startDate.getTime() <= endDate.getTime()) {
            if (flag) {
                event.push(new Date(startDate.getTime()));
            }
            flag = true;
            startDate.setDate(startDate.getDate() + 1);
        }
        return event;
    };
    AmexioCalendarComponent1.prototype.hasEvent = function (date) {
        var _this = this;
        var eventsData = [];
        var flag = { isEvent: false };
        if (this.events && this.events.length > 0) {
            this.events.forEach(function (event) {
                var eventStartDate = new Date(event.start);
                var isEvent = _this.adu.isDateEqual(date, eventStartDate);
                if (isEvent) {
                    eventsData.push(new _calendarevent_model__WEBPACK_IMPORTED_MODULE_1__["CalendarEventModel"](isEvent, event, event.title, event.hasTimeSlot, date, null));
                    flag.isEvent = isEvent;
                }
            });
        }
        flag['events'] = eventsData;
        return flag;
    };
    AmexioCalendarComponent1.prototype.createData = function (selectedPeriod) {
        if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH) {
            this.displayHeaders = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY_NAME[this.headertype];
            this.calendarMonthData = this.createDaysForCurrentMonths(selectedPeriod, this.currrentDate);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].WEEK || this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY) {
            var weekDays = [];
            if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].WEEK) {
                weekDays = this.adu.createDaysForWeek(selectedPeriod, this.currrentDate);
            }
            else {
                weekDays = [];
                weekDays.push(new Date(this.currrentDate.getTime()));
            }
            this.displayHeaders = weekDays;
            this.createDaysForCurrentWeek(selectedPeriod);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].YEAR) {
            this.displayHeaders = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY_NAME[_calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].SHORT];
            this.calendarMonthData = this.createYearData();
        }
    };
    AmexioCalendarComponent1.prototype.createYearData = function () {
        var yearData = [];
        var year = this.currrentDate.getUTCFullYear();
        var months = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH_NAME[_calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].FULL];
        for (var i = 0; i < months.length; i++) {
            var monthDate = new Date(year, i, 1);
            var monthData1 = this.createDaysForCurrentMonths(monthDate, new Date());
            yearData.push(Object.assign({}, { month: monthDate, title: months[i], data: monthData1 }));
        }
        return yearData;
    };
    AmexioCalendarComponent1.prototype.createDaysForCurrentMonths = function (selectedPeriod, currrentDate) {
        var _this = this;
        var calendarMonthData = [];
        var monthData = this.adu.createDaysForMonths(selectedPeriod, currrentDate);
        monthData.forEach(function (week) {
            var rowDays = [];
            week.forEach(function (day) {
                var eventDetails = _this.hasEvent(day.date);
                if (eventDetails && eventDetails.isEvent) {
                    day.eventDetails = eventDetails;
                    day.isEvent = eventDetails.isEvent;
                    debugger;
                }
                rowDays.push(day);
            });
            calendarMonthData.push(rowDays);
        });
        return calendarMonthData;
    };
    AmexioCalendarComponent1.prototype.createDaysForCurrentWeek = function (selectedPeriod) {
        var _this = this;
        this.calendarWeekData = [];
        var allday = Object.assign({}, this.weekHeaders);
        allday.daywiseevent = [];
        this.displayHeaders.forEach(function (date) {
            var eventDetails1 = _this.hasWeekEvent(date, true);
            var weekobj = Object.assign({}, _this.weekobject);
            weekobj.title = eventDetails1.title;
            weekobj.eventDateTime = date;
            weekobj.isEvent = eventDetails1.isEvent;
            weekobj.eventDetails = eventDetails1;
            allday.daywiseevent.push(weekobj);
        });
        this.calendarWeekData.push(allday);
        _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY_TIME_SERIES.forEach(function (time) {
            var dateTime = new Date();
            dateTime.setHours(time.hr, time.min);
            var daywiseevent = [];
            var timeDataDayWise = { title: time.hr + ':' + time.min, time: dateTime };
            _this.displayHeaders.forEach(function (day) {
                var dateTime1 = new Date(day.getTime());
                dateTime1.setHours(time.hr, time.min, 0);
                var eventDetails1 = _this.hasWeekEvent(dateTime1, false);
                var weekobj = {
                    title: eventDetails1.title, eventdatetime: dateTime1,
                    isEvent: eventDetails1.isEvent, eventDetails: eventDetails1,
                };
                if (weekobj.isEvent) {
                    debugger;
                }
                daywiseevent.push(weekobj);
            });
            timeDataDayWise['daywiseevent'] = daywiseevent;
            _this.calendarWeekData.push(timeDataDayWise);
        });
    };
    AmexioCalendarComponent1.prototype.hasWeekEvent = function (wsd, wholeday) {
        var _this = this;
        var adu = new _utils_dateutils__WEBPACK_IMPORTED_MODULE_3__["AmexioDateUtils"]();
        var weekDateSlotStart = adu.getDateWithSecondsZero(wsd.getTime());
        var weekDateSlotEnd = adu.getDateWithSecondsZero(weekDateSlotStart.getTime());
        weekDateSlotEnd.setHours(weekDateSlotEnd.getHours(), 59);
        var weekEventObject = Object.assign({}, this.weekobject);
        if (this.events && this.events.length > 0) {
            this.events.forEach(function (event) {
                var eventStartDate = adu.getDateWithSecondsZero(new Date(event.start).getTime());
                var isEvent = _this.isEventPresent(event, wholeday, eventStartDate, weekDateSlotEnd, weekDateSlotStart);
                if (event.hasTimeSlot && !wholeday && event.end && isEvent) {
                    var eventEndDate = adu.getDateWithSecondsZero(new Date(event.end).getTime());
                    debugger;
                    if (eventEndDate.getDate() > eventStartDate.getDate()) {
                        var ed = new Date(eventStartDate.getTime());
                        ed.setHours(eventEndDate.getHours());
                        weekEventObject.diff = ((ed.getTime() - eventStartDate.getTime()) / 1000) / 60;
                    }
                    else {
                        weekEventObject.diff = (((eventEndDate.getTime() - eventStartDate.getTime())
                            - (86400000 * Math.floor((eventEndDate - eventStartDate) / 86400000))) / 1000) / 60;
                    }
                    weekEventObject.diffwithslot = ((eventStartDate.getTime() - weekDateSlotStart.getTime()) / 1000) / 60;
                }
                if (isEvent && !weekEventObject.isEvent) {
                    weekEventObject.hasTimeSlot = event.hasTimeSlot;
                    weekEventObject.eventDateTime = eventStartDate;
                    weekEventObject.isEvent = isEvent;
                    weekEventObject.details = event;
                    weekEventObject.title = event.title;
                }
            });
        }
        return weekEventObject;
    };
    AmexioCalendarComponent1.prototype.isEventPresent = function (event, wholeday, eventStartDate, weekDateSlotEnd, weekDateSlotStart) {
        var isEvent = false;
        if (event.hasTimeSlot && !wholeday) {
            if (event.end) {
                isEvent = ((weekDateSlotEnd.getTime() > eventStartDate.getTime())
                    && (eventStartDate.getTime() >= weekDateSlotStart.getTime()));
            }
        }
        else if (wholeday && !event.hasTimeSlot) {
            isEvent = new _utils_dateutils__WEBPACK_IMPORTED_MODULE_3__["AmexioDateUtils"]().isDateEqual(eventStartDate, weekDateSlotStart);
        }
        return isEvent;
    };
    AmexioCalendarComponent1.prototype.getWeekObject = function (event, eventDateTime, isEvent, diff, diffwithslot) {
        var flag = Object.assign({}, this.weekobject);
        flag.hasTimeSlot = event.hasTimeSlot;
        flag.eventDateTime = eventDateTime;
        flag.isEvent = isEvent;
        flag.details = event;
        flag.title = event.title;
        flag.diff = diff;
        flag.diffwithslot = diff;
        return flag;
    };
    AmexioCalendarComponent1.prototype.setState = function (state) {
        this.currentState = state;
        this.currrentDate = new Date();
        this.createData(this.currrentDate);
        this.currrentDate = new Date();
    };
    AmexioCalendarComponent1.prototype.previous = function () {
        var newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH) {
            newDate.setMonth(newDate.getMonth() - 1);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].WEEK) {
            newDate = this.adu.getPrevSunday(newDate);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY) {
            newDate.setDate(newDate.getDate() - 1);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].YEAR) {
            newDate.setUTCFullYear(newDate.getUTCFullYear() - 1);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    };
    AmexioCalendarComponent1.prototype.next = function () {
        var newDate = new Date(this.currrentDate.getTime());
        if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH) {
            newDate.setMonth(newDate.getMonth() + 1);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].WEEK) {
            newDate = this.adu.getNextSunday(newDate);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY) {
            newDate.setDate(newDate.getDate() + 1);
        }
        else if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].YEAR) {
            newDate.setUTCFullYear(newDate.getUTCFullYear() + 1);
        }
        this.currrentDate = new Date(newDate);
        this.createData(this.currrentDate);
    };
    AmexioCalendarComponent1.prototype.onMonthEvent = function (event) {
        this.onEventClicked.emit(event);
    };
    AmexioCalendarComponent1.prototype.onDayTimeWiseEvent = function (event) {
        this.onEventClicked.emit(event);
    };
    AmexioCalendarComponent1.prototype.onYearEvent = function (event) {
        this.navigateToDayMode(event.this.date);
    };
    AmexioCalendarComponent1.prototype.onDaytimeHeaderClick = function (event) {
        if (this.currentState === _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].WEEK) {
            this.navigateToDayMode(event);
        }
    };
    AmexioCalendarComponent1.prototype.onYearHeaderClicked = function (event) {
        this.currrentDate = new Date(event.month);
        this.currentState = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].MONTH;
        this.createData(this.currrentDate);
    };
    AmexioCalendarComponent1.prototype.navigateToDayMode = function (date) {
        this.currentState = _calendar_const__WEBPACK_IMPORTED_MODULE_0__["CALENDAR"].DAY;
        this.currrentDate = new Date(date);
        this.createData(this.currrentDate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('header-type'),
        __metadata("design:type", String)
    ], AmexioCalendarComponent1.prototype, "headertype", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('events'),
        __metadata("design:type", Array)
    ], AmexioCalendarComponent1.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('title'),
        __metadata("design:type", String)
    ], AmexioCalendarComponent1.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('event-color-grouping'),
        __metadata("design:type", Boolean)
    ], AmexioCalendarComponent1.prototype, "eventColorGrouping", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])('calendar-date'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], AmexioCalendarComponent1.prototype, "calendardate", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('onEventClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarComponent1.prototype, "onEventClicked", void 0);
    AmexioCalendarComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'amexio-calendar1',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/component/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/component/calendar/calendar.component.css"), __webpack_require__(/*! ./calendar.common.css */ "./src/app/component/calendar/calendar.common.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AmexioCalendarComponent1);
    return AmexioCalendarComponent1;
}());



/***/ }),

/***/ "./src/app/component/calendar/calendar.const.ts":
/*!******************************************************!*\
  !*** ./src/app/component/calendar/calendar.const.ts ***!
  \******************************************************/
/*! exports provided: CALENDAR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALENDAR", function() { return CALENDAR; });
var CALENDAR = {
    ALL_DAY_TEXT: 'all-day',
    YEAR: 'year',
    MONTH: 'month',
    WEEK: 'week',
    DAY: 'day',
    FULL: 'full',
    SHORT: 'short',
    MIN: 'min',
    DAY_NAME: {
        full: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        short: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        min: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    },
    MONTH_NAME: {
        full: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'],
        short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        min: ['Ja', 'Fe', 'Ma', 'Ap', 'Ma', 'Jun', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
    },
    DAY_TIME_SERIES_WITH_30: [{ hr: 0, min: 0 }, { hr: 0, min: 30 }, { hr: 1, min: 0 }, { hr: 1, min: 30 },
        { hr: 2, min: 0 }, { hr: 2, min: 30 }, { hr: 3, min: 0 }, { hr: 3, min: 30 }, { hr: 4, min: 0 },
        { hr: 4, min: 30 }, { hr: 5, min: 0 }, { hr: 5, min: 30 }, { hr: 6, min: 0 }, { hr: 6, min: 30 },
        { hr: 7, min: 0 }, { hr: 7, min: 30 }, { hr: 8, min: 0 }, { hr: 8, min: 30 }, { hr: 9, min: 0 },
        { hr: 9, min: 30 }, { hr: 10, min: 0 }, { hr: 10, min: 30 }, { hr: 11, min: 0 }, { hr: 11, min: 30 },
        { hr: 12, min: 0 }, { hr: 12, min: 30 }, { hr: 13, min: 0 }, { hr: 13, min: 30 }, { hr: 14, min: 0 },
        { hr: 14, min: 30 }, { hr: 15, min: 0 }, { hr: 15, min: 30 }, { hr: 16, min: 0 }, { hr: 16, min: 30 },
        { hr: 17, min: 0 }, { hr: 17, min: 30 }, { hr: 18, min: 0 }, { hr: 18, min: 30 }, { hr: 19, min: 0 },
        { hr: 19, min: 30 }, { hr: 20, min: 0 }, { hr: 20, min: 30 }, { hr: 21, min: 0 }, { hr: 21, min: 30 },
        { hr: 22, min: 0 }, { hr: 22, min: 30 }, { hr: 23, min: 0 }, { hr: 23, min: 30 }, { hr: 24, min: 0 }],
    DAY_TIME_SERIES: [{ hr: 0, min: 0 }, { hr: 1, min: 0 }, { hr: 2, min: 0 }, { hr: 3, min: 0 },
        { hr: 4, min: 0 }, { hr: 5, min: 0 }, { hr: 6, min: 0 }, { hr: 7, min: 0 }, { hr: 8, min: 0 },
        { hr: 9, min: 0 }, { hr: 10, min: 0 }, { hr: 11, min: 0 }, { hr: 12, min: 0 }, { hr: 13, min: 0 },
        { hr: 14, min: 0 }, { hr: 15, min: 0 }, { hr: 16, min: 0 }, { hr: 17, min: 0 }, { hr: 18, min: 0 },
        { hr: 19, min: 0 }, { hr: 20, min: 0 }, { hr: 21, min: 0 }, { hr: 22, min: 0 }, { hr: 23, min: 0 },
        { hr: 24, min: 0 }],
};


/***/ }),

/***/ "./src/app/component/calendar/calendar.daytimewise.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/calendar/calendar.daytimewise.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table  (window:resize)=\"onResize()\" >\n    <thead>\n        <tr>\n            <td [attr.colspan]=\"headers.length\">\n                <table>\n                    <tr #headerRow>\n                        <td class=\"calendar-header-items calendar-user-active-timeslot\" style=\"width:50px;\"> &nbsp;</td>\n                        <td class=\"calendar-header-items\" style=\"cursor: pointer;\" (click)=\"onHeaderClick(header)\" *ngFor=\"let header of headers\">\n                            <span>{{header | date : 'EE'}}</span> <br />\n                            <b style=\"font-size:20px;\">{{header | date : 'd'}}</b>\n                        </td>\n                    </tr>\n                </table>\n            </td>\n        </tr>\n    </thead>\n\n    <tbody>\n        <tr>\n            <td class=\"calendar-mainbox\" [attr.colspan]=\"headers.length\">\n                <div class=\"calendar-scroller\">\n                    <div style=\"width: 100%; position: relative;\">\n                        <div class=\"calendar-bg\">\n                            <table>\n                                <tr *ngFor=\"let calendarRow of calendaryData\">\n\n                                    <td class=\"calendar-header-items calendar-week-timeslot\" style=\"width:50px;\">\n                                        <div style=\"min-height: 50px;\" *ngIf=\"(calendarRow.time==null)\">\n                                            {{calendarRow.title}}\n                                        </div>\n                                        <div class=\"calendar-week-timeslotseries-div\"\n                                            *ngIf=\"(calendarRow.time && calendarRow.time!=null)\">\n                                            {{ calendarRow.time | date:'hh:mm a' }}\n                                        </div>\n                                    </td>\n\n                                    <td style=\"padding-bottom: 0px;\"\n                                        [ngStyle]=\"{'padding-top': (day.isEvent && day.eventDetails && day.eventDetails.diffwithslot) ? day.eventDetails.diffwithslot+'px' : '0px'}\"\n                                        class=\"calendar-box-items\" \n                                        *ngFor=\"let day of calendarRow.daywiseevent\">\n\n                                        <div (click)=\"eventClicked($event,day)\"  [class]=\"'calendar-week-day-timeslot' + '  '+((day.eventDetails.details && day.eventDetails.details.eventclass) ? day.eventDetails.details.eventclass:'') \"\n                                            \n                                            [ngClass]=\"{'calendar-week-active-timeslot': day.isEvent}\"\n                                            [ngStyle]=\"{'width':width+'px', 'height': (day.isEvent && day.eventDetails && day.eventDetails.diff) ? day.eventDetails.diff+'px' : null}\">\n                                            \n                                            <div *ngIf=\"day.isEvent\" class=\"calendar-user-active\"                                                \n                                                >\n                                                {{day.eventDetails.details.title}}<br />\n                                                <span class=\"calendar-user-active-timeslot\"\n                                                    *ngIf=\"(day.eventDetails.details && day.eventDetails.details.hasTimeSlot)\">\n                                                    {{day.eventDetails.details.start |  date: \"shortTime\"}}\n                                                    <ng-container\n                                                        *ngIf=\"(day.eventDetails.details && day.eventDetails.details.end)\">\n                                                        - {{day.eventDetails.details.end |  date: \"shortTime\"}}\n                                                    </ng-container>\n                                                </span>\n                                            </div>\n\n                                        </div>\n                                    </td>\n\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/component/calendar/calendar.daytimewise.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/calendar/calendar.daytimewise.component.ts ***!
  \**********************************************************************/
/*! exports provided: AmexioCalendarDayTimeWiseComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioCalendarDayTimeWiseComponent1", function() { return AmexioCalendarDayTimeWiseComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioCalendarDayTimeWiseComponent1 = /** @class */ (function () {
    function AmexioCalendarDayTimeWiseComponent1() {
        this.onEventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AmexioCalendarDayTimeWiseComponent1.prototype.ngOnInit = function () {
    };
    AmexioCalendarDayTimeWiseComponent1.prototype.onResize = function () {
        this.width = (this.headerRow.nativeElement.offsetWidth - 50) / 7;
        if ((this.width - 50) > 50) {
            this.width = this.width - 50;
        }
    };
    AmexioCalendarDayTimeWiseComponent1.prototype.eventClicked = function (event, eventData) {
        debugger;
        var eventObject = {
            event: event,
            this: eventData.eventDetails.details,
        };
        this.onEventClicked.emit(eventObject);
    };
    AmexioCalendarDayTimeWiseComponent1.prototype.onHeaderClick = function (event) {
        this.onHeaderClicked.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('headers'),
        __metadata("design:type", Array)
    ], AmexioCalendarDayTimeWiseComponent1.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('calendar-data'),
        __metadata("design:type", Array)
    ], AmexioCalendarDayTimeWiseComponent1.prototype, "calendaryData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('headerRow'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AmexioCalendarDayTimeWiseComponent1.prototype, "headerRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEventClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarDayTimeWiseComponent1.prototype, "onEventClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onHeaderClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarDayTimeWiseComponent1.prototype, "onHeaderClicked", void 0);
    AmexioCalendarDayTimeWiseComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-calendar-day-timewise1',
            template: __webpack_require__(/*! ./calendar.daytimewise.component.html */ "./src/app/component/calendar/calendar.daytimewise.component.html"),
            styles: [__webpack_require__(/*! ./calendar.common.css */ "./src/app/component/calendar/calendar.common.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AmexioCalendarDayTimeWiseComponent1);
    return AmexioCalendarDayTimeWiseComponent1;
}());



/***/ }),

/***/ "./src/app/component/calendar/calendar.month.html":
/*!********************************************************!*\
  !*** ./src/app/component/calendar/calendar.month.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table>\n        <thead>\n            <tr>\n                <td [attr.colspan]=\"headers.length\">\n                    <table>\n                        <tr>\n                            <td class=\"calendar-header-items\" *ngFor=\"let header of headers\"> \n                                <b>{{header}}</b>\n                                <!-- <b *ngIf=\"(currentState === 'week')\">{{header | date : 'EEEE d'}}</b> -->\n                            </td>\n                        </tr>\n                    </table>\n                </td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr>\n                <td class=\"calendar-mainbox\" [attr.colspan]=\"headers.length\">\n                    <div class=\"calendar-scroller\">\n                        <div style=\"width: 100%; position: relative;\">\n                            <div style=\"min-height: 150px; position: relative;\" *ngFor=\"let calendarRow of calendaryData\">\n                                <div class=\"calendar-bg\">\n                                    <table>\n                                        <tr>\n                                            <td [ngClass]=\"{'calendar-active-box': day.isActive}\" class=\"calendar-box-items\"\n                                                *ngFor=\"let day of calendarRow\">\n                                                <span\n                                                    [ngClass]=\"{'calendar-inactive': !day.isActivePeriod}\">{{ day.date | date:'d' }}</span>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n                                <div class=\"calendar-user-content\">\n                                    <table>\n                                        <tr>\n                                            <td [ngClass]=\"{'calendar-user-active': (day.eventDetails && day.eventDetails.isEvent)}\"\n                                                *ngFor=\"let day of calendarRow\">\n                                                <ng-container *ngIf=\"(day.eventDetails && day.eventDetails.events)\">\n                                                    <ul class=\"calendar-ul\" >\n                                                        <li (click)=\"eventClicked($event,dayevent)\" [attr.class]=\"dayevent.details.eventclass\" class=\"calendar-li\" *ngFor=\"let dayevent of day.eventDetails.events\">\n                                                            <span class=\"calendar-user-active\"  \n                                                                *ngIf=\"dayevent.isEvent\">\n                                                                {{dayevent.details.title}}<br/>\n                                                                <span class=\"calendar-user-active-timeslot\"   \n                                                                *ngIf=\"(dayevent.details && dayevent.details.hasTimeSlot)\">\n                                                                {{dayevent.details.start |  date: \"shortTime\"}}\n                                                                <ng-container *ngIf=\"(dayevent.details && dayevent.details.end)\">\n                                                                    - {{dayevent.details.end |  date: \"shortTime\"}}\n                                                                </ng-container>\n                                                            </span>\n                                                            </span>\n                                                        </li>\n                                                    </ul>\n                                                </ng-container>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>"

/***/ }),

/***/ "./src/app/component/calendar/calendar.month.ts":
/*!******************************************************!*\
  !*** ./src/app/component/calendar/calendar.month.ts ***!
  \******************************************************/
/*! exports provided: AmexioCalendarMonthComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioCalendarMonthComponent1", function() { return AmexioCalendarMonthComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioCalendarMonthComponent1 = /** @class */ (function () {
    function AmexioCalendarMonthComponent1() {
        this.onEventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AmexioCalendarMonthComponent1.prototype.eventClicked = function (event, eventData) {
        var eventObject = {
            event: event,
            this: eventData.details
        };
        this.onEventClicked.emit(eventObject);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('headers'),
        __metadata("design:type", Array)
    ], AmexioCalendarMonthComponent1.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('calendar-data'),
        __metadata("design:type", Array)
    ], AmexioCalendarMonthComponent1.prototype, "calendaryData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('calendar-row'),
        __metadata("design:type", Array)
    ], AmexioCalendarMonthComponent1.prototype, "calendarRow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEventClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarMonthComponent1.prototype, "onEventClicked", void 0);
    AmexioCalendarMonthComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-calendar-month1',
            template: __webpack_require__(/*! ./calendar.month.html */ "./src/app/component/calendar/calendar.month.html"),
            styles: [__webpack_require__(/*! ./calendar.common.css */ "./src/app/component/calendar/calendar.common.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AmexioCalendarMonthComponent1);
    return AmexioCalendarMonthComponent1;
}());



/***/ }),

/***/ "./src/app/component/calendar/calendar.year.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/component/calendar/calendar.year.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-year\">\n    <div class=\"calendar-year-box\" *ngFor=\"let month of calendaryData\">\n        <div class=\"calendar-year-month\" >\n            <div style=\"cursor:pointer;\" (click)=\"monthClicked(month)\"><b>{{month.title}}</b> </div>\n            <table>\n                <thead>\n                    <tr>\n                        <td *ngFor=\"let header of headers\" style=\"text-align: center;\">\n                            {{header}}\n                        </td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let week of month.data\" class=\"calendar-week-timeslot\">\n                        <td [ngClass]=\"{'calendar-inactive': (!day.isActivePeriod),                                         \n                                        'calendar-year-month-hasevent': (day.isActivePeriod && day.isEvent)}\"\n                            (click)=\"eventClicked($event, day)\" *ngFor=\"let day of week\" style=\"text-align: center;\">\n                            <div [ngClass]=\"{'calendar-active-box calendar-year-month-today': (day.isActivePeriod && day.isActive)}\" style=\"height:30px; width: 30px;\" style=\"text-align: center; cursor: pointer;\">\n                                {{day.date | date :'dd'}}\n                            </div>\n                        </td>\n                    </tr>\n                    <tr></tr>\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/calendar/calendar.year.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/calendar/calendar.year.component.ts ***!
  \***************************************************************/
/*! exports provided: AmexioCalendarYearComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioCalendarYearComponent1", function() { return AmexioCalendarYearComponent1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AmexioCalendarYearComponent1 = /** @class */ (function () {
    function AmexioCalendarYearComponent1() {
        this.onEventClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHeaderClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AmexioCalendarYearComponent1.prototype.eventClicked = function (event, eventData) {
        var eventObject = {
            event: event,
            this: eventData
        };
        this.onEventClicked.emit(eventObject);
    };
    AmexioCalendarYearComponent1.prototype.monthClicked = function (event) {
        this.onHeaderClicked.emit(event);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('headers'),
        __metadata("design:type", Array)
    ], AmexioCalendarYearComponent1.prototype, "headers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('calendar-data'),
        __metadata("design:type", Array)
    ], AmexioCalendarYearComponent1.prototype, "calendaryData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onEventClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarYearComponent1.prototype, "onEventClicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onHeaderClicked'),
        __metadata("design:type", Object)
    ], AmexioCalendarYearComponent1.prototype, "onHeaderClicked", void 0);
    AmexioCalendarYearComponent1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'amexio-calendar-year1',
            template: __webpack_require__(/*! ./calendar.year.component.html */ "./src/app/component/calendar/calendar.year.component.html"),
            styles: [__webpack_require__(/*! ./calendar.common.css */ "./src/app/component/calendar/calendar.common.css")],
        }),
        __metadata("design:paramtypes", [])
    ], AmexioCalendarYearComponent1);
    return AmexioCalendarYearComponent1;
}());



/***/ }),

/***/ "./src/app/component/calendar/calendarevent.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/component/calendar/calendarevent.model.ts ***!
  \***********************************************************/
/*! exports provided: CalendarEventModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventModel", function() { return CalendarEventModel; });
var CalendarEventModel = /** @class */ (function () {
    function CalendarEventModel(isEvent, details, title, hasTimeSlot, eventDateTime, events) {
        this.isEvent = isEvent;
        this.details = details;
        this.title = title;
        this.hasTimeSlot = hasTimeSlot;
        this.eventDateTime = eventDateTime;
        this.events = events;
    }
    return CalendarEventModel;
}());



/***/ }),

/***/ "./src/app/component/service/dataservice.ts":
/*!**************************************************!*\
  !*** ./src/app/component/service/dataservice.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataService = /** @class */ (function () {
    function DataService() {
    }
    DataService.prototype.getQuotes = function () {
        var _this = this;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('http://localhost:8080/chat');
        this.socket.on('data', function (res) {
            _this.observer.next(res.data);
        });
        return this.createObservable();
    };
    DataService.prototype.createObservable = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.observer = observer;
        });
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Socket.io server error');
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/component/utils/dateutils.ts":
/*!**********************************************!*\
  !*** ./src/app/component/utils/dateutils.ts ***!
  \**********************************************/
/*! exports provided: AmexioDateUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmexioDateUtils", function() { return AmexioDateUtils; });
var AmexioDateUtils = /** @class */ (function () {
    function AmexioDateUtils() {
    }
    AmexioDateUtils.prototype.isDateEqual = function (d1, d2) {
        var date1 = new Date(d1.getTime());
        var date2 = new Date(d2.getTime());
        if (date1.getTime() === date2.getTime()) {
            return true;
        }
        else if ((date1.getUTCFullYear() === date2.getUTCFullYear()) && (date1.getMonth() === date2.getMonth()) && (date1.getDate() === date2.getDate())) {
            return true;
        }
        return false;
    };
    AmexioDateUtils.prototype.isDateGreaterThenEqualTO = function (d1, d2) {
        var date1 = new Date(d1.getTime());
        var date2 = new Date(d2.getTime());
        if (date1.getTime() >= date2.getTime()) {
            return true;
        }
        return false;
    };
    AmexioDateUtils.prototype.createDaysForMonths = function (selectedPeriod, currrentDate) {
        var calendaryData = [];
        var date = new Date(selectedPeriod.getFullYear(), selectedPeriod.getMonth(), 1, 0, 0, 0, 0); // Starting at the 1st of the month
        var extras = (date.getDay() + 6) % 7; // How many days of the last month do we need to include?
        date.setDate(date.getDate() - extras); // Skip back to the previous monday
        while (calendaryData.length < 6) {
            var rowDays = [];
            for (var i = 0; i < 7; i++) {
                var day = {
                    date: null, selected: false, isActivePeriod: null, isDisabled: false, isActive: false, isEvent: false, eventDetails: null,
                };
                day.date = new Date(date.getTime());
                day.isActivePeriod = (date.getMonth() === selectedPeriod.getMonth());
                day.isActive = this.isDateEqual(day.date, new Date());
                if (day.isActive) {
                    debugger;
                }
                rowDays.push(day);
                date.setDate(date.getDate() + 1);
            }
            calendaryData.push(rowDays);
        }
        return calendaryData;
    };
    AmexioDateUtils.prototype.createDaysForWeek = function (selectedPeriod, currrentDate) {
        var calendaryData = [];
        var date = this.getMonday(selectedPeriod);
        for (var i = 0; i < 7; i++) {
            var day = {
                date: null, selected: false, isActivePeriod: null, isDisabled: false, isActive: false, isEvent: false, eventDetails: null,
            };
            day.date = new Date(date.getTime());
            day.isActivePeriod = (date.getMonth() === selectedPeriod.getMonth());
            day.isActive = this.isDateEqual(day.date, currrentDate);
            calendaryData.push(day.date);
            date.setDate(date.getDate() + 1);
        }
        return calendaryData;
    };
    AmexioDateUtils.prototype.getMonday = function (date) {
        if (date) {
            var day = date.getDay() || 7;
            if (day !== 1) {
                date.setHours(-24 * (day - 1));
            }
        }
        return date;
    };
    AmexioDateUtils.prototype.getWeekSunday = function (date) {
        if (date.getDay() === 0) {
            return date;
        }
        else {
            var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
            var monday = new Date(date.setDate(diff));
            return new Date(monday.setDate(monday.getDate() - 1));
        }
    };
    AmexioDateUtils.prototype.getNextSunday = function (date) {
        var currentSunday = this.getWeekSunday(date);
        currentSunday.setDate(currentSunday.getDate() + 7);
        return new Date(currentSunday.getTime());
    };
    AmexioDateUtils.prototype.getPrevSunday = function (date) {
        var currentSunday = this.getWeekSunday(date);
        currentSunday.setDate(currentSunday.getDate() - 7);
        return new Date(currentSunday.getTime());
    };
    AmexioDateUtils.prototype.isBetween = function (date, startDate, endDate) {
        endDate.setSeconds(0);
        startDate.setSeconds(0);
        date.setSeconds(0);
        startDate.setMilliseconds(0);
        endDate.setMilliseconds(0);
        date.setMilliseconds(0);
        if (date.getTime() > startDate.getTime() && date.getTime() < endDate.getTime()) {
            return true;
        }
        return false;
    };
    AmexioDateUtils.prototype.getDateWithSecondsZero = function (longdate) {
        var date = new Date(longdate);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date;
    };
    AmexioDateUtils.prototype.getDaysInMonth = function (month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    };
    return AmexioDateUtils;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ketangote/workspace_ui_amexio/amexiornd/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map