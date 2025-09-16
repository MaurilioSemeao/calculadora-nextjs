import Head from 'next/head';
import Calculator from './components/Calculator';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Calculadora Simples</title>
                <meta name="description" content="Calculadora simples com Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Calculator />
            </main>
        </div>
    );
}
