import {Component, OnInit} from '@angular/core';
import {Therapy} from "../../model/therapy";
import {NgForOf, NgIf} from "@angular/common";
import {TherapyService} from "../../services/therapy.service";
import {NgbAlert} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgbAlert
  ],
  templateUrl: './therapies.component.html',
  styleUrl: './therapies.component.css'
})
export class TherapiesComponent implements OnInit {

  therapies: Therapy[] = [];
  errorMessage = '';

  constructor(private therapyService: TherapyService) {

  }

  ngOnInit(): void {
    this.therapyService.getAll().subscribe({next: list => this.therapies = list,
      error: err => this.errorMessage = "No tienes permiso"
    });
  }

}
