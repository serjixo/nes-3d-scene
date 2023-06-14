import {Html, useGLTF} from "@react-three/drei";
import React from "react";

export default function Tv(props) {
    const {nodes, materials} = useGLTF("./models/tv.glb");

    return (
        <group {...props} dispose={null}>
            <group position={[-2, 0.2, -3]} scale={1.6}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television.geometry}
                    material={materials.Black}
                />
                {/*SCREEN*/}
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television_1.geometry}
                    material={materials.Material}
                >

                </mesh>
                <Html
                    transform
                    occlude
                    wrapperClass={'htmlScreen'}
                    distanceFactor={1.7}
                    position={[-0.38, 1, 1]}
                >
                    <div className={'iframeWrapper'}>
                        <iframe src={'https://openhtml5games.github.io/games-mirror/dist/mariohtml5/main.html'}/>
                    </div>

                </Html>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television_2.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television_3.geometry}
                    material={materials["Material.003"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television_4.geometry}
                    material={materials["Material.004"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.television_5.geometry}
                    material={materials["Material.005"]}
                />
            </group>

        </group>
    )
        ;
}