import { Component } from "@angular/core";

@Component ({
    selector: 'question',
    templateUrl: './question.component.html'
})
export class QuestionsComponent {
    
    post() {
        console.log("Hello world!");
    }
}