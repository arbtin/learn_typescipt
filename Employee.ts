// Accessor Use
class Book {
  private _title!: string;
  private _author!: string;

  public get title(): string {
    return this._title;
  }
  // public by default, NO void return type
  public set title(value: string) {
    this._title = value;
  }
}

// Regular Class
class Employee {
  private firstName: string;
  private lastName: string;
  private age: number;
  private isActive: boolean;

  constructor(FirstName: string, LastName: string, Age: number, IsActive: boolean) {
    this.firstName = FirstName;
    this.lastName = LastName;
    this.age = Age;
    this.isActive = IsActive;
  }

  public setFirstName(FirstName: string): void {
    this.firstName = FirstName;
  }

  public getFirstName(): string {
    return this.firstName;
  }
}

let employee = new Employee("Curt","Arbtin",60,true);
employee.setFirstName("Bob"); 
console.log(employee);

let book = new Book();
book.title = "Lensmen";
console.log(book.title);
