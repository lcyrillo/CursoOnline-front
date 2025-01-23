import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

    ngOnInit(): void {
        
    }
  
    constructor(private usuarioService: UsuarioService) {
  
    }

    protected registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        cpf: new FormControl('', [Validators.required])
    })
    
    submitForm(): void {
      if (this.registerForm.valid) {  
        this.usuarioService.gerarSenha(this.registerForm);
      }
    }

}
