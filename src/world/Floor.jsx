import Effects from "../utils/Effects.jsx";
import {environmentVariables} from "../utils/environmentVariables.js";

export default function Floor() {

    return (<>

            <mesh
                scale={15}
                rotation={[-Math.PI * 0.5, 0, 0]}
            >
                <planeGeometry/>
                <meshBasicMaterial color={environmentVariables.colors.fifth} metalness={0} roughness={0}/>
            </mesh>

        </>
    )

}
