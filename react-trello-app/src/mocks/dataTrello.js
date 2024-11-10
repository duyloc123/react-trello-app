// export const dataTrello = [
//   {
//     id: 'list1',
//     title: 'list1',
//     cards: [
//       {
//         id: 'card1',
//         title: 'card1'
//       },
//       {
//         id: 'card2',
//         title: 'card2'
//       }
//     ]
//   },
//   {
//     id: 'list2',
//     title: 'list2',
//     cards: [
//       {
//         id: 'card2',
//         title: 'card2'
//       }
//     ]
//   }
// ];

/* 
drag drop list: listId
1. find index of listId -> loop array
2. splice array

drag drop card in same list: listId, cardId
1. find index of listId -> loop array
2. find index of cardId -> loop array cards
3. splice array cards

drag drop card in different list: listIdSource, listIdDesination cardId
1. find index of listIdSource -> loop array
2. find index of listIdDesination -> loop array array
3. loop card source in list source -> splice card source
4. loop card source in list destination -> insert
*/

// hash object
export const dataTrello = {
  columns: ['list1', 'list2', 'list3'],
  lists: {
    list1: {
      id: 'list1',
      title: 'list1',
      cards: ['card1', 'card2']
    },
    list2: {
      id: 'list2',
      title: 'list2',
      cards: ['card3']
    },
    list3: {
      id: 'list3',
      title: 'list3',
      cards: []
    }
  },
  cards: {
    card1: {
      id: 'card1',
      title: 'card1'
    },
    card2: {
      id: 'card2',
      title: 'card2'
    },
    card3: {
      id: 'card3',
      title: 'card3'
    }
  }
}

/* 
drag drop list
1. find index list in columns -> loop
2. splice

drag drop card in same list: list1
1. get card of list1 -> dataTrello.list['list1'].cards
2. find index card in cards -> loop
3. splice

drag drop card in differece list: list1, list2
1. get card of list1 -> dataTrello.list['list1'].cards
2. get card of list2 -> dataTrello.list['list2'].cards
3. splice card in list1 -> loop
4. insert card in list2 -> loop

*/