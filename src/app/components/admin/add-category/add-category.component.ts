import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Category } from 'src/app/Model/category';
import swal from 'sweetalert2';
import { CategoryService } from '../../../services/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  addcategoryForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private catService:CategoryService
    ) { }

  ngOnInit(): void {
    this.addcategoryForm = this.formBuilder.group(
      {
        title: new FormControl('',[Validators.required]),
        description: new FormControl('',[Validators.required]),
      }
    );
  }

  get title():any {return this.addcategoryForm.get('title');}
  get description():any {return this.addcategoryForm.get('description');}

  // form submission
  OnSubmit(){
    console.log('form submission of add new category');

    if(this.addcategoryForm.invalid){
      this.addcategoryForm.markAllAsTouched();
      return;
    }

    let category = new Category();
    category.title = this.addcategoryForm.controls['title'].value;
    category.description = this.addcategoryForm.controls['description'].value;

    // checking blank 
    if(category.title.trim() == ""){

      swal.fire(
        'Error',
        'Username cannot be blank',
        'error'
      );
        return;
    }

    this.catService.addCategory(category).subscribe(
      (data:any)=>{
        console.log(data);
        swal.fire(
          'Success',
          'Category added successfully',
          'success'
        );
      },
      (error)=>{
        console.log(error);
        swal.fire(
          'Error',
          'Something went wrong',
          'error'
        );
      }
      
    );
    
  }
}
