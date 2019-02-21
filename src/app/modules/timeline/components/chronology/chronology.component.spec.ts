/**
 * CODE TAKEN FROM A REPO THAT TEAM DUBAI HAS FORKED. INSTEAD OF INSTALLING THE PACKAGE
 * THROUGH NPM, WE FELT IT WERE BEST TO FORK THE REPO AND TAKE THE CONTENTS TO ENSURE NOTHING WAS 
 * CHANGED THAT WOULD BREAK THE CODEBASE. IN ADDITION, SOME CODE CHANGES WERE MADE BY OUR TEAM, SO
 * THAT WE COULD CONSTRUCT IT FOR OUR USE.
 * 
 * ORIGINAL AUTHOR: Jeremy Reed
 * URL: https://github.com/JR33D/ngx-chronology
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronologyComponent } from './chronology.component';
import { Component, ViewChild } from '@angular/core';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ChronologyComponent', () => {
   let testHostComponent: TestChronologyHostComponent;
   let testHostFixture: ComponentFixture<TestChronologyHostComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         //imports: [FontAwesomeModule],
         declarations: [ChronologyComponent, TestChronologyHostComponent],
      }).compileComponents();
   }));

   beforeEach(() => {
      testHostFixture = TestBed.createComponent(TestChronologyHostComponent);
      testHostComponent = testHostFixture.componentInstance;
   });

   it('should create', () => {
      expect(testHostComponent.chronologyUnderTest).toBeTruthy(
         'There was an issue creating a new instance of ChronologyComponent',
      );
   });

   @Component({
      selector: `test-host-component`,
      template: `<ngx-chronology></ngx-chronology>`,
   })
   class TestChronologyHostComponent {
      @ViewChild(ChronologyComponent) public chronologyUnderTest: ChronologyComponent;
   }
});
