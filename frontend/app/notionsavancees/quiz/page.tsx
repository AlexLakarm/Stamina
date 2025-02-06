/* eslint-disable react/no-unescaped-entities */
"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, X } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function QuizPage() {
  const [answers, setAnswers] = useState<Record<string, 'correct' | 'incorrect' | null>>({
    q1: null,
    q2: null,
    q3: null,
    q4: null
  });

  const [score, setScore] = useState(0);

  useEffect(() => {
    const correctAnswers = Object.values(answers).filter(answer => answer === 'correct').length;
    setScore(correctAnswers);
  }, [answers]);

  const handleAnswer = (question: string, isCorrect: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [question]: isCorrect ? 'correct' : 'incorrect'
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/notionsavancees">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
      </Link>

      <h1 className="text-4xl font-bold text-center mb-12">
        Testez vos connaissances !
      </h1>

      <div className="relative">
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            <CarouselItem>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-sm text-muted-foreground text-center mb-4">
                  Question 1/4
                </div>
                <h2 className="text-xl font-semibold mb-6">
                  Etant donné qu&apos;il y a des &quot;stables coins&quot; en crypto, mon capital est garanti.
                </h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 justify-center mb-6">
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q1', false)}
                      disabled={answers.q1 !== null}
                    >
                      Oui
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q1', true)}
                      disabled={answers.q1 !== null}
                    >
                      Non
                    </Button>
                  </div>

                  <div className="flex justify-center mb-6">
                    <CarouselNext className="static transform-none mx-auto" />
                  </div>

                  {answers.q1 && (
                    <Card className="mt-2 border-2 ${answers.q1 === 'correct' ? 'border-green-500' : 'border-red-500'}">
                      <CardContent className="pt-6">
                        <div className={`flex items-center gap-2 text-lg font-medium mb-4
                          ${answers.q1 === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          {answers.q1 === 'correct' ? (
                            <>
                              <Check className="h-5 w-5" />
                              <span>C'est la bonne réponse !</span>
                            </>
                          ) : (
                            <>
                              <X className="h-5 w-5" />
                              <span>Mauvaise réponse</span>
                            </>
                          )}
                        </div>
                        
                        <div className="text-muted-foreground space-y-4">
                          <p>
                            Un stablecoin est conçu pour maintenir une parité avec une devise traditionnelle 
                            (souvent le dollar), mais cette parité n'est pas garantie. Le phénomène de "depeg" 
                            peut survenir, c'est-à-dire que le stablecoin perd sa parité. 
                          </p>
                          <p>
                            L'exemple le plus marquant est celui de UST/LUNA en mai 2022. UST, un stablecoin 
                            algorithmique censé valoir 1$, s'est effondré en quelques jours, perdant complètement 
                            sa parité avec le dollar (la valeur de 1 UST devenant infértieur à 1$) et entraînant la perte de plusieurs milliards de dollars 
                            pour les investisseurs.
                            Mais pourquoi un investisseur déciderait de conserver ses actifs en UST plutôt qu'en USDC ou USDT ?
                            La répons est simple : le rendement. L'UST offrait à l'époque un rendement alléchant de 20% par an, 
                            alors que les autres stablecoins offraient un rendement proche de 5%. Cela était trop beau pour être vrai et reposait sur des mécanismes insoutenables sur du long terme, comme l'avenir le prouvera.
                          </p>
                          <p className="font-medium">
                            Il est donc crucial de comprendre qu'aucun investissement en crypto n'est garanti à 100%, 
                            même avec les stablecoins.
                            Pour réduire les risques, il est conseillé de faire confiance à des stables coins non algorithmiques et bien établis comme l'USDC ou l'USDT.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-sm text-muted-foreground text-center mb-4">
                  Question 2/4
                </div>
                <h2 className="text-xl font-semibold mb-6">
                  Si la crypto DOGE est à 0,50$, il m&apos;est possible de faire un x1000 (1 $DOGE = 5000$) si elle suit la trajectoire de Bitcoin.
                </h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 justify-center mb-6">
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q2', false)}
                      disabled={answers.q2 !== null}
                    >
                      Oui
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q2', true)}
                      disabled={answers.q2 !== null}
                    >
                      Non
                    </Button>
                  </div>

                  <div className="flex justify-center mb-6">
                    <CarouselNext className="static transform-none mx-auto" />
                  </div>

                  {answers.q2 && (
                    <Card className={`mt-2 border-2 ${answers.q2 === 'correct' ? 'border-green-500' : 'border-red-500'}`}>
                      <CardContent className="pt-6">
                        <div className={`flex items-center gap-2 text-lg font-medium mb-4
                          ${answers.q2 === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          {answers.q2 === 'correct' ? (
                            <>
                              <Check className="h-5 w-5" />
                              <span>C'est la bonne réponse !</span>
                            </>
                          ) : (
                            <>
                              <X className="h-5 w-5" />
                              <span>Mauvaise réponse</span>
                            </>
                          )}
                        </div>
                        
                        <div className="text-muted-foreground space-y-4">
                          <p>
                            À 0,50$ et avec une circulation de 142 milliards de DOGE, la capitalisation actuelle 
                            est d'environ 71 milliards de dollars.
                          </p>
                          <p>
                            Un prix de 5000$ donnerait une capitalisation de 710 000 milliards de dollars 
                            (5000$ × 142 milliards), soit plus de 13 fois la capitalisation actuelle de Bitcoin 
                            (environ 52 000 milliards) et presque autant que le PIB des États-Unis !
                          </p>
                          <p className="font-medium">
                            La marketcap est un concept fondamental pour évaluer le potentiel réaliste d'une 
                            cryptomonnaie. Il ne suffit pas de regarder uniquement le prix par unité, il faut 
                            considérer la capitalisation totale et la comparer aux autres actifs du marché.

                            Pour cela vous pouvez utiliser des outils reconnus comme CoinGecko ou CoinMarketCap qui classent par défaut les cryptomonnaies capitalisation décroissante.
                          </p>
                          <p className="text-sm italic mt-2">
                            Source : CoinGecko (Janvier 2024)
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-sm text-muted-foreground text-center mb-4">
                  Question 3/4
                </div>
                <h2 className="text-xl font-semibold mb-6">
                  Je peux laisser mes fonds sur Binance ou un autre CEX sans inquiétudes : mes fonds sont à l'abri à 100%.
                </h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 justify-center mb-6">
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q3', false)}
                      disabled={answers.q3 !== null}
                    >
                      Vrai
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q3', true)}
                      disabled={answers.q3 !== null}
                    >
                      Faux
                    </Button>
                  </div>

                  <div className="flex justify-center mb-6">
                    <CarouselNext className="static transform-none mx-auto" />
                  </div>

                  {answers.q3 && (
                    <Card className={`mt-2 border-2 ${answers.q3 === 'correct' ? 'border-green-500' : 'border-red-500'}`}>
                      <CardContent className="pt-6">
                        <div className={`flex items-center gap-2 text-lg font-medium mb-4
                          ${answers.q3 === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          {answers.q3 === 'correct' ? (
                            <>
                              <Check className="h-5 w-5" />
                              <span>C'est la bonne réponse !</span>
                            </>
                          ) : (
                            <>
                              <X className="h-5 w-5" />
                              <span>Mauvaise réponse</span>
                            </>
                          )}
                        </div>
                        
                        <div className="text-muted-foreground space-y-4">
                          <p>
                            Un CEX (exchange centralisé) peut, comme toute institution financière, faire faillite. 
                            L'exemple le plus marquant est celui de FTX en novembre 2022, l'un des plus grands exchanges 
                            au monde à l'époque, qui s'est effondré en quelques jours, emportant avec lui les fonds de 
                            millions d'utilisateurs.
                          </p>
                          <p>
                            Cette situation rappelle étrangement la faillite de Silicon Valley Bank en mars 2023, 
                            montrant que ce risque existe aussi bien dans la finance traditionnelle que dans la crypto.
                          </p>
                          <p className="font-medium">
                            C'est pourquoi la communauté crypto insiste sur le principe "Not your keys, not your coins" : 
                            seuls les fonds que vous détenez dans votre propre wallet sont vraiment sous votre contrôle. 
                            Les CEX ne devraient être utilisés que pour les transactions, pas pour le stockage à long terme.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <div className="text-sm text-muted-foreground text-center mb-4">
                  Question 4/4
                </div>
                <h2 className="text-xl font-semibold mb-6">
                  J&apos;utilise désormais un hardware wallet, il ne peut plus rien m&apos;arriver.
                </h2>
                <div className="flex flex-col">
                  <div className="flex gap-4 justify-center mb-6">
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q4', false)}
                      disabled={answers.q4 !== null}
                    >
                      Vrai
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-24"
                      onClick={() => handleAnswer('q4', true)}
                      disabled={answers.q4 !== null}
                    >
                      Faux
                    </Button>
                  </div>

                  <div className="flex justify-center mb-6">
                    <CarouselNext className="static transform-none mx-auto" />
                  </div>

                  {answers.q4 && (
                    <Card className={`mt-2 border-2 ${answers.q4 === 'correct' ? 'border-green-500' : 'border-red-500'}`}>
                      <CardContent className="pt-6">
                        <div className={`flex items-center gap-2 text-lg font-medium mb-4
                          ${answers.q4 === 'correct' ? 'text-green-500' : 'text-red-500'}`}
                        >
                          {answers.q4 === 'correct' ? (
                            <>
                              <Check className="h-5 w-5" />
                              <span>C'est la bonne réponse !</span>
                            </>
                          ) : (
                            <>
                              <X className="h-5 w-5" />
                              <span>Mauvaise réponse</span>
                            </>
                          )}
                        </div>
                        
                        <div className="text-muted-foreground space-y-4">
                          <p>
                            Un hardware wallet offre effectivement une sécurité supérieure, mais il existe toujours des risques :
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>
                              <span className="font-medium">Phishing</span> : Des sites malveillants peuvent se faire passer 
                              pour des interfaces légitimes et vous inciter à connecter votre wallet et signer des transactions 
                              frauduleuses.
                            </li>
                            <li>
                              <span className="font-medium">Perte de la phrase de récupération</span> : Si vous perdez ou 
                              exposez votre phrase secrète, quelqu'un peut recréer votre wallet, même sans accès physique 
                              à votre device.
                            </li>
                            <li>
                              <span className="font-medium">Malwares</span> : Des logiciels malveillants peuvent modifier 
                              les adresses de destination lors des transactions, même avec un hardware wallet.
                            </li>
                            <li>
                              <span className="font-medium">Erreur humaine</span> : Une mauvaise manipulation ou une 
                              validation trop rapide d'une transaction peut toujours entraîner la perte de fonds.
                            </li>
                          </ul>
                          <p className="font-medium mt-4">
                            La sécurité en crypto repose sur une combinaison d'outils (hardware wallet) ET de bonnes 
                            pratiques (vigilance, vérification, patience).
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="p-6 bg-card rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-8">
                  Votre score
                </h2>
                <div className="space-y-8">
                  <div className="flex justify-center items-center">
                    <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-4 border-primary">
                      <span className="text-4xl font-bold">{score}/4</span>
                    </div>
                  </div>

                  <div className="space-y-4 text-center">
                    {score === 4 ? (
                      <>
                        <p className="text-green-500 text-xl font-semibold">
                          Félicitations ! 🎉
                        </p>
                        <p className="text-muted-foreground">
                          Vous avez parfaitement compris les concepts clés de la blockchain et de la sécurité.
                        </p>
                      </>
                    ) : score >= 2 ? (
                      <>
                        <p className="text-blue-500 text-xl font-semibold">
                          Bon travail ! 👍
                        </p>
                        <p className="text-muted-foreground">
                          Vous avez une bonne compréhension des bases. N'hésitez pas à revoir les points qui vous ont posé problème.
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-orange-500 text-xl font-semibold">
                          Continuez d'apprendre ! 📚
                        </p>
                        <p className="text-muted-foreground">
                          La blockchain peut sembler complexe au début. Prenez le temps de bien comprendre chaque concept.
                        </p>
                      </>
                    )}
                  </div>

                  <div className="flex justify-center gap-4">
                    <Link href="/notionsavancees">
                      <Button variant="outline">
                        Retour aux notions
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button>
                        Continuer l'aventure
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}