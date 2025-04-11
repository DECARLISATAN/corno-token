import { useEffect, useState } from "react";

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Erro ao conectar carteira:", err);
      }
    } else {
      alert("MetaMask não detectado!");
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        setAccount(accounts[0] || null);
      });
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-6 text-center">
        CORNO TOKEN 🐂🔥
      </h1>

      <p className="text-center max-w-xl mb-8 text-lg text-gray-300">
        A única moeda que te dá chifre e ainda valoriza! Se você já foi traído,
        esse projeto é pra você. Meme, caos e Web3 misturados numa só vergonha
        alheia.
      </p>

      {account ? (
        <div className="text-center mb-4">
          <p className="text-green-400">Carteira conectada:</p>
          <p className="text-sm break-all">{account}</p>
        </div>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-6 rounded-2xl mb-6 shadow-lg transition-all"
        >
          Conectar Carteira
        </button>
      )}

      <button
        className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all"
        onClick={() => alert("Mint ainda não disponível 😢")}
      >
        Mintar NFT Misteriosa
      </button>

      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Corno Token. Todos os direitos (ou cornos) reservados.
      </footer>
    </main>
  );
}
