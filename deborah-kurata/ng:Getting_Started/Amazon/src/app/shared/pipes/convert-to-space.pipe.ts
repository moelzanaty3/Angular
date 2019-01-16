import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpace'
})
export class ConvertToSpacePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split('-').join(' ');
  }

}
