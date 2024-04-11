import { ITableData } from "src/Interfaces/ITableData";

export class User implements ITableData{
  id: number;
  name: string;
  username: string;
  email: string;

  constructor(id: number, name: string, username: string, email: string) {
    this.id = id;
    this.name = name;    
    this.username = username;
    this.email = email;
  }
  
  get firstname(): string {
    return this.name.split(' ')[0];
  }
  
  get surname(): string {
    return this.name.split(' ')[1];
  }
}
