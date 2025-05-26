import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function ReceitaDetalhe() {
  const router = useRouter();
  const { id } = router.query;
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => setReceita(data.meals[0]));
    }
  }, [id]);

  if (!receita) return <p>Carregando receita...</p>;

  return (
    <>
      <Head>
        <title>{receita.strMeal}</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <main className="container">
        <h1>{receita.strMeal}</h1>
        <img
          src={receita.strMealThumb}
          alt={receita.strMeal}
          className="foto-receita"
        />
        <h3>Instruções:</h3>
        <p>{receita.strInstructions}</p>
      </main>
    </>
  );
}
