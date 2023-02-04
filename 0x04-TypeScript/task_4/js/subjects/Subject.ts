/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;
    setTeacher(val: Teacher): void {
      this.teacher = val;
    }
  }
}