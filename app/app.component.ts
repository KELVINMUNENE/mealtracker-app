import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class="jumbotron">
    <h1>Meal Tracker App</h1>
  </div>
  <div class="row">
    <div class="col-md-6">
      <h2>Today</h2>
      <meal-list
        [childMealList]="masterMealList"
        (clickSender)="showDetails($event)"
      ></meal-list>
    </div>
    <div class="col-md-6">
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
      <new-meal
        (newMealSender)="addMeal($event)"
      ></new-meal>
    </div>
  </div>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Tea", 1, "Cup of tea and a mandazi"),
    new Meal("bacon and two eggs", 175, "I added some salt."),
    new Meal("Githeri", 50, "ate with an avocado and pepper.")
  ];
  selectedMeal:  Meal= null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditing() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
   this.masterMealList.push(newMealFromChild);
 }
}
