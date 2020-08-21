import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
} from "@angular/forms";
import { UserService } from "../_services";
import { v4 as uuid } from "uuid";

@Component({
  selector: "app-place-fitness-trainer-appointment",
  templateUrl: "./place-fitness-trainer-appointment.component.html",
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {
  fitnessForm: FormGroup;

  constructor(private dataService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.fitnessForm = this.fb.group({
      packages: ["", Validators.required],
      inr: ["", Validators.required],
      paisa: ["", Validators.required],
      streetaddress: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],
      country: ["", Validators.required],
      pincode: ["", Validators.required],
      phonenumber: ["", Validators.required],
      email: ["", Validators.required],
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      age: ["", [Validators.required, Validators.min(18), Validators.max(60)]],
      trainerpreference: ["", Validators.required],
      physiotherapist: ["", Validators.required],

      id: [uuid()],
    });
  }

  onSubmit() {
    this.dataService.postfitnessdata(this.fitnessForm.value).subscribe(
      (res) => console.log(res),
      (err) => alert("Can't submit form. Try again later.")
    );
    this.ngOnInit();
  }
}

export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: string,
    public phonenumber: number,
    public email: string,
    public firstname: string,
    public lastname: string,
    public age: number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) {}
}
