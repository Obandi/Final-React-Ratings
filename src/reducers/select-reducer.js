export default function (state=[
        {
          uid: 1,
          name: "Bob",
          starbox:[],
          rating: 0,
          total: 0,
          average: 0,
          totalRating: 0,
          maxrating: 5
        },
        {
          uid:2,
          name: "Joe",
          starbox: [],
          rating: 0,
          total: 0,
          average: 0,
          totalRating: 0,
          maxrating: 5
        }
      ], action) {

  switch(action.type){
    case 'RATING_SELECTED':
      let myNewState = state.map((item) =>{
        let newItem;
        if(item.uid == action.payload[0]){
            newItem = Object.assign({}, item);
            newItem.rating =action.payload[1];
            newItem.total = parseInt(newItem.total) + 1;
            newItem.totalRating = parseInt(newItem.totalRating) + parseInt(newItem.rating);
            newItem.average = parseFloat(newItem.totalRating)/parseFloat(newItem.total);
          } else {
            newItem = Object.assign({}, item);
          }

        return (newItem);
      });
      return myNewState;
    default:
      return state;
    }
}
