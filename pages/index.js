import { useState } from "react";
import Link from "next/link";

export default function Home({ receitasPorLetra }) {
  const [letraSelecionada, setLetraSelecionada] = useState("a");
  const [busca, setBusca] = useState("");

  const receitas =
    receitasPorLetra.find((r) => r.letra === letraSelecionada)?.receitas || [];

  const resultados = busca
    ? receitas.filter((r) =>
        r.strMeal.toLowerCase().includes(busca.toLowerCase())
      )
    : receitas;

  return (
    <article style={{ padding: "20px", fontFamily: "Arial" }}>
      <header style={{ textAlign: "center", marginBottom: "20px" }}>
        <img src="/logo.jpeg" alt="Logo" className="logo" />
        <h1>SITE DE RECEITAS</h1>
        <p>Busque sua receita favorita ou escolha uma letra</p>
      </header>

      {/* IMAGEM DESTAQUE */}
      <img src="/foto1.png" alt="Imagem destaque" className="featured-image" />

      {/* CAMPO DE BUSCA */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar receita..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      {/* SELETOR DE LETRAS */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        {["a", "b", "c", "d"].map((letra) => (
          <button
            key={letra}
            onClick={() => {
              setLetraSelecionada(letra);
              setBusca(""); // limpa busca ao trocar letra
            }}
            style={{
              margin: "5px",
              padding: "10px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: letraSelecionada === letra ? "#c4a04d" : "#eee",
              color: letraSelecionada === letra ? "#fff" : "#333",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {letra.toUpperCase()}
          </button>
        ))}
      </div>

      {/* LISTA DE RECEITAS */}
      <section>
        <h2 style={{ marginBottom: "10px" }}>
          Receitas com a letra "{letraSelecionada.toUpperCase()}"
        </h2>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {resultados.length > 0 ? (
            resultados.map((r) => (
              <li key={r.idMeal} style={{ marginBottom: "10px" }}>
                <Link
                  href={`/receita/${r.idMeal}`}
                  style={{
                    textDecoration: "none",
                    color: "#4a2600",
                    fontWeight: "bold",
                  }}
                >
                  {r.strMeal}
                </Link>
              </li>
            ))
          ) : (
            <p>Nenhuma receita encontrada.</p>
          )}
        </ul>
      </section>
    </article>
  );
}

export async function getStaticProps() {
  const letras = ["a", "b", "c", "d"];

  const receitasPorLetra = await Promise.all(
    letras.map(async (letra) => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letra}`
      );
      const data = await res.json();
      return {
        letra,
        receitas: data.meals ? data.meals.slice(0, 4) : [],
      };
    })
  );

  return {
    props: {
      receitasPorLetra,
    },
  };
}
