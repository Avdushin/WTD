import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
  icon: IconDefinition;
  label: string;
}

const Icon: React.FC<IconProps> = ({ icon, label }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
      <span>{label}</span>
    </div>
  );
};

export default Icon;
