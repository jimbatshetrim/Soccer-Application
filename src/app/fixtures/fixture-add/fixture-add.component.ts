import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormArray, FormGroup, Validators } from "@angular/forms";

import { FixtureService } from "../../_services/fixture.service";

@Component({
  selector: "app-fixture-add",
  templateUrl: "./fixture-add.component.html",
  styleUrls: ["./fixture-add.component.css"]
})
export class FixtureAddComponent implements OnInit {
  public matchForm: FormGroup;
  counter: number = 0;

  constructor(
    private data: FixtureService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const officials = this.fb.group({
      referee: [null, Validators.required],
      linesman1: [null, Validators.required],
      linesman2: [null, Validators.required]
    });

    this.matchForm = this.fb.group({
      officials: officials,
      home: [null, Validators.required],
      away: [null, Validators.required],
      stadium: [null, Validators.required],
      time: [null, Validators.required],
      date: [null, Validators.required],
      price: [null, Validators.required],
      homeManager: [null, Validators.required],
      awayManager: [null, Validators.required],
      homePlayers: this.fb.array([]),
      awayPlayers: this.fb.array([])
    });
  }
  get homePlayers(): FormArray {
    return this.matchForm.get("homePlayers") as FormArray;
  }
  get awayPlayers(): FormArray {
    return this.matchForm.get("awayPlayers") as FormArray;
  }

  addPlayers() {
    this.homePlayers.push(
      this.fb.group({
        name: ["", Validators.required],
        number: ["", Validators.required]
      })
    );
    this.awayPlayers.push(
      this.fb.group({
        name: ["", Validators.required],
        number: ["", Validators.required]
      })
    );
    this.counter++;
  }

  submit() {
    this.data.addFixture(this.matchForm.value).subscribe(() => {
      console.log("data created");
      this.router.navigateByUrl("/fixture/fixture");
    });
  }
}
