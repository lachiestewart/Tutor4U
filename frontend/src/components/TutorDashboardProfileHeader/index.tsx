import { Text, Img } from "components";

type TutorDashboardProfileHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "tutorfullname"
  | "tutorlocation"
  | "tutorsubject"
  | "tutorrate"
  | "tutorrating"
> &
  Partial<{
    tutorfirstname: string;
    tutorlastname: string;
    tutorfullname: string;
    tutorlocation: string;
    tutorsubject: string;
    tutorrate: number;
    tutorrating: number;
  }>;

const TutorDashboardProfileHeader: React.FC<
  TutorDashboardProfileHeaderProps
> = (props) => {
  return (
    <div className="flex w-full max-w-[1000px] flex-row items-center justify-start gap-4 bg-white-A700 md:flex-col">
      <div className="flex h-[120px] w-[120px] flex-col items-start justify-start md:h-auto">
        <Img
          className="h-[118px] w-full rounded-[50%] md:h-auto"
          src="images/img_36477397310160.png"
          alt="36477397310160"
        />
      </div>
      <div className="flex w-full max-w-[870px] flex-1 flex-col items-start justify-start">
        <Text
          className="w-[181px] text-[32px] text-black-900 md:text-3xl sm:text-[28px]"
          size="txtMontserratRomanBold32"
        >
          {props.tutorfullname}
        </Text>
        <Text
          className="text-xl leading-[24.00px] text-black-900"
          size="txtMontserratRomanRegular20"
        >
          <>
            Academic Tutor - {props.tutorsubject}
            <br />
            {props?.tutorlocation}
            <br />
            Tutor Rating: {props.tutorrating}
          </>
        </Text>
      </div>
    </div>
  );
};

TutorDashboardProfileHeader.defaultProps = {
  tutorfullname: "Jason Hart",
  tutorlocation: "Christchurch",
  tutorsubject: "Health | Biology",
  tutorrate: 35,
  tutorrating: 5,
};

export default TutorDashboardProfileHeader;
