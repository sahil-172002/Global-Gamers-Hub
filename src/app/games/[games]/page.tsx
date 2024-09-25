import CocCard from "@/components/coc/CocCard";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-wrap gap-1 md:gap-4 justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <CocCard key={index} />
        ))}
      </div>
    </div>
  );
}
