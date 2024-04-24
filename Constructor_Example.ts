class Employee {

//Parameter Properties constructor example
  constructor(private _firstName: string, private _lastName: string) {
  }

  public setFirstName(firstName: string): void {
    this._firstName = firstName;
  }

  public getFirstName(): string {
    return this._firstName;
  }

}

let employee = new Employee("Curt","Arbtin"); 
employee.setFirstName("Bob");
console.log(employee);
