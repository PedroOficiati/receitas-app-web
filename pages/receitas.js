import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function Receitas() {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    fetch("https://api-receitas-pi.vercel.app/receitas/todas")
      .then((res) => res.json())
      .then((data) => setReceitas(data));
  }, []);

  return (
    <>
      <Head>
        <title>Receitas</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <main className="container">
        <h1>Receitas em Português</h1>
        <ul>
          {receitas.map((r) => (
            <li key={r.id}>
              <strong>{r.receita}</strong> —{" "}
              <Link href={`/receita/${r.id}`}>Ver mais</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
