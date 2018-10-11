import { Component, OnInit } from "@angular/core";
import { BookService } from "../book.service";
import { Router } from "@angular/router";
import { FirebaseService } from "../firebase.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  curUser: any;
  noUser: any;
  curuser: any;
  search: string = "shivam";
  title: any;
  admin: any;
  adminName: any;
  cartLength: any;
  check = "hi";
  books_notAvailable: boolean = false;
  books_result: any;

  constructor(
    private bookService: BookService,
    private firebaseService: FirebaseService,
    private router:Router
  ) {}

  ngOnInit() {
    if (
      JSON.parse(localStorage.getItem("currentUserEmail")) == "admin@gmail.com"
    ) {
      this.admin = true;
      this.adminName = JSON.parse(localStorage.getItem("currentUserEmail"));
      this.curUser = null;
    } else if (localStorage.getItem("currentUserEmail") !== null) {
      this.curUser = JSON.parse(localStorage.getItem("currentUserEmail"));
      this.noUser = "";
    } else {
      this.noUser = "NoUser";
    }
    setTimeout(()=> {
      this.firebaseCart();
    },2000)
   
  }
  firebaseCart() {
    this.firebaseService.getCart().subscribe(data => {
      this.cartLength = data.length;
    });
  }

  //logout function to remove the user details from local storage
  logout() {
    localStorage.removeItem("currentUserEmail");
    localStorage.removeItem("currentUserToken");
    location.reload();
    this.noUser = "NoUser";
  }

  searchBooks() {
    this.check = "";
    this.bookService.getBookByName(this.search).subscribe(data => {
      if (data != null) {
        this.books_result = data;
      } else {
        this.books_notAvailable = true;
      }
    });
  }
  
}
