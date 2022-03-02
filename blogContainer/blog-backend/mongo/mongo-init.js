db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

db.createCollection('blogs')
db.createCollection('users')

db.users.insert({ username: 'username', name: 'name', passwordHash: '$2a$10$7j7RSv1wtcMmpOpyRaUoT.TXDGbXES0GRSq4wGFQ5WCCFOKJAupAm' })