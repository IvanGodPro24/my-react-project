const Product = ({name, imgUrl, price}) => {
  return (
    <div>
      <h2>{name}</h2>
      <img
        src={imgUrl}
        alt={name}
        width="640"
      />
      <p>Price: {price} credits</p>
    </div>
  );
};

export default Product