import { Link } from "wouter"

const POPULAR_GIFS = ["Gato", "Perro", "Morty", "Saul"]

export default function Home() {
  return (
    <>
      <h3 className="App-title">Listado de Gifs</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li className="App-list" key={popularGif}>
          <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </>
  )
}