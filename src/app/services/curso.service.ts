import { Injectable } from "@angular/core";
import { Curso } from "../model/curso";

@Injectable({
    providedIn: 'root'
  })
  export class CursoService {
    public cursos: Curso[] = [];
  
    constructor() { }

    url = 'http://localhost:8080/api/curso';

    async getAllCurso() : Promise<Curso[]>{
       const data = await fetch(this.url, {
        mode: 'no-cors',
        method: 'GET'
       });
       return (await data.json()) ?? {};
    }

    async getCursoById(id: number) : Promise<Curso> {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json()) ?? {};
    }

  }  