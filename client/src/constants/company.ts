export const COMPANY_INFO = {
  legalName: 'Larken Technologies LLC',
  shortName: 'Larken Technologies',
  website: 'https://larkenit.com',
  domain: 'larkenit.com',
  email: 'contracts@larkenit.com',
  phone: '+1 (913) 636-9902',
  phoneClean: '+19136369902',
  address: {
    street: '10318 Conser St, Ste 1J',
    city: 'Overland Park',
    state: 'Kansas',
    stateCode: 'KS',
    zip: '66212',
    country: 'United States',
  },
  get fullAddress(): string {
    return `${this.address.street}, ${this.address.city}, ${this.address.stateCode} ${this.address.zip}, ${this.address.country}`;
  },
  get shortAddress(): string {
    return `${this.address.city}, ${this.address.stateCode}, USA`;
  },
  mapsUrl: 'https://maps.google.com/?q=10318+Conser+St+Ste+1J,+Overland+Park,+KS+66212',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.208154691456!2d-94.6706979237699!3d38.94090997171457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0eb0985c49129%3A0xe7a5cbf5d96a79ee!2s10318%20Conser%20St%20%231j%2C%20Overland%20Park%2C%20KS%2066212!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  businessHours: 'Monday - Friday: 8:00 AM - 5:30 PM CST',
  tagline: 'Technology Solutions. The Right Talent. Business Growth.',
  heroDescription:
    'We help businesses solve complex technology challenges, embrace innovation and build high-performing teams through expert IT consulting and specialized IT staffing.',
} as const;
