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
    <div className="flex w-full max-w-[1000px] flex-row items-center justify-start gap-4 bg-white-A700 md:pt-5 ">
      <div className="flex flex-col items-start justify-start md:h-[120px] md:w-[120px] sm:h-[80px] sm:w-[80px]">
        <img
          className="w-full rounded-[50%] md:h-[120px] md:w-[120px] sm:h-[80px] sm:w-[80px]"
          src="images/img_36477397310160.png"
          alt="Profile picture in dashboard header"
        />
      </div>
      <div className="flex w-full max-w-[870px] flex-1 flex-col items-start justify-start">
        <h2>{props.tutorfullname}</h2>
        <h5>
          Academic Tutor - {props.tutorsubject}
          <br />
          {props?.tutorlocation}
          <br />
          Tutor Rating: {props.tutorrating}
        </h5>
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
