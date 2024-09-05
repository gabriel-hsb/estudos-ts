interface Notebook {
  nome: string
  preco: number
  descricao: string
  garantia: string
  seguroAcidentes: boolean
  empresaFabricante: Empresa
  empresaMontadora: Empresa
}

interface Empresa {
  nome: string
  fundacao: number
  pais: string
}

async function fetchData2() {
  const URL = "https://api.origamid.dev/json/notebook.json"

  try {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
    preencherDados(data)
  } catch (err) {
    console.error(err)
  }
}

fetchData2()

function preencherDados({
  nome,
  preco,
  descricao,
  garantia,
  seguroAcidentes,
  empresaFabricante,
  empresaMontadora,
}: Notebook) {
  document.body.innerHTML += `
    <div>
      <h1>${nome}</h1>
      <span>${descricao}</span>
      </br>
      </br>

      <b>Apenas: R$${preco}</b>
      </br>
      </br>

      <p>Fabricado por: ${empresaFabricante.nome}, na fábrica da ${
    empresaFabricante.pais
  }</p>

      ${
        garantia
          ? '<span style="color: #ff993b"> Em estoque! </span>'
          : '<span style="color: #a3261c"> Esgotado =( </span>'
      }

    </div>
  `
}
