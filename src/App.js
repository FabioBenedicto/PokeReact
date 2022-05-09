/* O Node. js pode ser definido como um ambiente de execução Javascript server-sid, isto é, significa que com o Node é possível criar aplicações Javascript para rodar como uma aplicação standalone em uma máquina, não dependendo de um browser para a execução, como estamos acostumados. 

  Criar projeto com o template react -> npx create-react-app pokereact 

  React é biblioteca javascript desenvolvido pelo Facebook. Ela é utilizada pelo whatasap, netflix, twitter e muitos outros. Ele usa uma sintaxe chamda JSX (Javascript XML) que possibilita a escrita de uma sintaxe muito parecida com a do HTML em arquivos Javascript. A pirncipal utilidade do React é para construir SPA's (Single-Page Applications/Aplicações de páginas única)

  Qual a diferença entre uma SPA e uma página HTML simples ?
  Para cada página HTML, você tem que fazer uma nova requisição para o servidor, custando perfomance e espaço. Já nas SPA's a requisição é feite uma vez, a partir disso a página só atualiza o conteúdo dentro do HTML, deixando seu site muito mais flúido
  
  node_modules -> pasta com as biblitoceas que usamos durante o projeto 

  public -> pasta com alguns arquivos estáticos 
          unico index.html onde mexemos no conteúdo por meio do react

 src -> pasta com o código fonte

 git ignore -> arquivo com o que o git deve ignoras uma vez que são arquivos padrões

 package-lock.json -> possui inforamçõies das biblitoecas dentro do node_modules

 package.jsonm -> todas as informações do nosso projeto

 3 fundamentos básicos ->

  Componente = função que retorna um jsx, solucionando repetições de código

  Propriedades = parametros passados a um componente react

  Estado

  Hooks

  APi 
  
  e JSON

*/

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/pokedex/:page" component={Pokedex} />
        <Route path="/pokemon/:pokemonId" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
