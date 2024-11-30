export type NonNullable<T> = T extends null | undefined ? never : T

export type RemoveNullish<T> = {
  [K in keyof T]: NonNullable<T[K]>
}
