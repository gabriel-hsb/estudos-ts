/* 

// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

*/

interface Course {
  aulas: number
  gratuito: boolean
  horas: number
  idAulas: number[]
  nivel: CourseLevel
  nome: string
  tags: string[]
}

type CourseLevel = "iniciante" | "avancado"

async function fetchData() {
  const URL = "https://api.origamid.dev/json/cursos.json"

  try {
    const res = await fetch(URL)
    const courses: Course[] = await res.json()

    showData(courses)

    console.log(courses)
  } catch (err) {
    throw new Error("Erro: " + err)
  }
}

fetchData()

function verifyLevel(level: CourseLevel): string {
  if (level === "iniciante") {
    return "CornflowerBlue"
  } else if (level === "avancado") {
    return "Crimson"
  }

  throw new Error(`Nível desconhecido: ${level}`)
}

function showData(courses: Course[]) {
  courses.forEach(({ aulas, gratuito, horas, idAulas, nivel, nome, tags }) => {
    document.body.innerHTML += `
    <div>
      <h1 style="color: ${verifyLevel(nivel)}"> ${nome} </h1>
      <p><i>Nível ${nivel.replace("avancado", "avançado")}</i></p>

      <b>${gratuito ? "Totalmente grátis" : "Apenas 1BTC"}</b>
      <p> ${horas} horas de curso! </p>

      <h2>Você vai aprender:</h2>
      <ul style="list-style: '👉'">
        ${tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>

    </div>
    <hr/>
  `
  })
}
