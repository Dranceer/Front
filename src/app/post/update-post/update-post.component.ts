import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../Services/post/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  putForm: FormGroup;
  postSelected: string = ''; 

  constructor(private fb: FormBuilder, private postService: PostService, private snackBar: MatSnackBar) {
    this.putForm = this.fb.group({
      name: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      const file = event.target.files?.[0];
      if (file) {
        // Crear un FileReader para leer el contenido del archivo como una URL
        const reader = new FileReader();
        reader.onload = () => {
          // Asignar la URL de la imagen al campo 'data' del formulario
          this.putForm.patchValue({
            data: reader.result
          });
        };
        // Leer el archivo como una URL
        reader.readAsDataURL(file);
      }
    }
  }
  

  actualizarInformacion(): void {
    if (this.putForm.valid) {
      const postData = this.putForm.value;
      this.postService.updatePost(postData).subscribe(
        response => {
          console.log('Los datos fueron actualizados correctamente:', response);
          this.mostrarMensaje('Actualización exitosa');
        },
        error => {
          console.error('Error al actualizar los datos:', error);
          this.mostrarMensaje('Error al actualizar');
        }
      );
    }
  }

  // Función para mostrar mensajes utilizando MatSnackBar
  mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración del mensaje en milisegundos
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'top' // Posición vertical del mensaje
    });
  }
}
