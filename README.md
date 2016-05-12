[![Build Status](https://travis-ci.org/telemark/portalen-roles.svg?branch=master)](https://travis-ci.org/telemark/portalen-roles)
[![Coverage Status](https://coveralls.io/repos/telemark/portalen-roles/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/portalen-roles?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# portalen-roles
Mapper om ldap-infor til tema-roller for portalen


```
$ curl -d '{"cmd": "list-roles", "type": "user"}' -v http://localhost:8000/act
```

```
$ curl -d '{"cmd": "map-roles", "type": "user", "roles": ["kommunikasjon"]}' -v http://localhost:8000/act
```

```
$ curl -d '{"cmd": "map-roles", "type": "user", "company": "Bø vidaregåande skule"}' -v http://localhost:8000/act
```