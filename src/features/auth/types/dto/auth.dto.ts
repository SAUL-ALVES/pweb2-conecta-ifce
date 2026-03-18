export type CampusDTO = {
  id: string
  name: string
}

export type RegisterRequestDTO = {
  firstName: string
  lastName: string
  handle: string
  email: string
  role: 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN'
  campus: string
  password: string
  course?: string
}

export type LoginRequestDTO = {
  email: string
  password: string
}

export type AuthUser = {
  id: string
  firstName: string
  lastName: string
  name: string
  avatarUrl?: string
  handle: string
  email: string
  role: 'STUDENT' | 'PROFESSOR' | 'TECHNICIAN'
  campus: CampusDTO
  course?: string
}

export type AuthResponseDTO = {
  token: string
  user: AuthUser
}
