// components/ui/SplineBackground.tsx
export default function SplineBackground() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "110%",   // extra height to hide watermark
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
    }}>
      <iframe
        src="https://my.spline.design/noisecopycopycopy-4jQJtmDeaKebU9GyMmQwuuvV-zyq/"
        className="w-full h-full border-0 scrollbar-track-lime-50"
      />
    </div>
  );
}