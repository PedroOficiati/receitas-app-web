import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Site de Receitas</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <main className="container">
        <header className="header">
          <img src="logo.jpeg" alt="logo" />
          <h1>SITE DE RECEITAS</h1>
          <p>SELECIONE A LETRA INICIAL DA SUA RECEITA:</p>
          <p className="alfabeto">A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z</p>
        </header>

        <section className="conteudo">
          <div className="lista">
            <h2>RECEITAS COM A LETRA "A"</h2>
            <ul>
              <li><Link href="/receita/1">Arroz à grega</Link></li>
              <li><Link href="/receita/2">Abobrinha recheada</Link></li>
              <li><Link href="/receita/3">Acarajé</Link></li>
              <li><Link href="/receita/4">Açaí na tigela</Link></li>
              <li><Link href="/receita/5">Almôndegas ao molho</Link></li>
            </ul>
          </div>

          <div className="detalhes">
            <h2>AÇAÍ NA TIGELA</h2>
            <img src="acai.jpg" alt="Açaí na tigela" className="foto-receita" />
            <h3>INSTRUÇÕES:</h3>
            <p>
              Para fazer o açaí na tigela, bata a polpa de açaí congelada no liquidificador com banana
              e, se quiser, adoce com um pouco de xarope de guaraná. Depois, coloque o creme em uma tigela
              e finalize com granola, fatias de banana e mel por cima. Sirva imediatamente.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}