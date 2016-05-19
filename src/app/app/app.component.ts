import {Component, OnInit} from "@angular/core";
import {MdCard, MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MdButton} from "@angular2-material/button/button";
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {AppServcie} from "./app.service";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {HTTP_PROVIDERS} from "@angular/http";
import {Change} from "./Change";
/**
 * Created by tom on 15.05.16.
 */

@Component({
  templateUrl: 'app/app/app.component.html',
  directives: [MdCard, MdCheckbox, MdButton, MdToolbar, MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES],
  providers: [AppServcie, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
  builds:Change[] = [];

  constructor(private appService:AppServcie) {

  }

  private loadBuilds() {
    this.appService.getBuildDescriptions(value => {
      this.builds.push(value);
      this.builds.sort((n1,n2) => n2.id - n1.id);
    });
  }

  ngOnInit() {
    this.loadBuilds();
  }
}
