import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, AsyncPipe, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  constructor(public modalService: ModalService) {}

  close() {
    this.modalService.closeModal();
  }
}
