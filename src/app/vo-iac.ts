class HealthCard {
  type: string;
  number: string;
  versionCode: string;
  lastPostalCode: string;
  digitsOfCitizenship: string;
}

class DriverLicence {
  number: string;
  issueDate: string;
  rin: string;
  postalCode: string;

  number1: string;
  number2: string;
  number3: string;
}

export class VoIac {
  sessionId: string;
  verified: string;
  healthCard: HealthCard;
  driverLicenceNeeded: string;
  driverLicence: DriverLicence;
}
