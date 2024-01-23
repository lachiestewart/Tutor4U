import { Text, Input, Line, Button } from "components";

const TutorFilterSidebar = () => {
  type SearchbarCategoryProps = {
    title: string;
    imgURL: string;
    onClick?: () => void;
    child?: string;
    childAmount?: number;
  };

  //SearchBarCategory was created by Jason. May need Lachie to check...
  const SearchBarCategory: React.FC<SearchbarCategoryProps> = ({
    title,
    imgURL,
    onClick,
    child,
    childAmount,
  }) => (
    <div>
      <div className="flex w-auto flex-col items-start justify-center ">
        <div className="filter-category-title-div">
          <div className="flex w-auto flex-row items-center justify-start gap-2.5">
            <img
              className="lg:h-auto h-[30px] w-[30px] object-cover"
              src={imgURL}
              alt={title + " icon"}
            />
            <h3>{title}</h3>
          </div>
          <Button className="reset-btn">Reset</Button>
        </div>
        <div
          className="flex max-h-20 w-full
           flex-col flex-wrap items-start justify-start gap-1 overflow-y-scroll p-2"
        >
          <div className="flex w-auto flex-row items-center justify-start gap-2.5">
            <input className="rounded" type="checkbox" name="" value=""></input>
            <p className="text-base">{child}</p>
            <p className="text-sm text-gray-500">({childAmount})</p>
          </div>
        </div>
      </div>
      <Line className="my-4 h-px w-full bg-blue_gray-400" />
    </div>
  );

  return (
    <div className="sticky top-5 z-10 flex w-[25%] min-w-[250px] flex-col items-start justify-center gap-[10px] rounded-[10px] bg-white-A700 px-2.5 py-4">
      <Text className="w-auto text-lg text-black-900">
        <span className=" text-left text-black-900">Showing </span>
        <span className="text-left font-bold text-blue-A700">375</span>
        <span className="text-left text-black-900"> results of </span>
        <span className="text-left font-bold text-blue-A700_01">561</span>
        <span className="text-left text-black-900"> tutors</span>
      </Text>
      <form action="" className="w-full">
        <div className="flex w-full flex-col items-start justify-start">
          <h3>Search</h3>
          <input
            name="tutorTextSearchFilterEntry"
            placeholder="Search through tutors...."
            className="flex h-auto w-full rounded-[10px] border border-solid border-gray-400_02 p-3"
          ></input>
          <div className="block py-4 md:hidden">
            <p>Advance search</p>
          </div>
        </div>
        <Line className="my-4 h-px w-full bg-blue_gray-400" />
        <SearchBarCategory
          title="Subjects"
          child="English"
          childAmount={5}
          imgURL="images/img_training.png"
         
        />
        <SearchBarCategory
          title="Tutoring Level"
          child="NCEA L1"
          childAmount={3}
          imgURL="images/img_university.png"
          
        />
        {/* <div className="flex w-full flex-col items-start justify-center">
          <div className="filter-category-title-div">
            <div className="flex w-auto flex-row items-center justify-start gap-2.5">
              <img
                className="h-[30px] w-[30px] object-cover md:h-auto"
                src="images/img_university.png"
                alt="university"
              />
              <Text className="filter-category-title-text">Tutoring Level</Text>
            </div>
            <Button className="reset-btn">Reset</Button>
          </div>
          <div
            className="flex h-auto w-full flex-col
                   flex-wrap items-start justify-start gap-1 py-2 md:h-auto"
          >
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">NCEA L1</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
          </div>
        </div>
        <Line className="my-4 h-px w-full bg-blue_gray-400" /> */}
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
            <div className="flex w-auto flex-row items-center justify-start gap-2.5">
              <img
                className="h-[30px] w-[30px] object-cover md:h-auto"
                src="images/img_star.png"
                alt="star"
              />
              <Text className="filter-category-title-text">Tutor Rating</Text>
            </div>
            <Button className="reset-btn">Reset</Button>
          </div>
          <img
            className="h-auto w-full"
            src="images/img_filterlistframe.svg"
            alt="filterlistframe"
          />
        </div>
        <Line className="my-4 h-px w-full bg-blue_gray-400" />
        <SearchBarCategory
          title="Location"
          child="Auckland"
          childAmount={3}
          imgURL="images/img_location.png"
        />
        {/* <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
            <div className="flex w-auto flex-row items-center justify-start gap-2.5">
              <img
                className="h-[30px] w-[30px] object-cover md:h-auto"
                src="images/img_location.png"
                alt="location"
              />
              <Text className="filter-category-title-text">Location</Text>
            </div>
            <Button className="reset-btn">Reset</Button>
          </div>
          <div className="flex h-[84px] w-full flex-col items-start justify-center py-[11px] md:h-auto">
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Auckland</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text
                className="w-auto text-xs text-black-900"
                size="txtMontserratRomanMedium12Black900"
              >
                Wellington
              </Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text
                className="w-auto text-xs text-black-900"
                size="txtMontserratRomanMedium12Black900"
              >
                Christchurch
              </Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
          </div>
        </div>
        <Line className="my-4 h-px w-full bg-blue_gray-400" /> */}
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
            <div className="flex w-auto flex-row items-center justify-start gap-2.5">
              <img
                className="h-[30px] w-[30px] object-cover md:h-auto"
                src="images/img_ok.png"
                alt="ok"
              />
              <Text className="filter-category-title-text">Availability</Text>
            </div>
            <Button className="reset-btn">Reset</Button>
          </div>
          <div className="flex h-[84px] w-full flex-col items-start justify-center py-[11px] md:h-auto">
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Available</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Limited Availability</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Not Available</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
          </div>
        </div>
        <Line className="my-4 h-px w-full bg-blue_gray-400" />
        <div className="flex w-full flex-col items-start justify-center">
          <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
            <div className="flex w-auto flex-row items-center justify-start gap-2.5">
              <img
                className="h-[30px] w-[30px] object-cover md:h-auto"
                src="images/img_toilet.png"
                alt="toilet"
              />
              <Text className="filter-category-title-text">Gender</Text>
            </div>
            <Button className="reset-btn">Reset</Button>
          </div>
          <div className="flex h-[84px] w-full flex-col items-start justify-center py-[11px] md:h-auto">
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Male</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Female</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
            <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
              <input
                className="rounded"
                type="checkbox"
                name=""
                value=""
              ></input>
              <Text className="filter-items-text">Non-Binary</Text>
              <Text className="filter-items-numbers-text">##</Text>
            </div>
          </div>
        </div>
      </form>
      <Line className="my-4 h-px w-full bg-blue_gray-400" />
      <div className="flex w-full flex-col items-start justify-center">
        <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
          <div className="flex w-auto flex-row items-center justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] object-cover md:h-auto"
              src="images/img_knowledgesharing.png"
              alt="knowledgesharin"
            />
            <Text className="filter-category-title-text">Lesson Format</Text>
          </div>
          <Button className="reset-btn">Reset</Button>
        </div>
        <div className="flex h-[84px] w-full flex-col items-start justify-center py-[11px] md:h-auto">
          <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
            <input className="rounded" type="checkbox" name="" value=""></input>
            <Text className="filter-items-text">Online</Text>
            <Text className="filter-items-numbers-text">##</Text>
          </div>
          <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
            <input className="rounded" type="checkbox" name="" value=""></input>
            <Text className="filter-items-text">Face to face</Text>
            <Text className="filter-items-numbers-text">##</Text>
          </div>
          <div className="flex h-[27px] w-[325px] flex-row items-center justify-start gap-2.5 px-2.5 md:h-auto">
            <input className="rounded" type="checkbox" name="" value=""></input>
            <Text className="filter-items-text">Flexible</Text>
            <Text className="filter-items-numbers-text">##</Text>
          </div>
        </div>
      </div>
      <Line className="my-4 h-px w-full bg-blue_gray-400" />
      <div className="flex w-full flex-col items-start justify-center">
        <div className="flex w-full flex-row items-center justify-between gap-[34px] p-[5px]">
          <div className="flex w-auto flex-row items-center justify-start gap-2.5">
            <img
              className="h-[30px] w-[30px] object-cover md:h-auto"
              src="images/img_cash.png"
              alt="cash"
            />
            <Text
              className="w-auto text-lg text-black-900"
              size="txtMontserratRomanSemiBold18"
            >
              Tutor Rate
            </Text>
          </div>
          <Button className="reset-btn">Reset</Button>
        </div>
        <img
          className="h-auto w-full"
          src="images/img_filterlistframe.svg"
          alt="filterlistframe_One"
        />
      </div>
      <Line className="my-4 h-px w-full bg-blue_gray-400" />
    </div>
  );
};

export default TutorFilterSidebar;
