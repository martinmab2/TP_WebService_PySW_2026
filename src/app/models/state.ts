export class State {
    name: string;
    isoCode: string;
    countryCode: string;
    latitude: number;
    longitude: number;

    constructor(name: string, isoCode: string, countryCode: string, latitude: number, longitude: number) {
        this.name = name;
        this.isoCode = isoCode;
        this.countryCode = countryCode;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
