import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TimerApp';
  timerstop;
  public time: Date = new Date();
  public time1;
  time2;
  display;
  displayText;
  displayUrl;

  ngOnInit() {
    if (this.display === 0) {
      this.displayText = 1;
      (<HTMLInputElement>document.getElementById('firstName')).disabled = true;
      (<HTMLInputElement>document.getElementById('lastName')).disabled = true;
      (<HTMLInputElement>document.getElementById('gmail')).disabled = true;
      (<HTMLInputElement>document.getElementById('password')).disabled = true;
      (<HTMLInputElement>(
        document.getElementById('phonenumber')
      )).disabled = true;
      (<HTMLInputElement>document.getElementById('college')).disabled = true;
    } else {
      this.timeData();
    }
  }

  constructor() {
    this.displayUrl = '/DisplayData';
  }

  startTime() {
    this.display = 1;
    this.displayText = null;
    this.ngOnInit();
  }

  timeData() {
    this.time1 = new Date();
    (<HTMLInputElement>document.getElementById('firstName')).disabled = false;
    (<HTMLInputElement>document.getElementById('lastName')).disabled = false;
    (<HTMLInputElement>document.getElementById('gmail')).disabled = false;
    (<HTMLInputElement>document.getElementById('password')).disabled = false;
    (<HTMLInputElement>document.getElementById('college')).disabled = false;
    (<HTMLInputElement>document.getElementById('phonenumber')).disabled = false;
    this.timerstop = setInterval(() => {
      this.time = new Date();
      this.time2 = new Date(this.time1.getTime() + 5 * 1000);
      if (this.time.getSeconds() === this.time2.getSeconds()) {
        this.display = 0;
        clearInterval(this.timerstop);
        this.ngOnInit();
      }
    }, 1000);
  }
}
