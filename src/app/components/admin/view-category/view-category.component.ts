import { Component, OnInit } from '@angular/core';
import { Category } from '../../../Model/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  categories:Category[];
  constructor(private catService:CategoryService) { }

  ngOnInit(): void {
    this.catService.getCategoryList().subscribe(data=>{
      this.categories=data;
      console.log(this.categories);
    });
  }

}
