/**
 * Created by tom on 21.04.16.
 */

import {Component} from "@angular/core";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdButton} from "@angular2-material/button/button";
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {MdCard} from "@angular2-material/card/card";
@Component({
  templateUrl: 'app/generator/generator.components.html',
  directives: [MdCard, MdCheckbox, MdButton, MdToolbar, MD_INPUT_DIRECTIVES]
})
export class GeneratorComponent {
}
