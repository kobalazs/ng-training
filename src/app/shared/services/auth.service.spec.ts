import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { environment } from './../../../environments/environment';
import { AuthService } from './auth.service';
import { User } from 'src/app/user/models/user';

describe('AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  let user: User;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    authService = TestBed.get(AuthService);
    httpMock = TestBed.get(HttpTestingController);
    user = {
      id: 1,
      name: 'Tobias Test',
      email: 'test@example.com',
      password: 'secret'
    };
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('can log in', done => {
    authService.login(user).subscribe(
      response => {
        console.log(response.user);
        expect(response.user).toEqual(user);
        expect(response.token).toBe('someToken');

        expect(localStorage.getItem('user')).toBe(JSON.stringify(user));
        expect(localStorage.getItem('token')).toBe('someToken');

        done();
      }
    );
    const loginRequest = httpMock.expectOne(environment.apiEndpoint + '/auth');
    loginRequest.flush({user, token: 'someToken'});
  });


  it('can log out', () => {
    authService.user = user;
    authService.token = 'someToken';
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'someToken');

    authService.logout();

    expect(authService.user).toBeUndefined();
    expect(authService.token).toBeUndefined();
    expect(localStorage.getItem('user')).toBeNull();
    expect(localStorage.getItem('token')).toBeNull();
  });

});
