import {Component, OnInit} from '@angular/core';
import {Therapy} from "../../classes/therapy";
import {NgForOf} from "@angular/common";
import {TherapyService} from "../../services/therapy.service";

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './therapies.component.html',
  styleUrl: './therapies.component.css'
})
export class TherapiesComponent implements OnInit{

  therapies: Therapy[] = [];

  constructor(private therapyService: TherapyService) {

  }

  ngOnInit(): void {
    this.therapyService.getAll().subscribe(list => this.therapies = list);
  }

}
