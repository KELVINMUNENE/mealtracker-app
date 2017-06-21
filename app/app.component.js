"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal("Tea", 1, "Cup of tea and a mandazi"),
            new meal_model_1.Meal("bacon and two eggs", 175, "I added some salt."),
            new meal_model_1.Meal("Githeri", 50, "ate with an avocado and pepper.")
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.showDetails = function (clickedMeal) {
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.addMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Meal Tracker App</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h2>Today</h2>\n      <meal-list\n        [childMealList]=\"masterMealList\"\n        (clickSender)=\"showDetails($event)\"\n      ></meal-list>\n    </div>\n    <div class=\"col-md-6\">\n      <edit-meal\n        [childSelectedMeal]=\"selectedMeal\"\n        (doneClickedSender)=\"finishedEditing()\"\n      ></edit-meal>\n      <new-meal\n        (newMealSender)=\"addMeal($event)\"\n      ></new-meal>\n    </div>\n  </div>\n  </div>\n  "
        }),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
