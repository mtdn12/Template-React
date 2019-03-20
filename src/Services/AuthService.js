import { camelizeKeys } from 'humps'

function fetchAuthentication(tokenId) {
  // Simulate an error 50% of the time just for testing purposes
  // if (Math.random() > 0.5) {
  //   return new Promise(function(resolve, reject) {
  //     resolve(null)
  //   })
  // }

  return camelizeKeys(
    JSON.parse(
      '{"result":"success","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcm9maWxlSUQiOiJiTSIsInByb2ZpbGVDb2RlIjoiIiwibXlTcXVhcmVDb2RlIjoiRFMtMDE0NyIsIm15U3F1YXJlSUQiOiI2MmQwNjRiZi0wNjM2LTQ1MGEtYmM2Zi1kOTI2MzNjYWRlNDUiLCJxckNvZGUiOm51bGwsInBob3RvIjpudWxsLCJwcml2YXRlZCI6MCwiZmlyc3ROYW1lIjoiRGluaCBOZ29jIFF1YW5nIiwibGFzdE5hbWUiOm51bGwsIm9ubHlOYW1lIjoiUXVhbmciLCJlbWFpbCI6InF1YW5nLmRpbmhAZHNxdWFyZS5jb20udm4iLCJnZW5kZXIiOm51bGwsImNvbXBhbnkiOiJDXHUwMGQ0TkcgVFkgQ1AgUVVcdTFlYTJORyBDXHUwMGMxTyBUUlx1MWVmMEMgVElcdTFlYmVQIEJcdTAwY2NOSCBQSFx1MDFhZlx1MDFhME5HIiwiY29tcGFueUNvZGUiOiJEUyIsImRlcGFydG1lbnQiOm51bGwsImpvYlRpdGxlIjpudWxsLCJiaW9WTiI6bnVsbCwicGhvbmVXb3JrIjpudWxsLCJwaG9uZU1vYmlsZSI6bnVsbCwicGhvbmVPdGhlclR5cGUiOjAsInBob25lT3RoZXIiOm51bGwsInBob25lVGVtcCI6bnVsbCwiZGF0YUluZm8iOm51bGwsImFkZHJlc3MiOm51bGwsImFkZHJlc3MyIjpudWxsLCJjaXR5IjpudWxsLCJzdGF0ZVByb3ZpY2UiOm51bGwsInppcFBvc3RhbENvZGUiOm51bGwsImNvdW50cnkiOm51bGwsIndlYnNpdGUiOm51bGwsIndlYnNpdGUyIjpudWxsLCJsaW5rZWRJblVSTCI6bnVsbCwidHdpdHRlclVSTCI6bnVsbCwiZmFjZWJvb2tVUkwiOm51bGwsInRpbWUiOjAsInJlYXNvbiI6IiIsInVzZXJJZCI6IiIsInB1c2hUb2tlbiI6bnVsbCwiaXNTcGVha2VyIjowLCJhY3RpdmF0ZUNvZGUiOiI4NDgyODYiLCJhY3RpdmF0ZVRpbWUiOjE1MjI3MjcwNDksIm1vcmVJbmZvSlNPTiI6bnVsbCwiZGF0YUpTT04iOm51bGwsImxvY2FsUHVzaE5KU09OIjpudWxsLCJsb2dpblRpbWUiOjE1MjI3MjcwNDksInJvbGUiOiJBZG1pbiIsImV4cCI6MTU1NDI2MzA0OX0.qizhLGAvtwrINRdXXXXXGueyq00MDWvL7Ka6JbDkfsrkgShg","errorCode":0,"errorMessage":""}'
    )
  )

  /* return apiClient
    .post('/1.0/validateGoogle', { tokenId })
    .then(response => {
      if (response.ok) {
        return camelizeKeys(response.data)
      }

      return null
    }) */
}

export const AuthService = {
  fetchAuthentication,
}
