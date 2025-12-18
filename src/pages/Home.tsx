import { useState } from "react";
import { Filter, User } from "lucide-react";
import { data } from "../lib/data";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("hammasi");
  const [priceFilter, setPriceFilter] = useState("hammasi");

  
  const filteredData = data.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "hammasi" ? true : course.category === categoryFilter;

    const matchesPrice =
      priceFilter === "hammasi"
        ? true
        : priceFilter === "bepul"
        ? course.price === "Bepul"
        : course.price !== "Bepul";

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <main className="bg-background text-foreground min-h-screen p-15">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-3xl font-medium">What we learn today?</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          {/* Search Input */}
          <Input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Filter Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} size={"icon"}>
                <Filter />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <div className="flex flex-col gap-4">
                {/* Category Filter */}
                <div className="flex flex-col gap-2">
                  <p>Kategoriyalar</p>
                  <Select
                    defaultValue="hammasi"
                    value={categoryFilter}
                    onValueChange={(val) => setCategoryFilter(val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Kategoriyalar" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "hammasi",
                        "frontend",
                        "backend",
                        "fullstack",
                        "boshqa",
                      ].map((category) => (
                        <SelectItem
                          key={category}
                          value={category}
                          className="capitalize"
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Filter */}
                <div className="flex flex-col gap-2">
                  <p>Narxlar</p>
                  <Select
                    defaultValue="hammasi"
                    value={priceFilter}
                    onValueChange={(val) => setPriceFilter(val)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Narxlar" />
                    </SelectTrigger>
                    <SelectContent>
                      {["hammasi", "bepul", "to'lovli"].map((price) => (
                        <SelectItem
                          key={price}
                          value={price}
                          className="capitalize"
                        >
                          {price.charAt(0).toUpperCase() + price.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((course) => (
            <div
              key={course.title}
              className="border rounded-lg overflow-hidden bg-card flex flex-col h-full"
            >
              <div className="w-full aspect-video">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 pb-2 flex flex-col flex-1">
                <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                  <User size={17} /> {course.views} o'quvchi
                </p>
                <h3 className="text-[19px] mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {course.instructor}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-sm">
                    {typeof course.price === "number"
                      ? `${course.price} UZS`
                      : course.price}
                  </p>
                  <Link to={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button size="sm" variant="ghost">
                      {course.price === "Bepul" ? "Qatnashish" : "Sotib olish"}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground">
            Hech qanday kurs topilmadi.
          </p>
        )}
      </div>
    </main>
  );
}
