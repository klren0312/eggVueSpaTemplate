import http from './request'

export function login (user) {
  return http.post('/user/login', {
    username: user.username,
    password: user.password
  })
}

export function getUsers (queryString) {
  return http.get(`/user?${queryString}`)
}

export function createUser (user) {
  return http.post('/user', {
    username: user.username,
    password: user.password,
    sex: user.sex
  })
}

export function editUser (id, user) {
  return http.put(`/user/${id}`, user)
}

export function deleteUser (id) {
  return http.delete(`/user/${id}`)
}
