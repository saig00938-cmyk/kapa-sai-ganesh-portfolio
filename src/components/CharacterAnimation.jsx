// src/components/CharacterAnimation.jsx
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// Image URLs – actual assets
const profileImg = "https://i.postimg.cc/52C76Xkz/Neon-Halo-Portrait-of-a-Young-Man.png";
const standingImg = "https://i.postimg.cc/R0PXYwWW/Stylized-Young-Man-in-Black-Outfit-1.png";
const wavingImg = "https://i.postimg.cc/dt8nYb71/Waving-Man-in-Black-Outfit-(1).png";

// Helper to preload images
const preloadImage = (src) => {
  const img = new Image();
  img.src = src;
};

/**
 * CharacterAnimation displays the three‑stage scroll‑controlled hero animation.
 * It accepts an optional `containerRef` prop which should point to the outer
 * scroll‑wrapper element. If not provided, it falls back to an internal ref.
 */
const CharacterAnimation = ({ containerRef: externalRef }) => {
  const internalRef = useRef(null);
  const containerRef = externalRef || internalRef;

  // Bind scroll progress to the container that spans the three stages
  const { scrollYProgress } = useScroll({ target: containerRef });

  // Opacity for each stage – fade in and then out to avoid overlap
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const stage2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.5], [0, 1, 1, 0]);
  const stage3Opacity = useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]);

  // Scale and rotation remain the same
  const circleScale = useTransform(scrollYProgress, [0, 0.15, 0.45, 0.7], [1, 1.2, 0.8, 0.8]);
  const standingScale = useTransform(scrollYProgress, [0.25, 0.45], [0.8, 1]);
  const waveRotate = useTransform(scrollYProgress, [0.5, 0.65, 0.7], [0, 5, 0]);

  // Reduced‑motion support
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = (e) => setReduceMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pre‑load images to avoid flash on first scroll
  useEffect(() => {
    preloadImage(profileImg);
    preloadImage(standingImg);
    preloadImage(wavingImg);
  }, []);

  // Static fallback when motion is reduced – just show the portrait
  if (reduceMotion) {
    return (
      <div className="character-wrapper" ref={containerRef}>
        <img src={profileImg} alt="Profile" className="character-img" />
      </div>
    );
  }

  return (
    <div className="character-wrapper" ref={containerRef}>
      {/* Glowing circular frame */}
      <motion.div className="character-circle" style={{ scale: circleScale }} />

      {/* Stage 1 – Portrait */}
      <motion.img
        src={profileImg}
        alt="Profile"
                  className="character-img portrait"
        style={{ opacity: stage1Opacity, position: "absolute", inset: 0 }}
      />
      <motion.div className="scroll-prompt" style={{ opacity: stage1Opacity }}>
        Scroll to Meet Me
      </motion.div>

      {/* Stage 2 – Full‑body standing character */}
      <motion.img
        src={standingImg}
        alt="Standing"
        className="character-img standing"
        style={{
          opacity: stage2Opacity,
          scale: standingScale,
          position: "absolute",
          inset: 0,
        }}
      />

      {/* Stage 3 – Waving character with speech bubble */}
      <motion.div style={{ opacity: stage3Opacity, position: "relative" }}>
        <motion.img
          src={wavingImg}
          alt="Waving"
          className="character-img waving"
          style={{ rotate: waveRotate }}
        />
        <div className="speech-bubble">          Hi! I'm Sai Ganesh 👋</div>
        <motion.h2
          className="character-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frontend Developer | Java Full Stack Developer
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default CharacterAnimation;
