import { makeAutoObservable } from 'mobx';

class ModalStore {
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const modalStore = new ModalStore();
