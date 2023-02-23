import { Component, createSignal } from "solid-js";

const App: Component = () => {
  const [signal, updateSignal] = createSignal(0);

  return (
    <div class="h-100 flex min-h-screen min-w-fit justify-center bg-slate-300">
      <div class="flex w-auto flex-col justify-evenly">
        <p class="py-5 text-center text-4xl text-black">Hello tailwind!</p>
        <p class="py-5 text-center text-3xl">{signal()}</p>
        <div class="flex flex-row justify-center gap-10">
          <button
            class="rounded-lg bg-slate-500 py-2 px-2 text-lg text-white outline-blue-500"
            onClick={() => updateSignal(signal() - 1)}
          >
            Decrement
          </button>
          <button
            class="rounded-lg bg-slate-500 py-2 px-2 text-lg text-white outline-blue-500"
            onClick={() => updateSignal(signal() + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
