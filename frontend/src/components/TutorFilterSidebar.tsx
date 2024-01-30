import { useEffect, useState } from "react";
import Input from "./Input";
import Line from "./Line";
import Text from "./Text";
import { SearchParams } from "pages/FindATutor";

type SearchbarCategoryProps = {
  title: string;
  src: string;
  children: React.ReactNode;
};

const SearchBarCategory: React.FC<SearchbarCategoryProps> = ({
  title,
  src,
  children,
}) => (
  <>
    <Line className="my-4 h-px w-full bg-blue_gray-400" />
    <div className="flex flex-row gap-2.5">
      <img
        className="lg:h-auto h-[30px] w-[30px] object-cover "
        src={src}
        alt={src + "icon"}
      />
      <h3>{title}</h3>
    </div>
    <div className="ml-2 flex flex-col flex-wrap gap-2">{children}</div>
  </>
);

const db_value = (choice: string) => choice.toUpperCase().replace(/\s/g, "_");

type TickBoxesProps = {
  category: string;
  values: string[];
  onChange: (category: string, selected: string[]) => void;
};

const TickBoxes: React.FC<TickBoxesProps> = ({
  category,
  values,
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    category: string,
  ) => {
    const newSelected = [...selected];

    if (e.target.checked) {
      newSelected.push(e.target.name);
    } else {
      newSelected.splice(newSelected.indexOf(e.target.name), 1);
    }

    console.log(category, newSelected);

    setSelected(newSelected);

    onChange(category, newSelected);
  };

  return values.map((value) => (
    <div className="flex flex-row gap-2" key={value}>
      <input
        className="rounded"
        type="checkbox"
        name={db_value(value)}
        checked={selected.includes(db_value(value))}
        onChange={(e) => handleChange(e, category)}
      />
      <p className="text-base">{value}</p>
    </div>
  ));
};

type TutorFilterSidebarProps = {
  defaultParams: SearchParams;
  onChange: (params: SearchParams) => void;
  selectedTutors: number;
  totalTutors: number;
};

const TutorFilterSidebar: React.FC<TutorFilterSidebarProps> = ({
  defaultParams,
  onChange,
  selectedTutors,
  totalTutors,
}) => {
  const [filterParams, setFilterParams] = useState<SearchParams>(defaultParams);

  useEffect(() => {
    onChange(filterParams);
  }, [filterParams]);

  const handleChange = (category: string, selected: string[]) => {
    setFilterParams({ ...filterParams, [category]: selected });
  };

  return (
    <div className="sticky top-5 z-10 flex w-[25%] min-w-[250px] flex-col items-start justify-center gap-[10px] rounded-[10px] bg-white-A700 px-2.5 py-4">
      <Text className="w-auto text-lg text-black-900">
        Showing{" "}
        <span className="font-bold text-blue-A700">{selectedTutors}</span>{" "}
        results of{" "}
        <span className=" font-bold text-blue-A700_01">{totalTutors}</span>{" "}
        tutors
      </Text>
      <h3>Search</h3>
      <Input
        name="search"
        className="w-full"
        placeholder="Search through tutors..."
        wrapClassName="border border-solid border-gray-400_02"
      />
      <SearchBarCategory title={"Subjects"} src={"/images/img_training.png"}>
        <TickBoxes
          category={"subjects"}
          values={["English", "Mathematics", "Chemistry", "Spanish"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory
        title={"Tutoring Level"}
        src={"/images/img_university.png"}
      >
        <TickBoxes
          category={"levels"}
          values={["NCEA 3", "100 level", "200 level"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory title={"Tutor Rating"} src={"/images/img_star.png"}>
        things for tutor rating input
        {/* <TickBoxes category={"min_rating"} values={["NCEA 3", "Uni 1", "Uni 2"]} /> */}
      </SearchBarCategory>

      <SearchBarCategory title={"Location"} src={"/images/img_location.png"}>
        <TickBoxes
          category={"location"}
          values={["Auckland", "Christchurch"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory title={"Availability"} src={"/images/img_ok.png"}>
        <TickBoxes
          category={"availability"}
          values={["Available", "Limited Availability"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory title={"Gender"} src={"/images/img_toilet.png"}>
        <TickBoxes
          category={"gender"}
          values={["Male", "Female", "Non-Binary", "Other"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory
        title={"Lesson Format"}
        src={"/images/img_knowledgesharing.png"}
      >
        <TickBoxes
          category={"lesson_format"}
          values={["Online", "Face to face"]}
          onChange={handleChange}
        />
      </SearchBarCategory>

      <SearchBarCategory title={"Tutor Rate"} src={"/images/img_cash.png"}>
        things for tutor hourly rate input min and max
        {/* <TickBoxes category={"lesson_format"} values={["Online", "Face to face"]} /> */}
      </SearchBarCategory>
    </div>
  );
};

export default TutorFilterSidebar;
