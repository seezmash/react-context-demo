import Link from 'next/link'

const MovieCard = ({ item }) => {
  let name = item ? item.name : 'no name'
  let price = item ? item.price : 'no price'
  return (
    <div className="relative w-60 mb-6 border bg-white bg-gray-50F mr-8 px-5 py-3 rounded">
      <p className="font-semibold">{name}</p>
      <p className="font-semibold mt-2">{price}</p>
    </div>
  )
}

export default MovieCard
