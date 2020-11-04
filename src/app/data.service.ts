import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
  ];

  constructor(private http: HttpClient) { }

  public getPosts() {
    this.http.get('http://localhost:5000/posts')
      .subscribe((response: any) => {
        return response.data;
    })
}
  public getContacts():Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}