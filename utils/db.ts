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

export class MySubClassedDexie extends Dexie {
  profiles!: Table<Profile>

  constructor() {
    super('personalHistoryDexie')
    this.version(2).stores({
      profiles:
        'id, firstName, firstNameKana, lastName, lastNameKana, email, phoneNumber, birthDateOn, age, sex'
    })
  }
}

export const db = new MySubClassedDexie()
