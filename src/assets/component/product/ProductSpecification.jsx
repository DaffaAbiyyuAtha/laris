export default function ProductSpecification({ data }) {
  return (
    <div className="w-full flex justify-start">
      <div className=" flex flex-col items-start justify-start gap-3">
        <h1 className="text-2xl font-bold">Specification</h1>
        <ul className="flex flex-col gap-2 text-base">
          <li>
            {data.description}
          </li>
        </ul>
      </div>
    </div>
  );
}
