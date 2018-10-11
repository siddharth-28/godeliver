import { LogisticService } from "./../logistics.service";
import { Component, OnInit } from "@angular/core";
import { FirebaseService, Cart } from "./../firebase.service";
import { Http, Headers } from "@angular/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from "@angular/router";
@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"]
})
export class PaymentComponent implements OnInit {
  title = "payment-example";
  msg: string = null;
  msg1: string = null;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  totalamountpayable: any;
  totalLength: any;
  carts: Cart[];
  slotDetails: any;
  orderDetails: any;
  orderId:any;
  constructor(
    private http: Http,
    private firebaseService: FirebaseService,
    private spinner: NgxSpinnerService,
    private router:Router,
    private logisticService: LogisticService
  ) {}
  chargeCard(token: string) {
    const headers = new Headers({ token: token, amount: this.getTotal() });
    this.http
      .post(
        "http://13.126.207.114:9088/payment/charge",
        {},
        { headers: headers }
      )
      .subscribe(resp => {});
  }

  refundCard() {
    this.http
      .post("http://13.126.207.114:9088/payment/refund", {})
      .subscribe(res => {});
  }
  totalQuant() {
    let totalQuantity = 0;

    for (let i = 0; i < this.totalLength; i++) {
      totalQuantity += this.carts[i].quantity;
    }
    return totalQuantity;
  }

  getSum() {
    let sum = 0;

    for (let i = 0; i < this.totalLength; i++) {
      sum += this.carts[i].totalPrice;
    }
    return sum;
  }

  getTax() {
    let vat=0;
    vat=this.getSum()*0.05;
    return vat;
  }

  getTotal() {
    let total=0
    total= this.getSum()+this.getTax();
    return total;
  }
  chargeCreditCard() {
    (<any>window).Stripe.card.createToken(
      {
        number: this.cardNumber,
        exp_month: this.expiryMonth,
        exp_year: this.expiryYear,
        cvc: this.cvc
      },
      (status: number, response: any) => {
        if (status === 200) {
          const token = response.id;
          if (token != null) {
            this.chargeCard(token);
            localStorage.setItem("currentUserPayment", JSON.stringify(token));

            setTimeout(() => {
              this.deleteCredentials();
            }, 6000);
            this.msg = "Your Transaction is success";
//            this.logisticService.setSlot(this.slotDetails);
           
 //           this.logisticService
              // .setOrderDetails(this.orderDetails)
              // .subscribe(data => {});

          }
          this.orderId=this.orderDetails.orderId;
          
          if (token == null) {
            this.msg = "Payment failure! Plase Check Your Internet Connection";
          }
        } else {
          this.msg1 = "Payment Failure! Please Enter valid Credentials ";
        }
      }
    );
  }

  refundCreditCard() {
    this.refundCard();
  }
  deleteCredentials() {
    if (localStorage.getItem("currentUserPayment")) {
      if (localStorage.getItem("uid") != null) {
        localStorage.removeItem("currentUserPayment");
        localStorage.removeItem("newOrder");
        localStorage.removeItem("totalVolume");
        this.router.navigate(['/order/'+this.orderId]);
        console.clear();
      } else {
        localStorage.removeItem("currentUserPayment");
        localStorage.removeItem("newOrder");
        localStorage.removeItem("totalVolume");
        this.router.navigate(['/order/'+this.orderId]);
        console.clear();
      }
    }
  }
  openSpinner() {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);
  }

  ngOnInit() {
    this.firebaseService.getCart().subscribe(carts => {
      this.carts = carts;
      this.totalLength = carts.length;
    });
    this.orderDetails = JSON.stringify(localStorage.getItem("orderDetails"));
    this.slotDetails = JSON.parse(localStorage.getItem("newOrder"));
  }
}
