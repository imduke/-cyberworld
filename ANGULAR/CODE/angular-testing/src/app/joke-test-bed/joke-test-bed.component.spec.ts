import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { JokeTestBedComponent } from './joke-test-bed.component';
import { JokeService, JokeItem} from '../joke.service';
import { DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

describe('JokeTestBedComponent', () => {
  let comp: JokeTestBedComponent;
  let fixture: ComponentFixture<JokeTestBedComponent>;
  let jokeService: JokeService;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [ JokeTestBedComponent ],
      providers:[JokeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeTestBedComponent);
    de = fixture.debugElement;
    comp = fixture.componentInstance;
    jokeService = TestBed.get(JokeService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should set joke property when initialized', ()=>{
    var arr = {
    "data":[
    {
      "jokeid": 1,
      "jokeheading": "Joke Heading 1"
    },
    {
      "jokeid": 2,
      "jokeheading": "Joke Heading 2"
    },
    {
      "jokeid": 3,
      "jokeheading": "Joke Heading 3"
    },
    {
      "jokeid": 4,
      "jokeheading": "Joke Heading 4"
    }
  ]
}

    spyOn(jokeService, 'getJokes').and.returnValue(Observable.of(arr.data));
    fixture.detectChanges();
    const el = de.query(By.css('li')).nativeElement;

    expect(el.textContent).toEqual('FAKE JOKE');
  });
});
