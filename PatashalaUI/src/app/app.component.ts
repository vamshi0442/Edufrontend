import { Component, OnInit, Optional } from '@angular/core';
import { App } from '@capacitor/app';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'patashala';

  constructor(
    private platform: Platform,
    public alertController: AlertController
  ) {
    this.platform.backButton.subscribe(() => {
      this.presentConfirmationDialog();
    });
  }

  async presentConfirmationDialog() {
    const alert = await this.alertController.create({
      header: 'Exit Patshala',
      message: 'Are you sure you want to exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirmation canceled');
          },
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('User confirmed action');
            App.exitApp();
          },
        },
      ],
    });

    await alert.present();
  }
}
