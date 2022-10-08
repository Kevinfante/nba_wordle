
export default function MatchBox({ matches }) {

  return (
    <div >
      {matches.map((match , key = 0)=> (
      <div key = {key++}>{match}</div>
      )
      )}
    </div>
  )
}