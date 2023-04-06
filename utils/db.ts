import Dexie, { Table } from 'dexie'

export type Profile = {
  id: string
  firstName: string
  firstNameKana: string
  lastName: string
  lastNameKana: string
  email: string
  phoneNumber: string
  birthDateOn: Date | null
  age: number | null
  sex: string
}

export type Address = {
  id: string
  postalCode: string
  content: string
  contentKana: string
}

export type EducationalBackground = {
  id?: number
  backgroundId?: number
  uuid: string
  description: string
  happenedOn: string
}

export class MySubClassedDexie extends Dexie {
  profiles!: Table<Profile>
  addresses!: Table<Address>
  educationalBackgrounds!: Table<EducationalBackground>

  constructor() {
    super('personalHistoryDexie')
    this.version(8).stores({
      profiles:
        'id, firstName, firstNameKana, lastName, lastNameKana, email, phoneNumber, birthDateOn, age, sex',
      addresses: 'id, postalCode, content, contentKana',
      educationalBackgrounds:
        '++id, description, happenedOn, uuid, backgroundId'
    })
  }
}

export const db = new MySubClassedDexie()
