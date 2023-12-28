import { deprecated } from "./Decorators/deprecated-decorator";
import { enumerable } from "./Decorators/enumerable-decorator";
import { frozen } from "./Decorators/frozen.decorator";
import { required } from "./Decorators/required-decorator";

@frozen
class User {
  private static userType: string = "Generic";

  @required
  private _email: string;

  @required
  public username: string;

  public addressLine1: string = "";
  public addressLine2: string = "";
  public country: string = "";

  constructor(username: string, email: string) {
    this.username = username;
    this._email = email;
  }

  @enumerable(false)
  get userType() {
    return User.userType;
  }

  get email() {
    return this._email;
  }

  set email(newEmail: string) {
    this._email = newEmail;
  }

  @deprecated
  address(): any {
    return `${this.addressLine1}\n${this.addressLine2}\n${this.country}`;
  }
}

const p = new User("uut", "example@example.com");
p.addressLine1 = "1, New Avenue";
p.addressLine2 = "Bahcelievler, Istanbul";
p.address();
console.log(JSON.stringify(p));