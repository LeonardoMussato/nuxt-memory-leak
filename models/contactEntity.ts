interface ContactEntityInterface {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
}

class ContactEntity implements ContactEntityInterface {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
  constructor({
    name,
    surname,
    email,
    subject,
    message,
  }: ContactEntityInterface) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.subject = subject;
    this.message = message;
  }

  toJSON(): ContactEntityInterface {
    return {
      name: this.name,
      surname: this.surname,
      email: this.email,
      subject: this.subject,
      message: this.message,
    };
  }
  static fromContactForm({
    name,
    surname,
    email,
    subject,
    message,
  }: ContactEntityInterface): ContactEntity {
    return new ContactEntity({
      name,
      surname,
      email,
      subject,
      message,
    });
  }
}
export default ContactEntity;
