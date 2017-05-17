import { Component, OnInit } from '@angular/core';
import { JokeService, JokeItem} from '../joke.service';

@Component({
  selector: 'app-joke-test-bed',
  templateUrl: './joke-test-bed.component.html',
  styleUrls: ['./joke-test-bed.component.css']
})
export class JokeTestBedComponent implements OnInit {
jokes: JokeItem[];
title = "Joke Title";

constructor(private jokeservice: JokeService){}
ngOnInit() {
    this.loadJokes();
}


    loadJokes(){
        // Get all comments
         this.jokeservice.getJokes()
                           .subscribe(
                               jokes => this.jokes = jokes, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }
}
