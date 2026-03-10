"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation, Language } from "@/contexts/TranslationContext";
import { createNoise3D } from "simplex-noise";
import { cn } from "@/lib/utils";

export const WavyBackground = ($2) => {
  const { t } = useTranslation();
    const noise = createNoise3D();
    let w: number, h: number, nt: number, i: number, x: number, ctx: any, canvas: any;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const getSpeed = () => {
        switch (speed) {
            case "slow": return 0.001;
            case "fast": return 0.002;
            default: return 0.001;
        }
    };

    const init = () => {
        canvas = canvasRef.current;
        if (!canvas) return;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;

        window.onresize = function () {
            if (!ctx) return;
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };

    const waveColors = colors ?? [
        "#FADADD", // sakura pink
        "#FFD700", // warm gold
        "#E0FFFF", // pale cyan
        "#FF7F50", // soft coral
        "#E6E6FA", // muted lavender
    ];

    const drawWave = (n: number) => {
        nt += getSpeed();
        for (i = 0; i < n; i++) {
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for (x = 0; x < w; x += 5) {
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // adjust to center
            }
            ctx.stroke();
            ctx.closePath();
        }
    };

    let animationId: number;
    const render = () => {
        if (!ctx) return;
        ctx.fillStyle = backgroundFill || "#FAF9F6"; // mangako-ivory
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };

    useEffect(() => {
        init();
        return () => {
            cancelAnimationFrame(animationId);
        };
    }, []);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(
            typeof window !== "undefined" &&
            navigator.userAgent.includes("Safari") &&
            !navigator.userAgent.includes("Chrome")
        );
    }, []);

    return (
        <div className={cn("h-screen flex flex-col items-center justify-center relative overflow-hidden", containerClassName)}>
            <canvas
                className="absolute inset-0 z-0"
                ref={canvasRef}
                id="canvas"
                style={{
                    ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
                }}
            ></canvas>
            <div className={cn("relative z-10", className)} {...props}>
                {children}
            </div>
        </div>
    );
};
