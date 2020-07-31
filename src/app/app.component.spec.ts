import { TestBed, async } from '@angular/core/testing';
import { ConfigService } from '../services/config.service';
import {AppComponent} from '../app/app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, observable } from 'rxjs';


const res = {grettings: 'service has mocked'}
// tslint:disable-next-line: no-unused-expression
const mockResponse = Observable.create(function(observer) {
  observer.next({saludo: 'Hola Mundo'});
  observer.complete();
});


let service: ConfigService;

describe('Mock call service', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({

        imports: [
            HttpClientTestingModule
        ],

    })
        .compileComponents();
  }));




  beforeEach(() => {
    // tslint:disable-next-line: deprecation
    service = TestBed.get(ConfigService);
    spyOn(service, 'getUsuarios').and.returnValue(mockResponse);
    });


  it('Mock call service', () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.getUsuarios();
  });
});
