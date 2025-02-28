import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { UserLogin } from '../model/userLogin';

@Injectable({
    providedIn: 'root',
})
export class AuthenticateService {
    private url = environment.apiUrl;
    private currentUser: UserLogin;

    constructor(private http: HttpClient) {
        
    }

    login(email: string | null | undefined, password: string | null | undefined, role: string) {
        this.http.post<UserLogin>(`${this.url}/usuario/login`, {
            email,
            password,
            role
        }).subscribe(res => 
            localStorage.setItem('SESSION_TOKEN', res.token)
        );
    }
}
