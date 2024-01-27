import React from "react";

const CodeOfConductTerms: React.FC = () => {
  type CodeOfConductTermProps = {
    title: string;
    description: string;
  };

  const CodeofConductTerm: React.FC<CodeOfConductTermProps> = ({
    title,
    description,
  }) => (
    <div className="lg:gap-1.5 flex w-full flex-col items-start justify-start sm:gap-0.5">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-[15px]">
      <CodeofConductTerm
        title="Ethical Behaviour"
        description="All tutors must interact with students in an ethical manner. 
                As a tutor, you hold a position of influence, mentorship and trust.
                Therefore, it is important that you exercise a high level of
                care and integrity with students you interact with. We will not
                tolerate discrimination of any sort on our platform. This
                includes behaviour relating to harassment based on gender,
                race, religion, sexual orientation or any other personal
                characteristic."
      />
      <CodeofConductTerm
        title="Maintain Professionalism"
        description="You will be professional with your interactions. As a tutor in the
          Tutor4U community, you will be representing our brand with anyone that
          interacts with the platform. This includes students, parents, legal guardians, 
          teachers and other tutors. Tutor4U expects you to have a
          professional appearance, use appropriate language and respect all
          those involved with the platform."
      />

      <CodeofConductTerm
        title="Be Punctual"
        description="You will be punctual with communication and interactions on the
            platform. This includes getting back to any students in a timely
            fashion with regards to setting up future lessons as well as any
            feedback they require that could help them reach their academic
            potential. This also includes ensuring that you turn up for all your
            scheduled lessons on time, at the appropriate location as previously
            organised with the students."
      />
      <CodeofConductTerm
        title="Ensure A Safe Environment For Yourself And Your Students"
        description="You will prioritise the well-being and safety of students. As a tutor,
          you will be in a position of authority. Maintain professional
          boundries and do not meet students outside of scheduled sessions,
          whether online or in-person. Do not contact your students outside of
          the platform if such contact is unrelated to tutoring."
      />
      <CodeofConductTerm
        title="Keep Privacy Of Students"
        description="Maintain privacy of the students information. This could include
          contact details and other confidential information such as personal
          matters and academic performance."
      />
      <CodeofConductTerm
        title="All Lessons Must Be Recorded On The Tutor4U Platform"
        description="Tutors are strictly prohibited from offering or providing students
          tutoring services outside of the Tutor4U platform if those students
          were originally introduced by Tutor4U. All lessons must be recorded
          and paid for through the Tutor4U platform."
      />
      <CodeofConductTerm
        title="Compliance & Enforcement"
        description="Tutor4U has the right to remove anyone from the Tutor4U platform who
          does not adhere to this Code of Conduct. Severe violations may be
          reported to the police and/or other legal authorities."
      />
      <CodeofConductTerm
        title="Provide Correct Information"
        description="All tutors must be responsible for maintaining their records and
          ensure all of their information is up to date and accurate. If any
          substantial change in their circumstances occurs where it could impact
          their qualifications or suitability for tutoring, you must inform the
          Tutor4U team about these changes. This extends to any criminal
          convictions or other legal matters affecting eligibility."
      />
    </div>
  );
};

export default CodeOfConductTerms;
