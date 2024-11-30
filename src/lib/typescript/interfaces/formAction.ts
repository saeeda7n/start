export interface FormActionInterface {
  message: string
  status: 'success' | 'fail'
  fields?: Record<string, string>
  issues?: string[]
}
