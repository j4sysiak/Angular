import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test8',
  templateUrl: './test8.component.html',
  styleUrls: ['./test8.component.css']
})
export class Test8Component implements OnInit {
  public student: Student;
  public courselist: Course[];
  public studentlist: Student[] = [];
  public uniqueKey = 0;
  public studentId = 0;

  constructor() { }

  ngOnInit(): void {
    this.getCourses();
    this.student = new Student();
    this.resetForm();
  }

  getCourses() {
    this.courselist = [
      {id: 1, name: 'JAVA', isselected: false},
      {id: 2, name: 'C#', isselected: false},
      {id: 3, name: 'PYTHON', isselected: false}
    ];
  }

  onSubmit() {
    let index = this.studentlist.findIndex(x => x.id === this.student.id);

    this.student.courseid = this.courselist.filter(x => x.isselected === true).map(x => x.id).join(',').toString();
    this.student.coursename = this.courselist.filter(x => x.isselected === true).map(x => x.name).join(',').toString();

    if (index === -1) {
      this.uniqueKey = this.uniqueKey + 1;
      this.student.id = this.uniqueKey;
      this.studentlist.push(this.student);
    } else {
      this.studentlist[index] = this.student;
    }
    this.student = new Student();
    this.getCourses();

    // if (this.studentid === 0) {
    //   this.uniqueId = this.uniqueId + 1;
    //   this.student.id = this.uniqueId;
    //   this.studentlist.push(this.student);
    // } else {
    //   for (var i = 0; i < this.studentlist.length; i++) {
    //     if (this.studentlist[i] === this.studentid) {
    //       this.studentlist[i].name = this.student.name;
    //       this.studentlist[i].courseid = this.student.courseid;
    //       this.studentlist[i].coursename = this.student.coursename;
    //     }
    //   }
    //   this.studentid = 0;
    // }
    // this.resetForm();
    // this.courselist.forEach(item => item.isselected = false);
  }

  onChange() {
    console.warn(this.courselist);
    // this.student.courseid = this.courselist.filter(student => student.?????);
    // this.student.coursename = this.courselist.filter(student => student.?????);
  }

  edit(item: Student) {
     let selectedCourseIdList = item.courseid.split(',');

     for (let i = 0; i < selectedCourseIdList.length; i++) {
       this.courselist.filter(x => x.id === Number(selectedCourseIdList[i])).map(x => x.isselected = true );
     }
     this.student.name = item.name;
     this.student.id = item.id;
  }

  private resetForm() {
    this.student = {
      id: null,
      name: '',
      courseid: '',
      coursename: ''
    };
  }
}

class Student {
  id: number;
  name: string;
  courseid: string;
  coursename: string;
}


class Course {
  id: number;
  name: string;
  isselected: boolean;
}
