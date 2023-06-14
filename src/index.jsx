import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas} from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={{
            fov: 55,
            near: 0.1,
            far: 2000,
            position: [-6, 1, 6.9]
        }}
    >
        <Experience/>
    </Canvas>
)