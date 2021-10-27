import { Component, Input, OnInit } from '@angular/core';
import { faTrash,faEnvelope,faMapMarkedAlt,faPhone,faDatabase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() userCard:any;

  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;
  faTrash=faTrash;

  constructor() { }

  ngOnInit(): void {
  }

}
