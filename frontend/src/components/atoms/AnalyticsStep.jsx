function AnalyticsStep({ color, icon, label, text }) {
  return (
    <div className={`${color} flex flex-col items-center justify-center p-6 h-70`}>
      <div className="mb-2 text-orange-200/70">{icon}</div>
      <h2 className="text-sm uppercase tracking-wide font-medium my-1 text-orange-200/70">Mas de</h2>
      <h3 className="text-5xl font-bold">{label}</h3>
      <p className="text-sm uppercase tracking-wide font-medium mt-1 text-orange-200/70">{text}</p>
    </div>
  );
}

export default AnalyticsStep;
