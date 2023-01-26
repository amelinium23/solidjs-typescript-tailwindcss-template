import { Component, createSignal } from "solid-js"

const App: Component = () => {
  const [signal, updateSignal] = createSignal(0)

  return (
    <div class="flex justify-center h-100 min-h-screen min-w-fit bg-slate-300">
      <div class="flex flex-col justify-evenly w-auto">
        <p class="text-4xl text-black text-center py-5">Hello tailwind!</p>
        <p class="text-3xl text-center py-5">{signal()}</p>
        <div class="flex flex-row gap-10 justify-center">
          <button
            class="text-lg py-2 px-2 bg-slate-500 rounded-lg outline-blue-500 text-white"
            onClick={() => updateSignal(signal() - 1)}
          >
            Decrement
          </button>
          <button
            class="text-lg py-2 px-2 bg-slate-500 outline-blue-500 rounded-lg text-white"
            onClick={() => updateSignal(signal() + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
