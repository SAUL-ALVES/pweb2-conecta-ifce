// src/types/dto/auth.dto.ts

export type CampusDTO = {
  id: string
  name: string
}

export type RegisterRequestDTO = {
  firstName: string
  lastName: string
  handle: string
  email: string
  role: 'student' | 'professor' | 'technician'
  campus: string
  password: string
  course?: string
}

export type LoginRequestDTO = {
  email: string
  password: string
}


export type AuthResponseDTO = {
  token: string
  user: {
    id: string
    name: string
    avatarUrl?: string
    campus: CampusDTO
  }
}
