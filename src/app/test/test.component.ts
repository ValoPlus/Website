import {Component, OnInit} from "@angular/core";
import {MD_CARD_DIRECTIVES, MdCard} from "@angular2-material/card/card";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdButton} from "@angular2-material/button/button";
import {MdCheckbox} from "@angular2-material/checkbox/checkbox";
import {Device} from "./Device";
import {RegistrationRequest, RegistrationResponse} from "./Registration";
import {HTTP_PROVIDERS} from "@angular/http";
import {TestService} from "./test.service";
import {Wlan} from "./Wlan";
import {MdRadioButton, MdRadioGroup} from "@angular2-material/radio/radio";
import {MdRadioDispatcher} from "@angular2-material/radio/radio_dispatcher";
/**
 * Created by tom on 16.05.16.
 */

@Component({
  templateUrl: 'app/test/test.component.html',
  directives: [MdCard, MdCheckbox, MdButton, MdToolbar, MD_LIST_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MdRadioButton, MdRadioGroup],
  providers: [TestService, HTTP_PROVIDERS, MdRadioDispatcher]
})
export class TestComponent implements OnInit {
  private message = '';

  private active:boolean[] = [true, false, false];

  private device:Device;
  private registrationRequest:RegistrationRequest;
  private registrationResponse:RegistrationResponse;

  private wlanRequest:Wlan;
  private wlanResponse:String;

  constructor(private testService:TestService) {
  }

  ngOnInit() {
    this.device = new Device();
    this.registrationRequest = new RegistrationRequest();
    this.registrationResponse = new RegistrationResponse();

    this.wlanRequest = new Wlan('', '', 'WPA');
    this.wlanResponse = '';
  }

  ngOnRegistrationClick() {
    this.registrationRequest.key = this.device.key;
    this.testService.requestRegistration(this.registrationRequest, this.device.getAdress()).subscribe(
      result => {
        this.registrationResponse = result;
        this.message = '';
      },
      error => this.message = error
    )
  }

  ngOnWlanClick() {
    this.testService.requestWlan(this.wlanRequest, this.device.getAdress()).subscribe(
      result => {
        this.wlanResponse = result;
        this.message = '';
      },
      error => this.message = error
    )
  }
}
