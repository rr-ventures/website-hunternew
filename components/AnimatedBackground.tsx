export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-10 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-accent/40 via-orange-400/20 to-white blur-3xl animate-float" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-gradient-to-bl from-charcoal/10 via-muted/10 to-white blur-3xl animate-float" />
      <div className="absolute inset-0 bg-noise-light" />
    </div>
  );
}
