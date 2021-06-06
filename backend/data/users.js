import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Rose Mohr',
    email: 'rose@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Lily Potter',
    email: 'lily@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
