import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, code?: string): string {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'AUS':
        return '+61 ' + value;
      case 'SIN':
        return '+65 ' + value;
      case 'BEL':
        return '+32 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
