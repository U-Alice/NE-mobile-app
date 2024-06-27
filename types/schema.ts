export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
}

export interface User extends Timestamps {
  id: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  password: string;

}

export interface AuthRegisterRequestPayload{
    email: "",
    fullName: "",
    phoneNumber: "",
    password: ""
}
