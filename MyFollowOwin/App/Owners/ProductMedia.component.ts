﻿import { Component, Injectable, Input,Output,EventEmitter,} from '@angular/core';
import {ProductMedia} from './../Shared/Models';
import {Service} from './../Shared/Service';
import {FILE_UPLOAD_DIRECTIVES, FileUploader, Headers} from 'ng2-file-upload/ng2-file-upload';


const URL = 'http://localhost:65039/api/ProductMedias/';

@Component({
    selector: 'media-form',
    providers: [Service],
    templateUrl: 'App/Owners/ProductMedia.component.html',
    directives: [FILE_UPLOAD_DIRECTIVES]
})

export class ProductMedias 
{
    public myHeaders: Headers[] = [];
    public uploader: FileUploader = new FileUploader({ url: URL }); //, headers : this.test  });

    //productMedias: Array<ProductMedia>;
    //errorMessage: string;
    //productMedia: ProductMedia;
    //@Input() productmedia: number;
    //data: string;
    //@Output() sendProductMediaid = new EventEmitter<any>();
    //constructor(private productservice: Service) {
    //    this.productMedias = new Array<ProductMedia>();
    //    this.productMedia = new ProductMedia();
    //}
    //ngOnInit() {
    //    this.getProductMedias();
    //}
    //getProductMedias() {
    //    var displayOwner = this.productservice.getProductMedia()
    //        .subscribe((productMedias) => {
    //            this.productMedias = productMedias
    //        }, err => {
    //            this.errorMessage = err;
    //        });
    //}
    //onSubmit(productMedia: ProductMedia) {
    //    this.sendProductMediaid.emit(productMedia);
    //    this.AddMedia();

    //}
    //AddMedia() {
    //    this.productservice.addProductMedia(this.productMedia)
    //        .subscribe((productMedia) => {
    //            this.productMedia = productMedia
    //        },
    //        err => {
    //            this.errorMessage = err;
    //        });
    //}
    //PicUpload(event) {
    //    var files = event.srcElement.files;
    //    for (var i = 0; i < files.length; i++) {
    //        var file = files[i];
    //        var reader = new FileReader();
    //        reader.onload = this.fileLoad;
    //        reader.readAsDataURL(file);
    //    }
       
    //}
    //fileLoad(e)
    //{
    //    this.data = e.target.result;
    //    console.log(this.data);
    //}
}