import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { FixtureService } from "../../_services/fixture.service";

@Component({
  selector: "app-fixture",
  templateUrl: "./fixture.component.html",
  styleUrls: ["./fixture.component.css"]
})
export class FixtureComponent implements OnInit {
  fixtures = [];

  constructor(private data: FixtureService, private router: Router) {}

  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.fixtures = data;
    });
  }

  onClick(id: number) {
    this.router.navigate(["/fixture/fixture", id]);
  }

  bet(id: number) {
    this.router.navigate(["/fixture/bet", id]);
  }
}
