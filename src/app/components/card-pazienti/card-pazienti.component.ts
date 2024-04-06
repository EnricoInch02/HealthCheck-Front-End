import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient.model';
import { PatientService } from '../../doctor.service';

@Component({
  selector: 'app-card-pazienti',
  templateUrl: './card-pazienti.component.html',
  styleUrl: './card-pazienti.component.scss',
})
export class CardPazientiComponent {
  cards = [
    {
      nome: 'Marta',
      descrizione:
        'Applicazione fantastica! Caricamento rapido delle analisi del sangue, notifica via email e PDF dettagliato: comodità assicurata!',
      rating: 5,
      image: '../../../assets/img/pazienti/Marta.jpg',
    },
    {
      nome: 'Luca',
      descrizione:
        'Semplice e veloce l’inserimento dei risultati. Notifiche dell’ email e del PDF super dettagliato: tutto il necessario a portata di mano!',
      rating: 5,
      image: '../../../assets/img/pazienti/Luca.jpg',
    },
    {
      nome: 'Chiara',
      descrizione:
        "Inserimento rapido dell'ECG, notifiche email rassicuranti. PDF ben strutturato: facilita la condivisione con il medico.",
      rating: 4,
      image: '../../../assets/img/pazienti/Chiara.webp',
    },
    {
      nome: 'Marco',
      descrizione:
        'Applicativo magnifico: caricamento rapido, notifiche email puntuali!',
      rating: 4,
      image: '../../../assets/img/pazienti/Marco.jpg',
    },
    {
      nome: 'Sara',
      descrizione:
        'Semplicità e tranquillità con le notifiche email. Velocità e trasparenza: una gradita sorpresa!',
      rating: 5,
      image: '../../../assets/img/pazienti/Sara.webp',
    },
    {
      nome: 'Francesco',
      descrizione:
        'Piattaforma semplice e alla portata di tutti.	 Test con progressi tracciati e di facile reperibilità.',
      rating: 5,
      image: '../../../assets/img/pazienti/Francesco.webp',
    },
    {
      nome: 'Elena',
      descrizione: 'Trovare un sito così user-friendly non è così scontato.',
      rating: 5,
      image: '../../../assets/img/pazienti/Elena.jpg',
    },
    {
      nome: 'Giorgio',
      descrizione:
        'Caricamenti veloci con notifiche email informative. Comprendere i risultati ora è più semplice.',
      rating: 4,
      image: '../../../assets/img/pazienti/Giorgio.webp',
    },
  ];
}
