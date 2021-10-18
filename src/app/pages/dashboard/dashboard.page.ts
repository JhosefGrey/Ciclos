import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Init del dash');
  }

  ngOnDestroy(){
    console.log('Destroy del dash');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter de dash');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter de dash');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave de dash');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave de dash');
  }

}
