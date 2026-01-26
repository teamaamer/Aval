"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import * as THREE from "three";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Determine if dark mode
    const isDark = resolvedTheme === "dark" || theme === "dark";

    // Create flowing lines with theme-aware colors
    const lineGroups: THREE.Line[] = [];
    const numLines = 40;
    const colors = isDark ? [
      new THREE.Color(0xef4444), // red-500 (brighter for dark)
      new THREE.Color(0xf87171), // red-400 (brighter for dark)
      new THREE.Color(0xfbbf24), // amber-400 (brighter for dark)
      new THREE.Color(0xF4C042), // custom yellow
    ] : [
      new THREE.Color(0xdc2626), // red-600
      new THREE.Color(0xef4444), // red-500
      new THREE.Color(0xf59e0b), // amber-500
      new THREE.Color(0xF4C042), // custom yellow
    ];

    for (let i = 0; i < numLines; i++) {
      const points = [];
      const segments = 100;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const x = (t - 0.5) * 20;
        const y = Math.sin(t * Math.PI * 2 + i * 0.2) * 2;
        const z = Math.cos(t * Math.PI * 2 + i * 0.2) * 2;
        points.push(new THREE.Vector3(x, y, z));
      }

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: isDark ? 0.4 : 0.6,
        linewidth: 2,
      });

      const line = new THREE.Line(geometry, material);
      line.rotation.y = (i / numLines) * Math.PI * 2;
      lineGroups.push(line);
      scene.add(line);
    }

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      lineGroups.forEach((line, index) => {
        line.rotation.y += 0.001;
        line.rotation.z = Math.sin(time + index * 0.1) * 0.1;
        
        const positions = line.geometry.attributes.position;
        const array = positions.array as Float32Array;
        
        for (let i = 0; i < array.length; i += 3) {
          const t = (i / 3) / (array.length / 3);
          array[i + 1] = Math.sin(t * Math.PI * 2 + index * 0.2 + time) * 2;
          array[i + 2] = Math.cos(t * Math.PI * 2 + index * 0.2 + time) * 2;
        }
        
        positions.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      lineGroups.forEach((line) => {
        line.geometry.dispose();
        (line.material as THREE.Material).dispose();
      });
    };
  }, [mounted, theme, resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ background: "transparent" }}
    />
  );
}
