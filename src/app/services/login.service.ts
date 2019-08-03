import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient ) {}

  getNonce() {
    return this.http.get('https://www.southfloridagarden.com/api/get_nonce/?controller=user&method=generate_auth_cookie');
  }

  login(nonce: string, user: string, password: string) {
    console.log('nonce is '+nonce+" user is "+user);
    return this.http.get('https://www.southfloridagarden.com/api/user/generate_auth_cookie/?nonce='+nonce+'&email='+user+'&password='+password);
    //http://localhost/api/user/generate_auth_cookie/?nonce=375034fjwfn39u8&user_id=john&passsword=PASSWORD-HERE

  }


}
