import {Component} from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Route} from "@angular/router";
import {MdButton, MdAnchor} from "@angular2-material/button/button";
import {GeneratorComponent} from "./generator/generator.components";
import {HomeComponent} from "./home/home.component";
import {DokuComponent} from "./doku/doku.component";
import {AppComponent} from "./app/app.component";
import {TestComponent} from "./test/test.component";
import { AppDokuComponent } from './doku/appdocs.component';

@Component({
  selector: 'valoplus-app',
  templateUrl: 'app/valoplus.component.html',
  directives: [MdToolbar, MdButton, MdAnchor, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  new Route({path: '/apps', component: AppComponent}),
  new Route({path: '/home', component: HomeComponent}),
  new Route({path: '/doku', component: DokuComponent}),
  new Route({path: '/appdoku', component: AppDokuComponent}),
  new Route({path: '/test', component: TestComponent}),
])
export class ValoplusAppComponent {
}
