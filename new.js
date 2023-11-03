const state = {
    "1st": {
        "1": {
            "Big": 23,
            "Small": 78
        },
        "6": {
            "Odd": 100,
            "Even": 100
        },
        "23": {
            "P": 100,
            "C": 100
        }
    },
    "2nd": {
        "2": {
            "Big": 100,
            "Small": 100
        },
        "7": {
            "Odd": 100,
            "Even": 100
        },
        "24": {
            "P": 100,
            "C": 100
        }
    },
    "3rd": {
        "3": {
            "Big": 100,
            "Small": 100
        },
        "8": {
            "Odd": 100,
            "Even": 100
        },
        "25": {
            "P": 100,
            "C": 100
        }
    },
    "4th": {
        "4": {
            "Big": 100,
            "Small": 100
        },
        "9": {
            "Odd": 100,
            "Even": 100
        },
        "26": {
            "P": 100,
            "C": 100
        }
    },
    "5th": {
        "5": {
            "Big": 100,
            "Small": 100
        },
        "10": {
            "Odd": 100,
            "Even": 100
        },
        "27": {
            "P": 100,
            "C": 100
        }
    },
    "Sum": {
        "14": {
            "Dragon": 100,
            "Tiger": "10"
        },
        "21": {
            "Big": 100,
            "Small": 100
        },
        "22": {
            "Odd": 100,
            "Even": 100
        }
    }
}
  
//   function transformBets(state) {
//     const bets = [];
    
//     for (let place in state) {
//       const gameBets = state[place];
      
//       for (let bet in gameBets) {
//         const amount = gameBets[bet];
        
//         bets.push({
//           allSelections: [bet], 
//           betId: "12-3387216-834",
//           // other fields
//           gameId: place,
//           userSelections: `${place} ${bet}`,
//           totalBetAmt: amount
//         });
//       }
//     }
    
//     return bets;
//   }
  
//   const result = transformBets(state);
  
//   console.log(result);

const roadBetSelections = {
    "1st": {
      "1": {
        "Big": 100,
        "Small": 100,
      },
      "6": {
        "Odd": 100,
        "Even": 100,
      },
      "23": {
        "P": 100,
        "C": 100,
      },
    },
    "2nd": {
      "2": {
        "Big": 100,
        "Small": 100,
      },
      "7": {
        "Odd": 100,
        "Even": 100,
      },
      "24": {
        "P": 100,
        "C": 100,
      },
    },
    "3rd": {
      "3": {
        "Big": 100,
        "Small": 100,
      },
      "8": {
        "Odd": 100,
        "Even": 100,
      },
      "25": {
        "P": 100,
        "C": 100,
      },
    },
    "4th": {
      "4": {
        "Big": 100,
        "Small": 100,
      },
      "9": {
        "Odd": 100,
        "Even": 100,
      },
      "26": {
        "P": 100,
        "C": 100,
      },
    },
    "5th": {
      "5": {
        "Big": 100,
        "Small": 100,
      },
      "10": {
        "Odd": 100,
        "Even": 100,
      },
      "27": {
        "P": 100,
        "C": 100,
      },
    },
    "Sum": {
      "14": {
        "Dragon": 100,
        "Tiger": "10",
      },
      "21": {
        "Big": 100,
        "Small": 100,
      },
      "22": {
        "Odd": 100,
        "Even": 100,
      },
    },
  };

  function processRoadBetSelections (roadBetSelections)  {
    const results = [];
  
    for (const place in roadBetSelections) {
      const selectedGamePlaces = roadBetSelections[place];
        console.log(selectedGamePlaces)
      for (const gn_id in selectedGamePlaces) {
        const userSelections = selectedGamePlaces[gn_id];
  
        for (const userSelection in userSelections) {
          const value = userSelections[userSelection];
  
          results.push({
            betId: "12-3387216-834",
            allSelections: [userSelection],
            totalBetAmt: Number(value),
            game_label: place,
            uid: results.length + 1,
            bet_date: "12/01/12",
            bet_time: "12:10",
            game_label: `${place} ${Object.keys(userSelections)[0]}/${Object.keys(userSelections)[1]}`,
            totalBets: 1,
            lottery_id: 1,
            unitStaked: 1,
            gameId: Number(gn_id),
            userSelections: `${place} ${Object.keys(userSelections)[0]}/${Object.keys(userSelections)[1]} ${userSelection}`,
          });
        }
      }
    }
  
    return results;
  };
  
  const processedData = processRoadBetSelections(state);
  console.log(processedData);
  