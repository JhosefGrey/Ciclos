import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Init del profile');
  }

  ngOnDestroy(){
    console.log('Destroy del profile');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter de profile');
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter de profile');
  }

  ionViewWillLeave(){
    console.log('ionViewWillLeave de profile');
  }

  ionViewDidLeave(){
    console.log('ionViewDidLeave de profile');
  }
}
