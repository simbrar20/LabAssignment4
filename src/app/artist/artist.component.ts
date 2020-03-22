import { Component, OnInit } from '@angular/core';

interface IArtistCard {
  id?: number;
  image_url: string;
  full_name: string;
  num_sales: number;
}
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: Array<IArtistCard> = [];
  constructor() { }

  ngOnInit() {
    this.artists = [
      {
        image_url: 'assets/img/artists/1.jpg',
        full_name: 'Picasso',
        num_sales: 66
      },
      {
        image_url: 'assets/img/artists/99.jpg',
        full_name: 'Picasso',
        num_sales: 56
      },
      {
        image_url: 'assets/img/artists/19.jpg',
        full_name: 'Picasso',
        num_sales: 40
      },
      {
        image_url: 'assets/img/artists/95.jpg',
        full_name: 'Picasso',
        num_sales: 37
      },
      {
        image_url: 'assets/img/artists/29.jpg',
        full_name: 'Picasso',
        num_sales: 36
      },
      {
        image_url: 'assets/img/artists/2.jpg',
        full_name: 'Picasso',
        num_sales: 34
      },
      {
        image_url: 'assets/img/artists/98.jpg',
        full_name: 'Picasso',
        num_sales: 32
      },
      {
        image_url: 'assets/img/artists/106.jpg',
        full_name: 'Picasso',
        num_sales: 31
      },
      {
        image_url: 'assets/img/artists/97.jpg',
        full_name: 'Picasso',
        num_sales: 26
      },
      {
        image_url: 'assets/img/artists/21.jpg',
        full_name: 'Picasso',
        num_sales: 25
      },
      {
        image_url: 'assets/img/artists/17.jpg',
        full_name: 'Picasso',
        num_sales: 25
      },
      {
        image_url: 'assets/img/artists/101.jpg',
        full_name: 'Picasso',
        num_sales: 18
      }
    ];
  }

}
