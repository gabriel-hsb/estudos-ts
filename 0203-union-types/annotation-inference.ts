// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
  if (typeof value !== "number" && typeof value !== "string") {
    throw new Error("Value must be 'number' or 'string'")
  }

  if (typeof value === "number") return value

  if (typeof value === "string") {
    if (isNaN(Number(value))) {
      throw new Error("If string passed, must be 'number'")
    }

    return Number(value)
  }
}

console.log(toNumber(""))
