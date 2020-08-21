import { Component, OnInit } from "@angular/core";
import { UserService } from "../_services";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.component.html",
})
export class ViewAppointmentComponent implements OnInit {
  editForm: FormGroup;
  appointmentList;
  appointmentData;
  appointmentId;
  showEditForm;

  constructor(private dataService: UserService, private fb: FormBuilder) {}

  ngOnInit() {
    this.editForm = this.fb.group({
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
      age: ["", [Validators.required, Validators.min(19), Validators.max(59)]],
      trainerpreference: ["", Validators.required],
      physiotherapist: ["", Validators.required],
      packages: ["", Validators.required],
    });
    this.getFitness();
  }

  getFitness() {
    this.dataService.getfitnessdata().subscribe(
      (res) => (this.appointmentList = res),
      (err) => alert("Can't load data. Try again later.")
    );
  }

  deleteAppointment(id) {
    const confirmDelete = confirm("Delete Appointment?");
    if (confirmDelete) {
      this.dataService.deletefitnessdata(id).subscribe(
        (res) => {
          console.log("deleted");
        },
        (err) => alert("Can't delete appointment. Try again.")
      );
    }
    this.ngOnInit();
  }

  showEditScreen(id) {
    this.showEditForm = true;
    this.appointmentId = id;
    this.appointmentData = this.appointmentList.find(
      (x) => x.id === this.appointmentId
    );
    this.editForm.patchValue({
      inr: this.appointmentData.inr,
      paisa: this.appointmentData.paisa,
      streetaddress: this.appointmentData.streetaddress,
      city: this.appointmentData.city,
      state: this.appointmentData.state,
      country: this.appointmentData.country,
      pincode: this.appointmentData.pincode,
      phonenumber: this.appointmentData.phonenumber,
      email: this.appointmentData.email,
      firstname: this.appointmentData.firstname,
      lastname: this.appointmentData.lastname,
      age: this.appointmentData.age,
      trainerpreference: this.appointmentData.trainerpreference,
      physiotherapist: this.appointmentData.physiotherapist,
      packages: this.appointmentData.packages,
    });
  }

  onSubmit() {
    this.dataService
      .editfitnessdata(this.appointmentId, this.editForm.value)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => alert("Can't load data. Try again later.")
      );
    this.showEditForm = false;
    this.ngOnInit();
  }
}
