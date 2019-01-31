import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  title = 'Holly, you are in the reviews component now';
  reviewsRating = [
    {
      name: '1 thumbs up',
      ratingValue: '3.0'
    },
    {
      name: '2 thumbs up',
      ratingValue: '2'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
