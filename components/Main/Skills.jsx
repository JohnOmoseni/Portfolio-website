import { IoMdCheckboxOutline } from "react-icons/io";

function Skills({ title }) {
  return (
    <div className="skill">
      <span className="icon">
        <IoMdCheckboxOutline size="16" fill="#01876579" />
      </span>
      <span className="title">{title}</span>
    </div>
  );
}

export default Skills;
