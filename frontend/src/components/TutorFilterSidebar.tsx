import { useState } from "react";
import Input from "./Input";
import Line from "./Line";
import Text from "./Text";
import { SearchParams } from "pages/FindATutor";


type SearchbarCategoryProps = {
  title: string;
  src: string;
  children: React.ReactNode;
};

const SearchBarCategory: React.FC<SearchbarCategoryProps> = ({ title, src, children }) => (
  <>
    <Line className="my-4 h-px w-full bg-blue_gray-400" />
    <div className="flex flex-row gap-2.5">
      <img className="lg:h-auto object-cover h-[30px] w-[30px] " src={src} alt={src + "icon"} />
      <h3>{title}</h3>
    </div>
    <div className="flex flex-col flex-wrap gap-2 ml-2">{children}</div>
  </>
);

const db_value = (choice: string) => choice.toUpperCase().replace("-", "_").replace(" ", "_");

type TutorFilterSidebarProps = {
  defaultParams: SearchParams;
  setPageParams: React.Dispatch<React.SetStateAction<SearchParams>>;
  selectedTutors: number;
  totalTutors: number;
}

const TutorFilterSidebar: React.FC<TutorFilterSidebarProps> = ({ defaultParams, setPageParams, selectedTutors, totalTutors }) => {

  const [localParams, setLocalParams] = useState<SearchParams>(defaultParams);

  type TickBoxesProps = {
    category: keyof SearchParams;
    values: string[];
  };

  const TickBoxes: React.FC<TickBoxesProps> = ({ category, values }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, category: keyof SearchParams) => {

      const newCategory: string[] = [...(localParams[category] as string[])];

      if (e.target.checked) {
        newCategory.push(e.target.name);
      } else {
        newCategory.splice(newCategory.indexOf(e.target.name), 1);
      }

      console.log(category, newCategory);

      const newParams: SearchParams = { ...localParams, [category]: newCategory };
      //set parameters state of this component
      setLocalParams(newParams);
      //set parameters state or parent
      setPageParams(newParams);
    };

    return values.map(value => (
      <div className="flex flex-row gap-2" key={value}>
        <input
          className="rounded"
          type="checkbox"
          name={db_value(value)}
          checked={(localParams[category] as string[]).includes(db_value(value))}
          onChange={(e) => handleChange(e, category)}
        />
        <p className="text-base">{value}</p>
      </div>
    ));
  };

  return (
    <div className="sticky top-5 z-10 flex w-[25%] min-w-[250px] flex-col items-start justify-center gap-[10px] rounded-[10px] bg-white-A700 px-2.5 py-4">
      <Text className="w-auto text-lg text-black-900">
        Showing <span className="font-bold text-blue-A700">{selectedTutors}</span> results of <span className=" font-bold text-blue-A700_01">{totalTutors}</span> tutors
      </Text>
      <h3>Search</h3>
      <Input
        name="search"
        className="w-full"
        placeholder="Search through tutors..."
        wrapClassName="border border-solid border-gray-400_02"
      />
      <SearchBarCategory title={"Subjects"} src={"images/img_training.png"}>
        <TickBoxes category={"subjects"} values={["English", "Maths", "Chemistry", "Spanish"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Tutoring Level"} src={"images/img_university.png"}>
        <TickBoxes category={"levels"} values={["NCEA 3", "100 level", "200 level"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Tutor Rating"} src={"images/img_star.png"}>
        things for tutor rating input
        {/* <TickBoxes category={"min_rating"} values={["NCEA 3", "Uni 1", "Uni 2"]} /> */}
      </SearchBarCategory>

      <SearchBarCategory title={"Location"} src={"images/img_location.png"}>
        <TickBoxes category={"location"} values={["Auckland", "Christchurch"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Availability"} src={"images/img_ok.png"}>
        <TickBoxes category={"availability"} values={["Available", "Limited Availability"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Gender"} src={"images/img_toilet.png"}>
        <TickBoxes category={"gender"} values={["Male", "Female", "Non-Binary", "Other"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Lesson Format"} src={"images/img_knowledgesharing.png"}>
        <TickBoxes category={"lesson_format"} values={["Online", "Face to face"]} />
      </SearchBarCategory>

      <SearchBarCategory title={"Tutor Rate"} src={"images/img_cash.png"}>
        things for tutor hourly rate input min and max
        {/* <TickBoxes category={"lesson_format"} values={["Online", "Face to face"]} /> */}
      </SearchBarCategory>
    </div >
  );
};

export default TutorFilterSidebar;
