import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { FixtureService } from "../../_services/fixture.service";
import { AuthService } from "../../_services/auth.service";

@Component({
  selector: "app-fixture-detail",
  templateUrl: "./fixture-detail.component.html",
  styleUrls: ["./fixture-detail.component.css"]
})
export class FixtureDetailComponent implements OnInit {
  public fixture;

  constructor(
    private data: FixtureService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.data.getDataById(id).subscribe(resp => {
      this.fixture = resp;
    });
  }

  delete(id: number) {
    this.data.deleteFixture(id).subscribe(() => {
      this.router.navigate(["/fixture/fixture"]);
    });
  }

  accessControl(): boolean {
    if (this.auth.isAdmin()) {
      return true;
    }
  }
}
