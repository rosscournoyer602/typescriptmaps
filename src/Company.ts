import faker from 'faker';
import { Place } from './CustomMap';

export class Company implements Place {
  name: string;
  catchphrase: string;
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string {
    return `
      <div style="text-align: center;">
        <h2>${this.name}</h1>
        <h3>${this.catchphrase}</h3>
      </div>`
  }
  constructor() {
    this.name = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}

