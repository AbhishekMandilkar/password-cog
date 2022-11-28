export interface IPassword {
  password: string;
  title: string;
  tag: PasswordTag;
}

export enum PasswordType {
  Password = "password",
  Pin = "pin",
}

export enum PasswordTag {
  None = "none",
  SocialMedia = "social-media",
  Shopping = "shopping",
  Banking = "banking",
  Food = "food",
}
