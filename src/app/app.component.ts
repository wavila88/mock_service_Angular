import { Component } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private readonly configService: ConfigService){

  }
  title = 'app-learn-angular';

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
  this.getUsuarios();
  }

  // tslint:disable-next-line: typedef
  getUsuarios(){
   this.configService.getUsuarios().subscribe(response => {console.log('Llego a ', response)});
  
  }


}
