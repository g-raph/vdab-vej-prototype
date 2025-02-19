import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  modalContent: TemplateRef<any> | null = null;

  openModal(content: TemplateRef<any>) {
    this.modalContent = content;
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
    this.modalContent = null;
  }

}
