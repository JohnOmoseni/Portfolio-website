import { IoMdCheckboxOutline } from "react-icons/io";

function Skills({ title, heading, skills }) {
  return (
    <li>
      {skills && <h3 className="head">{heading}</h3>}

      <div className="skill">
        {!skills && (
          <>
            <span className="icon">
              <IoMdCheckboxOutline size="16" fill="#01876579" />
            </span>
            <span className="title">{title}</span>
          </>
        )}
        {skills && skills.map((skill, idx) => <span key={idx}>{skill} </span>)}
      </div>
    </li>
  );
}

export default Skills;
