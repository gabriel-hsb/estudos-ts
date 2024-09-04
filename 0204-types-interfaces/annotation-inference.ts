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

async function fetchData() {
  const URL = "https://api.origamid.dev/json/notebook.json"

  try {
    const res = await fetch(URL)
    const data = await res.json()
    console.log(data)
  } catch (err) {
    console.error(err)
  }
}

fetchData()

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
      <b>Apenas: R$${preco}</b>
      </br>
      </br>

      <span>${garantia ? "Em estoque!" : "Esgotado =("}</span>
    </div>
  `
}
