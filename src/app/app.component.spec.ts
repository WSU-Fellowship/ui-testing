import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  })

  it(`should initialize title as 'Catculator'`, () => {
    expect(component.title).toEqual('Catculator');
  });

  it(`should initialize with null result`, () => {
    expect(component.result).toBeNull();
  });

  // Example of DOM testing via Jasmine
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('ui-testing app is running!');
  // });

  describe('add', () => {
    it('should set result to sum of both numbers', () => {
      // arrange
      component.num1 = 10;
      component.num2 = 32;

      // act
      component.add();

      // assert 
      expect(component.result).toBe(42);
    });
  });

  // todo: finish this test
  describe('subtract', () => {
    it('should set result to difference of both numbers', () => {
      // arrange
      // act
      // assert
    });
  });

  // todo: finish this test
  describe('multiply', () => {
    it('should set result to product of both numbers', () => {
      // arrange
      // act
      // assert
    });
  });

  // todo: describe divide and verify behavior similar to above
});
