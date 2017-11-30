import { Component } from '@angular/core';

import { SkyConfirmationDialogService } from
  '../../../modules/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'sky-confirmation-dialog-demo',
  templateUrl: './confirmation-dialog-demo.component.html'
})
export class SkyConfirmationDialogDemoComponent {
  public action: string;

  constructor(
    private confirmService: SkyConfirmationDialogService
  ) { }

  public openConfirmationDialog(type: number) {
    const instance = this.confirmService.open({
      message: 'Are you really sure you want to do this?',
      type: type
    });

    instance.confirmed.subscribe((result: any) => {
      this.action = `You clicked "${result.action}"`;
    });
  }

  public openCustomDialog() {
    const instance = this.confirmService.open({
      message: 'What option are you going to select?',
      type: 3,
      buttons: [
        { text: '1' },
        { text: '2' },
        { text: '3', autofocus: true }
      ]
    });

    instance.confirmed.subscribe((result: any) => {
      this.action = `You clicked "${result.action}"`;
    });
  }
}
