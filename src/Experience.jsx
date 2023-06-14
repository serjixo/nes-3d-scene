import {Center, ContactShadows, Environment, PresentationControls} from '@react-three/drei'
import React from "react";
import NintendoSetUp from "./world/NintendoSetUp.jsx";
import Tv from "./world/Tv.jsx";
import {environmentVariables} from "./utils/environmentVariables.js";

export default function Experience() {

    return <>
        <directionalLight/>
        <Environment preset={'city'}/>

        <color args={[environmentVariables.colors.fifth]} attach={'background'}/>

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-13, 0.75]}
            config={{mass: 2, tension: 400}}
            snap={{mass: 4, tension: 400}}
        >
            <Center>
                <Tv/>
                <NintendoSetUp/>
            </Center>

        </PresentationControls>
        <ContactShadows position-y={-1.4}
                        opacity={0.4}
                        scale={5}
                        blur={2.4}
        />
    </>;
}