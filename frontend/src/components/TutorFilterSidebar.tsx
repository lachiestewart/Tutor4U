
import { Text, Input, Line, Button } from "components";

const TutorFilterSidebar = () => {
    return ( 
        <div className="sticky top-5 z-10 bg-white-A700 flex flex-col gap-[10px] min-w-[250px] items-start justify-center px-2.5 py-4 rounded-[10px] sm:w-full w-[25%]">
              <Text
                className="text-black-900 text-lg w-auto"
              >
                <span className=" text-black-900 text-left">
                  Showing{" "}
                </span>
                <span className="text-blue-A700 text-left font-bold">
                  375
                </span>
                <span className="text-black-900 text-left">
                  {" "}
                  results of{" "}
                </span>
                <span className="text-blue-A700_01 text-left font-bold">
                  561
                </span>
                <span className="text-black-900 text-left">
                  {" "}
                  tutors
                </span>
              </Text>
             <form action="" className="w-full">
               
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-start text-lg w-full font-semibold"
                  >
                    Search
                  </Text>
                  <Input
                    name="tutorTextSearchFilterEntry"
                    placeholder="Search through tutors...."
                    className="p-3 w-full"
                    wrapClassName="border border-gray-400_02 border-solid flex h-auto w-full"
                  ></Input>
                  <div className="py-4 hidden sm:block"><p>Advance search</p></div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-auto">
                  <div className="filter-category-title-div">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_training.png"
                        alt="training"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Subjects
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col gap-1
                   items-start justify-start p-2 w-full flex-wrap overflow-y-scroll max-h-20">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <input className="rounded" type="checkbox" name="" value="" ></input>
                          <Text
                        className="filter-items-text"
                      >
                        English
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                        </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="filter-category-title-div">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_university.png"
                        alt="university"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Tutoring Level
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col h-auto gap-1
                   md:h-auto items-start justify-start py-2 w-full flex-wrap">
                        <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2 w-[325px]">
                          <input className="rounded" type="checkbox" name="" value="" ></input>
                          <Text
                        className="filter-items-text"
                      >
                        NCEA L1
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                        </div>
                  </div>
                  
                    
                  
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_star.png"
                        alt="star"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Tutor Rating
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <img
                    className="h-auto w-full"
                    src="images/img_filterlistframe.svg"
                    alt="filterlistframe"
                  />
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_location.png"
                        alt="location"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Location
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Auckland
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Wellington
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="text-black-900 text-xs w-auto"
                        size="txtMontserratRomanMedium12Black900"
                      >
                        Christchurch
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_ok.png"
                        alt="ok"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Availability
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Available
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Limited Availability
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Not Available
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-400 h-px w-full my-4" />
                <div className="flex flex-col items-start justify-center w-full">
                  <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                    <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                      <img
                        className="h-[30px] md:h-auto object-cover w-[30px]"
                        src="images/img_toilet.png"
                        alt="toilet"
                      />
                      <Text
                        className="filter-category-title-text"
                      >
                        Gender
                      </Text>
                    </div>
                    <Button
                      className="reset-btn"
                    >
                      Reset
                    </Button>
                  </div>
                  <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Male
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Female
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                    <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                       
                      <input className="rounded" type="checkbox" name="" value="" ></input>
                      <Text
                        className="filter-items-text"
                      >
                        Non-Binary
                      </Text>
                      <Text
                        className="filter-items-numbers-text"
                      >
                        ##
                      </Text>
                    </div>
                  </div>
                </div>
             </form>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_knowledgesharing.png"
                      alt="knowledgesharin"
                    />
                    <Text
                      className="filter-category-title-text"
                    >
                      Lesson Format
                    </Text>
                  </div>
                  <Button
                    className="reset-btn"
                  >
                    Reset
                  </Button>
                </div>
                <div className="flex flex-col h-[84px] md:h-auto items-start justify-center py-[11px] w-full">
                  <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Online
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Face to face
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 h-[27px] md:h-auto items-center justify-start px-2.5 w-[325px]">
                     
                    <input className="rounded" type="checkbox" name="" value="" ></input>
                    <Text
                      className="filter-items-text"
                    >
                      Flexible
                    </Text>
                    <Text
                      className="filter-items-numbers-text"
                    >
                      ##
                    </Text>
                  </div>
                </div>
              </div>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
              <div className="flex flex-col items-start justify-center w-full">
                <div className="flex flex-row gap-[34px] items-center justify-between p-[5px] w-full">
                  <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                    <img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_cash.png"
                      alt="cash"
                    />
                    <Text
                      className="text-black-900 text-lg w-auto"
                      size="txtMontserratRomanSemiBold18"
                    >
                      Tutor Rate
                    </Text>
                  </div>
                  <Button
                    className="reset-btn"
                  >
                    Reset
                  </Button>
                </div>
                <img
                  className="h-auto w-full"
                  src="images/img_filterlistframe.svg"
                  alt="filterlistframe_One"
                />
              </div>
              <Line className="bg-blue_gray-400 h-px w-full my-4" />
            </div>
     );
}
 
export default TutorFilterSidebar;