import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../Services/post/post.service';
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  postSelected: string | ArrayBuffer = '';
  file!: File;

  postForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    data: ['', Validators.required],
    image: ['', Validators.required],
    user: ['']
  });

  constructor(
    public fb: FormBuilder,
    public postService: PostService,
    private snackBar: MatSnackBar // Agregamos MatSnackBar
  ) { }

  ngOnInit(): void {
    // No es necesario inicializar aquí si se inicializa en la declaración.
  }

  guardarInformacion(): void {
    console.log("Datos a guardar:", this.postForm.value);
    console.log("Imagen seleccionada:", this.file);
    this.postService.savePost(this.postForm.value).subscribe(
      (res) => {
        console.log("Respuesta del servidor:", res);
        // Reiniciar el formulario después de guardar exitosamente
        this.postForm.reset();
        this.mostrarMensaje('Datos guardados con éxito');
      },
      (error) => {
        console.error("Error al guardar el post:", error);
        this.mostrarMensaje('Error al guardar los datos');
      }
    );
  }

  // Función para mostrar mensajes utilizando MatSnackBar
  mostrarMensaje(mensaje: string): void {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 3000, // Duración del mensaje en milisegundos
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'top' // Posición vertical del mensaje
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.file = file;

      // Mostrar la imagen seleccionada en el formulario
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.result !== null) {
          this.postSelected = reader.result;
        }
      };
    }
  }
}
