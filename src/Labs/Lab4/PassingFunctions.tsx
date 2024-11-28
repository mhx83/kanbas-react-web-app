export default function PassingFunctions(
  { theFunction }: { theFunction: () => void }) {
  // Passing a Function with Arguments
  // { theFunction }: { theFunction: (arg1: string, arg2: number) => void }
  return (
    <div>
      <h2>Passing Functions</h2>
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <hr/>
    </div>
  );}
