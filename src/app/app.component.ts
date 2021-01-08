import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  iscoursedisplay = false;
  isstudentdisplayed = false;
  isCourseSelected = true;
  coursearray = [];
  courseName;
  studentList;
  courseSelect;
  studentName;
  studentDname = [];
  courseDname: Object;
  selectedCourse: any;
  disStudents: any;
  selectedStudentIndex: any;
  constructor() {}
  // to show textbox of  addcourse

  addcourse() {
    this.iscoursedisplay = true;
  }

  //to show the textbox  of  add student

  addstudent() {
    this.isstudentdisplayed = true;
  }

  //to get the selected coursename

  selectChangeCourse(courseSelect: any) {
    this.isCourseSelected = false;
    this.studentList = "";
    this.selectedCourse = courseSelect;
    console.log(this.selectedCourse);
    console.log(this.coursearray);
    let obj = this.coursearray.find(x => x.course === this.selectedCourse);
    this.selectedStudentIndex = this.coursearray.indexOf(obj);
    console.log(this.selectedStudentIndex);
    this.studentDname = [];
    this.disStudents = this.coursearray[this.selectedStudentIndex].students;
  }

  // hide course add area X

  chide() {
    this.iscoursedisplay = false;
  }

  // hide student add area X

  shide() {
    this.isstudentdisplayed = false;
  }

  // add new course to the dropdown

  addcourselist() {
    this.courseDname = {
      course: this.courseName,
      students: []
    };
    this.coursearray.push(this.courseDname);
    console.log(this.coursearray);
    this.courseName = " ";
    this.chide();
  }

  // add new student to the dropdown

  addstudentlist() {
    console.log(this.studentName);
    this.coursearray[this.selectedStudentIndex].students.push(this.studentName);
    console.log(this.coursearray);
    this.studentName = " ";
    console.log(this.coursearray[this.selectedStudentIndex]);
    this.shide();
  }

  ngOnInit(): void {}
}
