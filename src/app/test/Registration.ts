/**
 * Created by tom on 16.05.16.
 */

export class RegistrationRequest {
  constructor(public key:String = "",
              public clientId:String = "TestSuite") {
  }
}

export class RegistrationResponse {
  constructor(public controllerType:String = "",
              public availableChannel:String = "") {
  }
}
