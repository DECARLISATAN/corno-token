"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (err) {
        console.error("Erro ao conectar carteira:", err);
      }
    } else {
      alert("MetaMask não encontrada. Instale para continuar.");
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0] || "");
      });
    }
  }, []);

  const roadmap = [
    {
      title: "Fase 1 - Iniciação da Cornice",
      items: [
        "Lançamento do Corno Token na BSC",
        "Criação de comunidade no Telegram e Twitter",
        "Site oficial com whitelist",
        "Airdrop de divulgação",
        "Primeira leva de memes e artes"
      ]
    },
    {
      title: "Fase 2 - Crescimento do Chifre",
      items: [
        "Campanhas com influenciadores",
        "Listagem em sites de tracking (CoinGecko/CoinMarketCap)",
        "Pré-venda pública",
        "Listagem na PancakeSwap",
        "Lançamento da coleção de NFTs"
      ]
    },
    {
      title: "Fase 3 - Dominação Memética",
      items: [
        "Criação de utilidades para os NFTs (staking, boosts, etc)",
        "Lançamento de merch oficial",
        "Eventos e sorteios para a comunidade",
        "Expansão para outras blockchains",
        "Parcerias com outras comunidades de memes"
      ]
    },
    {
      title: "Fase 4 - O Apocalipse do Corno",
      items: [
        "DAO da comunidade para decisões futuras",
        "Criação de um mini game play-to-earn com os NFTs",
        "CornoSwap: uma mini plataforma para troca de tokens memes",
        "Campanhas globais de zoeira",
        "Corno Token nos trends do X (Twitter)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[url('/bg-dark.jpg')] bg-cover bg-center text-white p-6 space-y-16 max-w-5xl mx-auto">
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-black bg-gradient-to-r from-red-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]"
        >
          CORNO TOKEN
        </motion.h1>
        <p className="text-2xl italic text-gray-300 max-w-2xl mx-auto">
          O token que transforma dor de corno em lucro e risadas.
        </p>
        <Button
          onClick={connectWallet}
          className="mt-4 text-lg px-6 py-3 rounded-2xl bg-red-700 hover:bg-red-800 transition shadow-lg shadow-red-600/40 flex items-center gap-2 mx-auto"
        >
          <Flame className="w-5 h-5" />
          {walletAddress
            ? `Conectado: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            : "Conectar MetaMask"}
        </Button>
      </section>

      <section className="grid gap-6">
        <h2 className="text-4xl font-bold text-pink-500 drop-shadow">🔥 Sobre o Projeto</h2>
        <Card>
          <CardContent className="p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-pink-600 shadow-inner shadow-pink-900/30 text-gray-300">
            Corno Token é uma memecoin que surgiu da dor, mas vai viver na zoeira. A ideia é simples: unir uma comunidade que já sofreu, mas agora quer lucrar com isso. É um projeto com humor ácido, memes afiados e uma comunidade que entende a sofrência como ninguém.
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6">
        <h2 className="text-4xl font-bold text-pink-500 drop-shadow">🗺️ Roadmap</h2>
        <div className="relative border-l border-purple-600 pl-6 space-y-10">
          {roadmap.map((fase, i) => (
            <div key={i} className="relative">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 top-1" />
              <h3 className="text-xl font-bold mb-2 text-purple-300">{fase.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {fase.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <h2 className="text-4xl font-bold text-pink-500 drop-shadow">💀 Coleção de NFTs</h2>
        <Card>
          <CardContent className="p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-pink-600 shadow-inner shadow-pink-900/30 text-gray-300">
            Os NFTs do Corno Token são únicos e representam diferentes estágios da sofrência. Com raridades que vão de Chifre Básico até Chifre Flamejante, eles garantem acesso a staking, eventos e boosts nos sorteios.
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6">
        <h2 className="text-4xl font-bold text-pink-500 drop-shadow">📊 Tokenomics</h2>
        <Card>
          <CardContent className="p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-pink-600 shadow-inner shadow-pink-900/30 text-gray-300">
            <ul className="list-disc list-inside space-y-1">
              <li>Supply total: 69.000.000.000 CORNO</li>
              <li>30% Pré-venda</li>
              <li>25% Liquidez</li>
              <li>15% Marketing</li>
              <li>15% Equipe e Parceiros</li>
              <li>10% Airdrop</li>
              <li>5% Reserva para utilidades futuras</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6">
        <h2 className="text-4xl font-bold text-pink-500 drop-shadow">📝 Whitelist para Pré-venda</h2>
        <Card>
          <CardContent className="p-6 bg-black/60 backdrop-blur-sm rounded-xl border border-pink-600 shadow-inner shadow-pink-900/30 text-gray-300">
            <p className="mb-4">Garanta sua vaga na pré-venda do Corno Token antes de todo mundo. Preencha o formulário abaixo e entre para o seleto clube dos primeiros cornos holders.</p>
            <form
              className="grid gap-4"
              action="https://formsubmit.co/cornotoken@proton.me"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="nome" placeholder="Seu nome" className="p-3 bg-black border border-pink-600 rounded-xl text-white" required />
              <input type="email" name="email" placeholder="Seu e-mail" className="p-3 bg-black border border-pink-600 rounded-xl text-white" required />
              <input type="text" name="carteira" placeholder="Carteira BSC (BEP-20)" className="p-3 bg-black border border-pink-600 rounded-xl text-white" required />
              <Button className="w-full bg-red-700 hover:bg-red-800 transition shadow-lg shadow-red-600/30" type="submit">
                Entrar para Whitelist
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
