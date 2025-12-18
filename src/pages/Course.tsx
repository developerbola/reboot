import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Player from "@/components/Player";

type CourseType = {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
};

export default function Course() {
  const [courses, setCourses] = useState<CourseType[]>([]);
  const [currentCourse, setCurrentCourse] = useState({
    src: "",
    title: "",
    description: "",
  });

  const handChangeVideo = (src: string, title: string, desc: string) => {
    setCurrentCourse({ src, title, description: desc });
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
        );
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    setCurrentCourse({
      src: courses[0]?.videoUrl,
      title: courses[0]?.title,
      description: courses[0]?.description,
    });
  }, [courses]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-5">
      <Link to="/">
        <Button
          size={"icon"}
          variant={"outline"}
          className="absolute top-4 left-4 flex items-center gap-2 z-50"
        >
          <ArrowLeft />
        </Button>
      </Link>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Player src={currentCourse.src} />
          {/* Course Info */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">{currentCourse.title}</h1>
            <p className="text-muted-foreground">{currentCourse.description}</p>
          </div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-2xl p-4 pt-1 pb-3">
            <div className="space-y-3">
              <h2 className="font-semibold text-lg">Course Progress</h2>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/5 bg-primary" />
              </div>
              <p className="text-sm text-muted-foreground">40% completed</p>
            </div>
          </div>

          <div>
            <div className="p-4 space-y-3">
              <h2 className="font-semibold text-lg">Lessons</h2>
              <ul className="space-y-2 text-sm">
                {!courses.length ? (
                  <>
                    <div className="w-full h-6 bg-neutral-800 animate-pulse rounded-full" />
                    <div className="w-2/3 h-6 bg-neutral-800 animate-pulse rounded-full" />
                    <div className="w-full h-6 bg-neutral-800 animate-pulse rounded-full" />
                    <div className="w-2/3 h-6 bg-neutral-800 animate-pulse rounded-full" />
                    <div className="w-full h-6 bg-neutral-800 animate-pulse rounded-full" />
                    <div className="w-2/3 h-6 bg-neutral-800 animate-pulse rounded-full" />
                  </>
                ) : (
                  courses.map((_, i) => (
                    <li
                      key={i}
                      className="p-2 rounded-lg hover:bg-muted cursor-pointer"
                      onClick={() =>
                        handChangeVideo(_.videoUrl, _.title, _.description)
                      }
                    >
                      0{i + 1}. {_.title}
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
