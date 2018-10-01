export class User {
  uid: string;
  email: string;
  username: string;
  displayName: string;
  photoURL: string;
  roles: Array<string>;
  permissions?: Array<string>;
}
