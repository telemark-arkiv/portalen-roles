# portalen-roles
Mapper om ldap-infor til tema-roller for portalen


```
$ curl -d '{"cmd": "list-roles", "type": "user"}' -v http://localhost:8000/act
```

```
$ curl -d '{"cmd": "map-roles", "type": "user", "roles": ["kommunikasjon"]}' -v http://localhost:8000/act
```