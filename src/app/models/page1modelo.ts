export class Page1modelo {
    name: string;
    isoCode: string;
    flag: string;
    phonecode: number;
    currency: string;
    latitude: number;
    longitude: number;

    constructor(name: string, isoCode: string, flag: string, phonecode: number, currency: string, latitude: number, longitude: number) {
        this.name = name;
        this.isoCode = isoCode;
        this.flag = flag;
        this.phonecode = phonecode;
        this.currency = currency;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
