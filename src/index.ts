type Keys<T> = Array<keyof T>

export const keys = Object.keys as <T extends object>(obj: T) => Keys<T>


type Values<T> = Array<
  {
    [K in keyof T]: T[K]
  }[keyof T]
>

export const values = Object.values as <T extends object>(obj: T) => Values<T>

type Entries<T> = Array<
  {
    [K in keyof T]: [K, T[K]]
  }[keyof T]
>

export const entries = Object.entries as <T extends object>(obj: T) => Entries<T>

export const hasOwn = Object.hasOwn as <T extends object, K extends PropertyKey>(obj: T, key: K) => obj is T & Record<K, unknown>
