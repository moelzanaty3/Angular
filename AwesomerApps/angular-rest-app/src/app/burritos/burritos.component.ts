import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ColorComponent } from './color/color.component';
import { ColorPickerDirective } from 'ngx-color-picker';

@Component({
  selector: 'app-burritos',
  templateUrl: './burritos.component.html',
  styleUrls: ['./burritos.component.scss']
})
export class BurritosComponent implements AfterViewInit {
  primary: string = '#1976d2';

  @ViewChild('primaryColorSample')
  primarySampleComponent: ColorComponent;
  @ViewChild('primaryColorSample', { read: ElementRef })
  primarySampleDiv: ElementRef;
  @ViewChild('primaryInput')
  primaryInput: ElementRef;
  @ViewChild('primaryInput', { read: ColorPickerDirective })
  colorPickerDirective: ColorPickerDirective;

  ngAfterViewInit(): void {
    console.log('====================================');
    console.log(this.primarySampleComponent);
    console.log('====================================');
    console.log(this.primarySampleDiv);
    console.log('====================================');
    console.log(this.primaryInput);
    console.log('====================================');
    console.log(this.colorPickerDirective);
  }
  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }
}
