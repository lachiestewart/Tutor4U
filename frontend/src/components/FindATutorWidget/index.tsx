import { Text, Input, Line, Img, Button } from "components";
import TutorCardFindATutor from "components/TutorCardFindATutor";
import TutorFilterSidebar from "components/TutorFilterSidebar";

const FindATutorWidget = () => {
    return ( 
        <div className="flex relative flex-row gap-2.5 items-start justify-center w-full sm:flex-col">
            <TutorFilterSidebar />
            <div className="flex relative flex-col gap-[15px] h-[1208px] w-[66%] md:w-[75%] sm:w-full max-w-[1100px] md:h-auto items-center justify-start">
              <div className="flex flex-row sticky top-5 z-10 bg-white-A700 rounded-[10px] text-left items-center w-full p-2 text-lg">
                <text className="w-auto font-medium">Filtering by:</text>
              </div>
              <div className="gap-3 md:gap-5 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <TutorCardFindATutor className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full" />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Naomi Ranger"
                  tutorfirstname="Naomi"
                  tutorlastname="Ranger"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="John Nixon"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Angela Richards"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Jason Hart"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Matt Coombs"
                />
              </div>
            </div>
          </div>
     );
}
 
export default FindATutorWidget;