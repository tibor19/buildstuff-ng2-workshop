import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (value) {
      return `content/images/food/${value}.jpg`;
    } else {
      return `content/images/food/${args ? args[0] : '404.png'}`;
    }
  }

}
