import { IContact } from '@/types';
import { makeAutoObservable } from 'mobx';

class ContactStore {
  selectedContact: IContact = {
    name: '',
    email: '',
    phone_home: '',
    phone_mobile: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  selectContact(contact: IContact) {
    this.selectedContact = contact;
  }
}

export const contactStore = new ContactStore();
