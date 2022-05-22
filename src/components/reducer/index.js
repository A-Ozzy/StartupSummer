const initialState = {
   data: [],
   loading: false,
   error: null,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case 'DATA_REQUESTED':
         return {
            data: [],
            loading: true,
            error: null,
         };
      case 'DATA_LOADED':
         return {
            data: action.payload,
            loading: false,
            error: null,
         };
      case 'DATA_ERROR':
         return {
            data: [],
            loading: false,
            error: action.payload,

         }
      default:
         return state;
   }
};

export default reducer;