const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

//   Adicionar transações

  function createTransaction(transaction){
      user.transactions.push(transaction);
      if(transaction.type == 'credit'){
          user.balance = user.balance + transaction.value
      }else if(transaction.type == 'debit'){
          user.balance = user.balance - transaction.value
      }
  }

    createTransaction({ type: "credit", value: 50 });
    createTransaction({ type: "credit", value: 120 });
    createTransaction({ type: "debit", value: 80 });
    createTransaction({ type: "debit", value: 30 });
  
  
    //   console.log(user);



    

//   Relatórios

    function getHigherTransactionByType(type){
        let higher = 0;
        let pos = 0;
        for(let i=0;i<user.transactions.length;i++){
            if(user.transactions[i].type == type && higher<user.transactions[i].value){
                higher = user.transactions[i].value;
                pos = i;
            }
        }
        return console.log(user.transactions[pos]);
    }

    console.log(user.balance); // 60

    getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
    getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }


    function getAverageTransactionValue(){
        let avarage = 0;
        for (let transaction of user.transactions){
            avarage = avarage + transaction.value
        }
        avarage = avarage / user.transactions.length
        return console.log(avarage);
    }

    getAverageTransactionValue();

    function getTransactionsCount(){
        let counterC = 0;
        let counterD = 0;
        for(let transaction of user.transactions){
            if(transaction.type == 'credit'){
                counterC ++;
            }else{
                counterD++
            }
        }
        return console.log({
            credit: counterC,
            debit: counterD
        })
    }


    getTransactionsCount();


