function ProcessStep({ icon, label, num }) {

  return (
    <div className="flex flex-col items-center gap-2">
      <div className=" border-3 border-black border-solid rounded-full">
      <div className="m-1 bg-blue-400 w-25 h-25 p-4 rounded-full flex justify-center items-center border-black">{icon}</div>
      </div>
      <span className="w-6 h-6 bg-black text-white rounded-full">{`${num}`}</span>
      <p className="text-sm text-center font-bold align-middle">{label}</p>
    </div>
  );
}

export default ProcessStep
