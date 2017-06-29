import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() categories;

  @Output() onCategory = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  haveCategory(index: number) {
    // console.log('Cat = ' + index);
    // grab the cat id from the object
    this.onCategory.emit(this.categories[index].id);
  }

}
