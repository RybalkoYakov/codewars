function createSecretHolder(secret) {
  return {
    getSecret: function () {return secret},
    setSecret: function (sec) {secret = sec}
  }
}

obj = createSecretHolder(5)
console.log(obj.getSecret())
obj.setSecret(2)
console.log(obj.getSecret())