import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentTitleFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(items: Content[], searchText: string): Content[] {
    if (!items || !searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => item.title.toLowerCase().includes(searchText));
  }
}
