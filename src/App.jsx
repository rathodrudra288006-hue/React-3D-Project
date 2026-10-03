import "./App.css";
import Dog from "./components/Dog";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <>
      <main>
        <Canvas
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
            backgroundImage: "url(/background-m.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Dog />
        </Canvas>
        <section id="section-1">
          <nav>
            <div class-name="nav-elem">
              <svg width="6" height="11" class="__web-inspector-hide-shortcut__">
    	        <use xlink:href="https://dogstudio.co/app/themes/portfolio-2018/static/assets/spritesheet.svg#caret-left"></use> 
  	          </svg>
            </div>
          </nav>
        </section>
        <section id="section-2"></section>
        <section id="section-3"></section>
      </main>
    </>
  );
}

export default App;
