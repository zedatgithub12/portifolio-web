export default function Beacon({ size = "w-3 h-3", color = "bg-green-500" }) {
  return (
    <div className="relative flex items-center justify-center">
      <div
        className={`absolute ${size} rounded-full animate-pulse ${color} opacity-90`}
        style={{ display: "block" }}
      />
    </div>
  );
}
