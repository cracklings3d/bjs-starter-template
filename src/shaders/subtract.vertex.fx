// #version 300 es

precision highp float;

// Attributes
attribute vec3 position;
// attribute vec3 normal;

// Uniforms
// uniform mat4 world;
uniform mat4 wvp;

// Varying
// varying vec3 vPositionW;
// varying vec3 vNormalW;

void main() {
    vec4 outPosition = wvp * vec4(position, 1.0);
    gl_Position = outPosition;
    
    // vPositionW = vec3(world * vec4(position, 1.0));
    // vNormalW = normalize(vec3(world * vec4(normal, 0.0)));
}
