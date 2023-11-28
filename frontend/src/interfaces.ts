interface User {
    username:string;
    password:string;
    first_name:string;
    last_name:string;
    phone_number:string;
    email:string;
    gender:string;
    profile_photo:string;
  }
  
export interface Tutor extends User{
    rate:number;
    available:boolean;
    remote:boolean;
    in_person:boolean;
    location:string;
    qualification:string;
    about:string;
  }
  
export interface Student extends User {}