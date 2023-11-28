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

export interface Want {
  student:number;
  subject:string;
  level:string;
}

export interface Offer {
  tutor:number;
  subject:string;
  level:string;
}

export interface Lesson {
  tutor:number;
  student:number;
  subject:string;
  level:string;
  date:string;
  duration:string;
  rate:number;
}