import { setAccessToken } from '@/features/auth/storages/token.storage'
import type {
  AuthResponseDTO,
  LoginRequestDTO,
} from '@/features/auth/types/dto/auth.dto'
import { http } from '@/infra/http/http-client'

export async function loginUser(
  credentials: LoginRequestDTO,
): Promise<AuthResponseDTO> {
  const responseData = await http.post<AuthResponseDTO>(
    'auth/login',
    credentials,
  )

  setAccessToken(responseData.token)
  return responseData
}
