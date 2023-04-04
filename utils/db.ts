import Dexie, { Table } from 'dexie'

export interface Profile {
  id: string
  firstName: string
  firstNameKana: string
  lastName: string
  lastNameKana: string
  email: string
  phoneNumber: number | null
  birthDateOn: Date | null
  age: number | null
  sex: string
}

export interface Address {
  id: string
  postalCode: string
  content: string
  contentKana: string
}

export class MySubClassedDexie extends Dexie {
  profiles!: Table<Profile>
  addresses!: Table<Address>

  constructor() {
    super('personalHistoryDexie')
    this.version(3).stores({
      profiles:
        'id, firstName, firstNameKana, lastName, lastNameKana, email, phoneNumber, birthDateOn, age, sex',
      addresses: 'id, postalCode, content, contentKana'
    })
  }
}

export const db = new MySubClassedDexie()
