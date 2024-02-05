import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTypeFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(items: Content[], type: string): Content[] {
    if (!items || !type) {
      return items; 
    }
    
    return items.filter(item => item.type === type);
  }
}