import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div *ngIf="show; then ifBlock; else elseBlock">
    </div>
    <ng-template #ifBlock>
      <div>If Block</div>
    </ng-template>
    <ng-template #elseBlock>
      <div>Else Block</div>
    </ng-template>
    <button (click)="onSubmit(show)"> Switch </button>
  `,
  styles: []
})
export class TestComponent implements OnInit {


  onSubmit(shows){
    this.show = !shows;
  }
  public show:Boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
