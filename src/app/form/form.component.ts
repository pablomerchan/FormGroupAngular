import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


//Minuto 7

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(private FormBuilder: FormBuilder) {
    this.buildForm();
   }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.FormBuilder.group({
      name: ['',  [Validators.required]],
      date: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      text: ['', [Validators.required, Validators.maxLength(80)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
    

    // this.form.valueChanges
    // .pipe(
    //   debounceTime(800)
    // )
    // .subscribe(value => {
    //   console.log(value);
    // });
  }

  save(event: Event) {
    event.preventDefault(); //previene el comportamiento predterminado de recargar la pagina
    
    if(this.form.valid){  // Confirmamos que el formulario que sea valido
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }

    
  }

}
