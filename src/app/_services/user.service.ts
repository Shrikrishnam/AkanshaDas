import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

const httpOptions = {
  headers: new Headers({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })
export class UserService {
  public static BaseUrl = "http://localhost:6565/";

  constructor(private http: Http) {}
  postfitnessdata(data) {
    return this.http
      .post(UserService.BaseUrl + "allfriends", data, httpOptions)
      .pipe(map((response: Response) => response.json()));
  }

  getfitnessdata() {
    return this.http
      .get(UserService.BaseUrl + "allfriends", httpOptions)
      .pipe(map((response: Response) => response.json()));
  }

  getfitnessdatabyid(id) {
    return this.http
      .get(UserService.BaseUrl + "allfriends/" + id, httpOptions)
      .pipe(map((response: Response) => response.json()));
  }

  deletefitnessdata(id) {
    return this.http
      .delete(UserService.BaseUrl + "allfriends/" + id, httpOptions)
      .pipe(map((response: Response) => response.json()));
  }

  editfitnessdata(id, data) {
    return this.http
      .patch(UserService.BaseUrl + "allfriends/" + id, data, httpOptions)
      .pipe(map((response: Response) => response.json()));
  }

  postcontactusdata(data) {
    return this.http.post(UserService.BaseUrl + "contactUS", data, httpOptions);
  }
}
