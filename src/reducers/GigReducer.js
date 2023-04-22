export const INITIAL_STATE = {
  userId: JSON.parse(localStorage.getItem("currentUser"))?._id,
  title: "",
  cat: "",
  cover: "",
  imageSlide1: "",
  imageSlide2: "",
  imageSlide3: "",
  desc: "",
  shortTitle: "",
  shortDesc: "",
  deliveryTime: 0,
  revisionNumber: 0,
  feature1: "",
  feature2: "",
  feature3: "",
  feature4: "",
  price: 0,
};

export const gigReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "ADD_IMAGES":
      return {
        ...state,
        cover: action.payload.cover,
        imageSlide1: action.payload.imageSlide1,
        imageSlide2: action.payload.imageSlide2,
        imageSlide3: action.payload.imageSlide3,
      };
    default:
      return state;
  }
};
