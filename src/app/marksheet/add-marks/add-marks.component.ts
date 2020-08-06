import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'marksheet-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.scss']
})
export class AddMarksComponent implements OnInit {

  constructor() { }

  name: string = null;
  marks: number = null;
  students = [];
  		
  addStudent(){
    this.students.push(
      {
        name : this.name,
        marks : this.marks
      }
    );
  
    this.setMarks(this.students);
    this.resetForm();
  }

  resetForm(){
    this.name = null;
	  this.marks = null;
  }

  setMarks(value) {
    window.localStorage.setItem("marksheet", JSON.stringify(value));
  }

  getMarkSheet() {
    if(window.localStorage){
      return JSON.parse(window.localStorage["marksheet"]);
    }
    console.log("Your Browser doesn't supports local storage !!");
    return [];
  }

  ngOnInit(){
    this.students = this.getMarkSheet();
  }

};

// app.filter('average', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 0;
// 		for (var i = 0; i < length; i++) {
// 			out = Number(input[i].marks) + out;
// 		}
// 		out = out/length;
// 		return out;
// 	}
// });

// app.filter('highest', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 0;
// 		for (var i = 0; i < length; i++) {
// 			if(out < input[i].marks){
// 				out = input[i].marks;
// 			}
// 		}
// 		return out;
// 	}
// });

// app.filter('lowest', function () {
// 	return function(input){
// 		input = input || [];
// 		var length = input.length;
// 		var out = 100;
// 		for (var i = 0; i < length; i++) {
// 			if(out > input[i].marks){
// 				out = input[i].marks;
// 			}
// 		}
//       return out;
//     }
//   });