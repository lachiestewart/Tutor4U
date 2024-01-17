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
              {/*<Input
                name="filteredtutors"
                placeholder="Filtering by:"
                className="p-0 placeholder:text-black-900 text-center text-lg w-full"
                wrapClassName="w-full"
                size="sm"
  ></Input>*/}
              </div>
              <div className="gap-3 md:gap-5 grid sm:grid-cols-2 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{ backgroundImage: "url('images/img_frame13.png')" }}
                  >
                    <div className="flex flex-col items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Ryan Barr
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
                <TutorCardFindATutor className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full" />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Naomi Ranger"
                />
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_frame13_2.png')",
                    }}
                  >
                    <div className="flex flex-col gap-[5px] items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Josh Lin
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="John Nixon"
                />
                <TutorCardFindATutor
                  className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full"
                  tutorfullname="Angela Richards"
                />
                <div className="bg-white-A700 flex flex-1 flex-col h-[325px] md:h-auto items-center justify-start rounded-[10px] w-full">
                  <div
                    className="bg-cover bg-gradient  bg-no-repeat flex flex-col h-[231px] md:h-auto items-start justify-start p-2.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_frame13_5.png')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start px-2 w-auto">
                      <Text
                        className="text-lg text-white-A700 w-auto"
                        size="txtMontserratRomanSemiBold18WhiteA700"
                      >
                        Angela Richards
                      </Text>
                      <Text
                        className="text-white-A700 text-xs w-auto"
                        size="txtMontserratRomanRegular12"
                      >
                        Christchurch
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-inter h-full items-start justify-center px-2 py-1 w-full">
                    <div className="flex flex-row items-center justify-start w-auto">
                      <Text
                        className="text-[10px] text-gray-500 w-auto"
                        size="txtInterRegular10"
                      >
                        XXXXX
                      </Text>
                      <Text
                        className="text-[10px] text-gray-500"
                        size="txtInterRegular10"
                      >
                        (3)
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Health | Biology
                    </Text>
                    <Text
                      className="text-black-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      $35/hr
                    </Text>
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtInterRegular10Black900"
                    >
                      BSc in Sports Science
                    </Text>
                  </div>
                </div>
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