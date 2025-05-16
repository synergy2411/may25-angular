import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styleUrl: './directives-example.component.css',
})
export class DirectivesExampleComponent {
  product = {
    title: 'IPhone',
    brand: 'Apple',
    price: 1999,
    isAvailable: true,
  };

  dynamicStyle = { color: 'blue', border: '2px green solid' };
  dynamicClasses = { 'my-border': false, 'my-color': true };

  onChangeStyle() {
    this.dynamicStyle.color = 'green';
    this.dynamicStyle.border = '2px blue dashed';
  }

  onMouseEnter() {
    // this.dynamicStyle.color = 'green';
    // this.dynamicStyle.border = '2px blue dashed';
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
    this.dynamicClasses['my-color'] = !this.dynamicClasses['my-color'];
  }

  onMouseLeave() {
    // this.dynamicStyle.color = 'blue';
    // this.dynamicStyle.border = '2px green solid';
    this.dynamicClasses['my-border'] = !this.dynamicClasses['my-border'];
    this.dynamicClasses['my-color'] = !this.dynamicClasses['my-color'];
  }
}
