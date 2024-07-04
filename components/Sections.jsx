import sectionStyles from "./sections.module.css";
const Sections = ({ children }) => {
  return (
    <div className={sectionStyles.main__container}>
      <div className={sectionStyles.sections__container}>{children}</div>
    </div>
  );
};

export default Sections;
