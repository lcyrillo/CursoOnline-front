import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Curso } from './model/curso';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CursoOnline';
  cursoService = inject(CursoService);
  listaCursos: Curso[] | undefined;

  ngOnInit(): void {

  }

  getCursos(): void {
    this.cursoService.getAllCurso()
      .then(response => {
        this.listaCursos = response;
        console.log(this.listaCursos);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
