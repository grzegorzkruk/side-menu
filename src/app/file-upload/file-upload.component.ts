import { UploadService } from './../common/services/upload-service';
import { Upload } from './../common/models/upload';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'an-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  currentUpload: Upload;
  dropzoneActive: boolean = false;

  constructor(private upSvc: UploadService) { }

  ngOnInit() {
  }

  fileChange(fileList:FileList){

  }

  dropzoneState($event: boolean){
    this.dropzoneActive = $event;
  }

  fileList: FileList;

  handleDrop(fileList: FileList){
    this.fileList = fileList;
    for (let i = 0; i < fileList.length; i++){
      this.currentUpload = new Upload(fileList[i]);
      this.upSvc.pushUpload(this.currentUpload)
    }
  }

}
