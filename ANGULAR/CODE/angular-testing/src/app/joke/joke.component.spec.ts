import { JokeComponent } from './joke.component';
import { JokeItem} from '../joke.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

describe('component: Joke Component',()=>{
  
  let comp : JokeComponent;
  let fakeJokeService : any;

  beforeEach(()=>{

    //   fakeJokeService = {
    //   getJoke:() => {Observable.of('FAKE JOKE')}
    // };

    fakeJokeService = jasmine.createSpyObj(fakeJokeService, ['getJokes']);
    fakeJokeService.getJokes.and.returnValue(Observable.of('FAKE JOKE'));

    comp = new JokeComponent(fakeJokeService);
  });

  it('should have title: Joke Title',()=>{
    expect(comp.title).toBe('Joke Title');
  });

  it('should set joke property when initialized', ()=>{
    comp.ngOnInit();
    expect(comp.jokes).toEqual('FAKE JOKE');
  });
});