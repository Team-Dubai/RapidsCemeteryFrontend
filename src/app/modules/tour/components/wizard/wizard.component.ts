/**
 * CODE TAKEN FROM A FORKED REPO THAT TEAM DUBAI HAS ALSO FORKED. INSTEAD OF INSTALLING THE PACKAGE
 * THROUGH NPM, WE FELT IT WERE BEST TO FORK THE REPO AND TAKE THE CONTENTS TO ENSURE NOTHING WAS 
 * CHANGED THAT WOULD BREAK THE CODEBASE. IN ADDITION, SOME CODE CHANGES WERE MADE BY OUR TEAM, SO
 * THAT WE COULD CONSTRUCT IT FOR OUR USE.
 * 
 * ORIGINAL AUTHOR: Maiyaporn Phanich
 * URL: https://github.com/maiyaporn/angular2-wizard
 * 
 * FORKED AUTHOR: Luis Daniel
 * URL: https://github.com/3dluis/angular2-wizard
 */
import { Component, Output, Input, EventEmitter, ContentChildren, QueryList, AfterContentInit, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { Stop } from 'src/app/models/stop';

@Component({
  selector: 'form-wizard',
  template:
  `<div class="card">
    <div class="card-header">
      <ul class="nav nav-justified">
        <li class="nav-item" *ngFor="let step of steps" [ngClass]="{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}">
          <a (click)="goToStep(step)">{{step.title}}</a>
        </li>
      </ul>
    </div>
    <div *ngIf="loaded" class="card-footer" [hidden]="isCompleted">
        <button type="button" class="btn btn-dark float-left" (click)="previous()" [hidden]="!hasPrevStep || !activeStep.showPrev">Previous Stop</button>
        <button type="button" class="btn btn-dark float-right" (click)="next()" [hidden]="!hasNextStep || !activeStep.showNext">Next Stop</button>
        <button type="button" class="btn btn-dark float-right" (click)="complete()" [hidden]="hasNextStep">End of Tour</button>
    </div>
    <div class="card-block">
      <ng-content></ng-content>
    </div>
  </div>`
  ,
  styles: [
    '.card { height: 100%; }',
    '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
    '.card-block { overflow-y: auto; }',
    '.card-footer { background-color: #fff; border-top: 0 none; }',
    '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
    '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
    '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
    '.disabled { color: #ccc; }',
    '.completed { cursor: default; }'
  ]
})
export class WizardComponent implements AfterContentInit {
  @Input() stops: Stop[];
  @ContentChildren(WizardStepComponent) wizardSteps: QueryList<WizardStepComponent>;

  private _steps: Array<WizardStepComponent> = [];
  private _isCompleted: boolean = false;
  public loaded: boolean = false;

  @Output() onStepChanged: EventEmitter<WizardStepComponent> = new EventEmitter<WizardStepComponent>();

  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterContentInit() {
    this.wizardSteps.changes.subscribe(() => {
      this.wizardSteps.toArray().forEach(el => {
        this._steps.push(el);
      });

      setTimeout(()=> {
        this.steps[0].isActive = true;
        this.loaded = true;
      }, 0);
    });
  }

  get steps(): Array<WizardStepComponent> {
    return this._steps.filter(step => !step.hidden);
  }

  get isCompleted(): boolean {
    return this._isCompleted;
  }

  get activeStep(): WizardStepComponent {
    return this.steps.find(step => step.isActive);
  }

  set activeStep(step: WizardStepComponent) {
    if (step !== this.activeStep) {
      this.activeStep.isActive = false;
      step.isActive = true;
      this.onStepChanged.emit(step);
    }
  }

  public get activeStepIndex(): number {
    return this.steps.indexOf(this.activeStep);
  }

  get hasNextStep(): boolean {
    return this.activeStepIndex < this.steps.length - 1;
  }

  get hasPrevStep(): boolean {
    return this.activeStepIndex > 0;
  }

  public goToStep(index: number): void {
    var step = this.steps[index];
    if (!this.isCompleted) {
      this.activeStep = step;
    }
  }

  public next(): void {
    if (this.hasNextStep) {
      let nextStep: WizardStepComponent = this.steps[this.activeStepIndex + 1];
      this.activeStep.onNext.emit();
      nextStep.isDisabled = false;
      this.activeStep = nextStep;
    }
  }

  public previous(): void {
    if (this.hasPrevStep) {
      let prevStep: WizardStepComponent = this.steps[this.activeStepIndex - 1];
      this.activeStep.onPrev.emit();
      prevStep.isDisabled = false;
      this.activeStep = prevStep;
    }
  }

  public complete(): void {
    this.activeStep.onComplete.emit();
    this.reset();
  }

  public reset(): void {
      this.activeStep = this.steps[0];
      this.steps.forEach((step)=>{
        step.isDisabled = true;
      });

      this.activeStep.isDisabled = false;
      this.activeStep.isActive = true;
  }
}
