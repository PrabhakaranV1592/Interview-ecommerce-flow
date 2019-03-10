import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public gitData: any;
  public searchData: string;
  constructor(private gs: GeneralService) { this.searchData = "Test" }

  ngOnInit() {
    this.searchDatafn();
  }



  searchDatafn(){
    this.gs.getData(this.searchData).subscribe(res => this.gitData = res, err => console.log(err));
  }

  openGit(data){
    window.open(data.html_url, "_blank");
  }
}
