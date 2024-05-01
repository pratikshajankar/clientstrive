import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constant/APIconstant';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }

  getAllPayment(){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_PAYMENT);
  }

  getAllPaymentbyProject(pid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_PAYMENTBY_PROJECTID+pid);
  }

  getAllpaymentByClient(cid:any){
    return this.http.get(APIConstant.API_URL+APIConstant.GET_ALL_PAYMENTBY_CLIENTID+cid);
  }

  AddPayment(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.ADD_PAYMENT,obj);
  }

  UpdatePayment(obj:any){
    return this.http.post(APIConstant.API_URL+APIConstant.UPDATE_PAYMENT,obj);
  }

  Deletepayment(payid:any){
    return this.http.delete(APIConstant.API_URL+APIConstant.DELETE_PAYMENTBY_PAYID+payid);
  }
}
