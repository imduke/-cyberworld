import { Component, OnInit } from '@angular/core';
import { JokeService, JokeItem } from '../joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
jokes: JokeItem[];
title = "Joke Title";

  constructor(private jokeservice: JokeService){}

  ngOnInit() {
    this.getJoke();
  }

  getJoke(){
    this.jokeservice.getJokes().subscribe(j => this.jokes = j);
  }

}
