import * as React from "react";

interface Props {}

const SocialMedia: React.FC<Props> = ({}) => {
  return (
    <div className="sm-wrapper grid grid-cols-5 text-sm mt-10">
      <div className="icon facebook relative bg-white">
        <div className="tooltip">Facebook</div>
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
      </div>
      <div className="icon twitter">
        <div className="tooltip">Twitter</div>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </div>
      <div className="icon instagram">
        <div className="tooltip">Instagram</div>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
      </div>
      <div className="icon github">
        <div className="tooltip">Github</div>
        <span>
          <i className="fab fa-github"></i>
        </span>
      </div>
      <div className="icon youtube">
        <div className="tooltip">Youtube</div>
        <span>
          <i className="fab fa-youtube"></i>
        </span>
      </div>
    </div>
  );
};

export default SocialMedia;
