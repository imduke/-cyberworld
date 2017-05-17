import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';

@Injectable()
export class JokeService {
  private url = "api/jokelist.json";
  


  constructor(private http: Http) { }
  
    processResult(res)
    {
      return res.json();
    }
    
    getJokes() : Observable<JokeItem[]>
    {
      // ...using get request
      return this.http.get(this.url)
      // ...and calling .json() on the response to return data
      .map((res:Response) => res.json().data)
      .do(data => console.log(data))
      .catch(this.handleError);
      //...errors if any
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

    private handleError(error: Response) {
      console.error(error);
      let msg = `Error status code ${error.status} at ${error.url} with ${error.json().error} `;
      return Observable.throw(msg);
    }

}

export class JokeItem {
    constructor(
        public JokeId: number, 
        public JokeHeading: string
        ){}
}
