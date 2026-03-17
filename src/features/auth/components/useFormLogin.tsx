import { loginSchema, type LoginFormData } from '@/features/auth/schemas/login.schema'
import { setAccessToken } from '@/features/auth/storage/auth.storage'
import { http } from '@/infra/http/http-client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

export function useFormLogin() {
  const [showPass, setShowPass] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const responseData = await http.post<{ token: string; user: any }>(
        'auth/login',
        data,
      )

      setAccessToken(responseData.token)
      navigate('/feed')
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  return {
    state: {
      showPass,
      setShowPass,
    },
    onSubmit,
    useForm: {
      register,
      handleSubmit,
      isSubmitting,
      isValid,
      errors,
    },
  }
}
