/** @format */
import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.card.card.info;
  console.log(resData);

  return (
    <div className='card'>
      <div className='res-card'>
        <img
          className='res-logo'
          alt='res-logo'
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h3>{cuisines.join(" ")}</h3>

        <h3>{avgRating}</h3>
        <h3>{costForTwo}</h3>
      </div>
    </div>
  );
};
export default RestroCard;
