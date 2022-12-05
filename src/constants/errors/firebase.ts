export class FirebaseRefNotExistsError extends Error {
  constructor() {
    super('Firebase reference does not exists');
  }
}
