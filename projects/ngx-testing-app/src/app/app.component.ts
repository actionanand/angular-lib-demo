import { Component } from '@angular/core';

import { icons } from 'projects/input/src/public-api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pencil = icons.PENCIL.icon;
  writingHand = icons.WRITING_HAND.icon;
}
