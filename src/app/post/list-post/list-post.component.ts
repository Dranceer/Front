import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importamos MatSnackBar
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



interface Post {
  id: number;
  id_creator: number;
  name: string;
  data: string;
  image: string;
}

const postData: Post[] = [
  {
    "id": 1,
    "id_creator": 1,
    "name": "ForeverFunding",
    "data": "El valle de las mascotas, el refugio de 100 gatos y 46 perros en Guayaquil",
    "image": "https://imagenes.expreso.ec/files/image_348_220/uploads/2020/02/18/5e4c49bf7e0ef.jpeg"
  },
  {
    "id": 2,
    "id_creator": 2,
    "name": "ForeverFunding",
    "data": "Rescatan animales, les dan cobijo y buscan una familia que los adopte: cómo es el trabajo de los refugios",
    "image": "https://www.infobae.com/new-resizer/k-d-DNWvIxupqUo3qdQvLLbok_Q=/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/04/25161858/Refugio-Aprani-2.jpg"
  },
  {
    "id": 3,
    "id_creator": 3,
    "name": "ForeverFunding",
    "data": "Recuperan y donan comida para animales de refugio - El Sol de México | Noticias, Deportes, Gossip, Columnas",
    "image": "https://www.elsoldemexico.com.mx/metropoli/qshq9c-rrefugio-de-animales.jpg/ALTERNATES/LANDSCAPE_400/Rrefugio%20de%20animales.jpg"
  },
];

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  listPost: Post[] = [];
  API_URL = 'https://fureverfundingnojwt.up.railway.app/post';

  constructor(private httpClient: HttpClient, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.listPost = postData;
  }

  /*editPost(post: Post): void {
    this.router.navigate(['/update', post.id]); 
  }*/


  deletePost(post: Post): void {
    this.httpClient.put(`${this.API_URL}/deletePost/${post.id}`, post)
      .subscribe(
        response => {
          console.log("Post eliminado exitosamente:", response);
          this.listPost = this.listPost.filter(p => p !== post);
          this.openSnackBar('Post eliminado exitosamente', 'Cerrar');
        },
        error => {
          console.error("Error al eliminar el post:", error);
          this.openSnackBar('Error al eliminar el post', 'Cerrar');
        }
      );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'center', // Posición horizontal del mensaje
      verticalPosition: 'top' // Duración del snackbar en milisegundos
    });
  }
}
