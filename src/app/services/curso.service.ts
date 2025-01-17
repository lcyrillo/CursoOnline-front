import { Injectable } from "@angular/core";
import { Curso } from "../model/curso";

@Injectable({
    providedIn: 'root'
  })
  export class CursoService {
  
    constructor() { }

    url = 'http://localhost:8080/api/curso';

    async getAllCurso(): Promise<Curso[]> {
        const data = await fetch(this.url);
        return (await data.json()) ?? [];
    }

    async getCursoById(id: number) {
        const data = await fetch(`${this.url}/${id}`);
        return (await data.json()) ?? {};
    }

  }  