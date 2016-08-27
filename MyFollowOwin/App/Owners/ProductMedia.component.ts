import { Component, Injectable, OnInit, Input,Output,EventEmitter,} from '@angular/core';
import {ProductMedia} from './../Shared/Models';
import {Service} from './../Shared/Service';
//import {FileSelectDirective, FileDropDirective, FileUploader} from 'ng2-file-upload-modal/ng2-file-upload-modal';


@Component({
    selector: 'media-form',
    providers: [Service],
    templateUrl: 'App/Owners/ProductMedia.component.html',
    //directives: [ng2FileUploader]
})

export class ProductMedias implements OnInit {

    productMedias: Array<ProductMedia>;
    errorMessage: string;
    productMedia: ProductMedia;
    @Input() productmedia: number;
    @Output() sendProductMediaid = new EventEmitter<any>();
    constructor(private productservice: Service) {
        this.productMedias = new Array<ProductMedia>();
        this.productMedia = new ProductMedia();
    }
    ngOnInit() {
        this.getProductMedias();
    }
    getProductMedias() {
        var displayOwner = this.productservice.getProductMedia()
            .subscribe((productMedias) => {
                this.productMedias = productMedias
            }, err => {
                this.errorMessage = err;
            });
    }
    onSubmit(productMedia: ProductMedia) {
        this.sendProductMediaid.emit(productMedia);
        //console.log(this.sendProductMediaid.map);
        this.AddMedia();
        
    }
    AddMedia() {
        this.productservice.addProductMedia(this.productMedia)
            .subscribe((productMedia) => {
                this.productMedia = productMedia
            },
            err => {
                this.errorMessage = err;
            });
    }
    PicUpload(path: any) {
        this.productMedia.Data = path.target.value;
    }

}