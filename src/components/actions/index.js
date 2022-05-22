const dataLoaded = (newData) => {
   return {
      type: 'DATA_LOADED',
      payload: newData,
   };
};

const dataRequested = () => {
   return {
      type: 'DATA_REQUESTED',
   }
}

const dataError = (error) => {
   return {
      type: 'DATA_ERROR',
      payload: error,
   };
};


export {
   dataRequested,
   dataLoaded,
   dataError

};