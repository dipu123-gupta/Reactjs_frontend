import React from "react";


const Items = ({Items, bought, handalOnChangeButton}) => {
  return (
    <div>
      {" "}
      <li  className={`list-group-item food-item ${bought && 'active'} `}>
        {Items}
        <button className="btn btn-info button1" onClick={handalOnChangeButton}>Bay</button>
      </li>
    </div>
  );
};

export default Items;
