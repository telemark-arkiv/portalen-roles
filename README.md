[![Build Status](https://travis-ci.org/telemark/portalen-roles.svg?branch=master)](https://travis-ci.org/telemark/portalen-roles)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-roles/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-roles?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-roles
Mapper om ldap-infor til tema-roller for portalen

## Configuration

### PORTALEN_ROLES_TAG
Tag for this serviec. Defaults to ```portalen-roles```

### PORTALEN_ROLES_URL
Kind of not in use. Defaults to ```https://portalen.roles.no```

### PORTALEN_ROLES_ISOLATED
Use this to run the service in isolated mode.

### PORTALEN_ROLES_HOST
HOST for this service if in isolated mode. Defaults to ```localhost```

### PORTALEN_ROLES_PORT
PORT for this service if in isolated mode. Defaults to ```8000```

## Messages handled

### ```cmd: 'list-roles', type: 'user'```

List all roles.

```
seneca.act({cmd: 'list-roles', type:'user'}, (error, data) => {})
```

```
$ curl -d '{"cmd": "list-roles", "type": "user"}' -v http://localhost:8000/act
```

Returns

```
[
  {
    id: "alle",
    name: "Alle"
  },
  {
    id: "administrasjonen",
    name: "Administrasjonen"
  },
  {
    id: "skole",
    name: "Skole"
  },
  {
    id: "tannhelse",
    name: "Tannhelse"
  },
  {
    id: "administrativledelse",
    name: "Administrativ ledelse"
  },
...
...
```

### ```cmd: 'map-roles', type: 'user'```

List all roles/groups based on role

```
seneca.act({cmd: 'map-roles', type:'user', roles=['bovidaregaandeskule']}, (error, data) => {})
```

```
$ curl -d '{"cmd": "map-roles", "type": "user", "roles": ["bovidaregaandeskule"]}' -v http://localhost:8000/act
```

Returns

```
[
  "alle",
  "bovidaregaandeskule",
  "skole"
]
```

### ```cmd: 'map-roles', type: 'user'```

List a users role/groups based on company

```
seneca.act({cmd: 'map-roles', type:'user', company=['Bø vidaregåande skule']}, (error, data) => {})
```

```
$ curl -d '{"cmd": "map-roles", "type": "user", "company": "Bø vidaregåande skule"}' -v http://localhost:8000/act
```

Returns

```
[
  "alle",
  "bovidaregaandeskule",
  "skole"
]
```