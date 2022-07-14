export default {
  upadateFeatureArray(state, feature) {
    let featureArr = state;
    if(featureArr.includes(feature)){
      for (var i = 0; i < featureArr.length; i++) {
        if (featureArr[i] === feature) {
            featureArr.splice(i, 1);
        }
      }
    }else{
      featureArr.push(feature);
    }
    return featureArr;
  },

  upadateSettings(state, feature) {
    let featureArr = state;
    if(featureArr.includes(feature)){
      for (var i = 0; i < featureArr.length; i++) {
        if (featureArr[i] === feature) {
            featureArr.splice(i, 1);
        }
      }
    }else{
      featureArr.push(feature);
    }
    return featureArr;
  },
};
