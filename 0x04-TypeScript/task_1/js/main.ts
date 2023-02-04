interface Teacher {
  [key: string]: boolean | number | string,
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string
}

interface Directors extends Teacher {
  numberOfReports: number
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}

type printTeacherFunction = (firstName: string, lastName: string) => string;

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework():  string;
  displayName():  string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

const StudentClass: StudentConstructor = 
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework() {
      return 'Currently working';
    }
    displayName() {
      return this.firstName;
    }
  };
