import * as b from '@babylonjs/core';
import * as i from '@babylonjs/inspector';

let canvas: HTMLCanvasElement =
    document.getElementById('canvas') as HTMLCanvasElement;
canvas.width  = window.innerWidth - 15;
canvas.height = window.innerHeight - 20;
let ctx: WebGLRenderingContext =
    canvas.getContext('webgl') as WebGLRenderingContext;

let engine: b.Engine = new b.Engine(canvas, true);

let scene: b.Scene = new b.Scene(engine);
let cam: b.ArcRotateCamera =
    new b.ArcRotateCamera('cam', 0, 0, 30, new b.Vector3(0, 0, 0), scene);
cam.attachControl(canvas, true);
let light: b.HemisphericLight =
    new b.HemisphericLight('light', new b.Vector3(0, 0, 0), scene);

let mesh: b.Mesh            = b.MeshBuilder.CreateTorusKnot('mesh',
    {radius : 5, tube : 2, radialSegments : 1024, tubularSegments : 32}, scene);
let mat: b.StandardMaterial = new b.StandardMaterial('mat', scene);
mesh.material               = mat;

i.Inspector.Show(scene, {
  showExplorer: true,
  showInspector: true,
  enablePopup: true,
  enableClose: false,
  overlay: true,
  embedMode: false,
  handleResize: true,
});
engine.runRenderLoop(() => {
  light.direction = cam.position;
  scene.render();
});

window.addEventListener('resize', () => { engine.resize(); });
