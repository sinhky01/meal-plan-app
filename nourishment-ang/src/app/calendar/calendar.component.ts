import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { CalendarService } from '../calendar.service';
import { Meal } from '../meal';
import { MealId } from '../mealid';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  meals: Meal[];
  
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
   

  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private calendarService: CalendarService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(addedMeal: any): void {
    this.events = [
      ...this.events,
      addedMeal
      // {
      //   title: 'New event',
      //   start: startOfDay(new Date()),
      //   end: endOfDay(new Date()),
      //   color: colors.red,
      //   draggable: true,
      //   resizable: {
      //     beforeStart: true,
      //     afterEnd: true
      //   }
      // }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  getMeals(): void {
    this.calendarService.getMeals()
      .subscribe(meals => {
        if(!this.meals){
          this.meals = new Array<Meal>();
        }
        for (let i = 0; i < meals.length; i++) {
        this.meals.push(new Meal(new MealId(meals[i].id.dateTime, meals[i].id.userId), meals[i].mealNum));
        console.log("meal" + meals[i]);
        }
        console.log(meals);
        // this.populateCalendar(); ??
        });
  }

  ngOnInit() {
    // load calendar events for user from db here
    sessionStorage.setItem("userId", "1");
    this.getMeals();
  }

  populateCalendar(){
    console.log(this.meals);
    for (let i = 0; i < this.meals.length; i++) {
      const mealDate = new Date(this.meals[i].id.dateTime);
      const hours = this.meals[i].mealNum === 1 ? 8 : this.meals[i].mealNum === 2 ? 12 : 18;
      mealDate.setHours(hours);
      const mealDateEnd = new Date(this.meals[i].id.dateTime);
      mealDateEnd.setHours(hours + 1);
      this.addEvent({
        title: 'New event ' + (i + 1),
        start: mealDate,
        end: mealDateEnd,
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
    }
  }

  postNew() {
    this.calendarService.addMeal().subscribe(() => console.log("subscribe log"));
    console.log("post part 1");
  }
}
