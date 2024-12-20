import {Component, inject, OnInit} from '@angular/core';
import {MasterService} from '../../service/master.service';
import {ApiResponseModel, IDesignation} from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  designationList: IDesignation[] = [];
  isLoader: boolean = true;

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe((result: ApiResponseModel) => {
      this.designationList = result.data;
      this.isLoader = false;
    }, error => {
      alert("api error");
      this.isLoader = false;
    })
  }

}
