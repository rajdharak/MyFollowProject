export enum OwnerStates { Pending=0, Approved=1, Rejected=2}
export enum Platform {Mobile,Web,IOT}
export class Owner {
    public Id: number;
    public CompanyName: string;
    public Description: string;
    public FoundedYear: number;
    public WebsiteUrl: string;
    public OwnerStates: OwnerStates = OwnerStates.Pending;
}

export class Product {
    public Id: number;
    public Name: string;
    public Description: string;
    public HomepageUrl: string;
    public PlayStoreUrl: string;
    public AppStoreUrl: string;
    public ProductPlatform: Platform;
    //public Check: boolean = false;
}

export class ProductUpdate {
    public UpdateId: number;
    public ProductId: number;
    public Title: string;
    public Details: string;
    public ProductMediaId: string;
}
export class ProductMedia {
    public ProductMediaId: number;
    public Data: any;
}
export class Followers {
    public ProductId: number;
    public UserId: string;
}