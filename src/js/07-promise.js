{
  const promise = new Promise((resolve, reject) => {
    const canFulfille = Math.random() > 0.5;
    setTimeout(() => {
      if (canFulfille) {
        resolve('promise виконан успішно');
      }

      reject('Promise виконан з помилкою');
    }, 1000);
  });

  // console.log(promise);

  promise.then(onFulfilled, onRejected);

  function onFulfilled(result) {
    console.log(`onFulfilled: ${result}`);
  }

  function onRejected(error) {
    console.log(`onRejected: ${error}`);
  }
}

{
  /*
   * ланцюжки промісів
   */

  const p = new Promise((resolve, reject) => {
    const canFulfille = Math.random() > 0.5;
    setTimeout(() => {
      if (canFulfille) {
        resolve('promise виконан успішно');
      }
      reject('promise виконан з помилкою');
    }, 2000);
  });

  p.then(result => {
    console.log(result);
    return 10;
  })
    .then(x => {
      console.log(2 * x);
      throw new Error('помилка в другом then'); // кидає помилку і наступні зен не виконуюються
      return 50;
    })
    .then(y => {
      console.log(y * 2);
    })
    .catch(error => {
      // ловить помилки
      console.log(error);
    })
    .finally(() => {
      console.log(`я буду виконан в будь якому випадку`);
    }); // це для того щоб закри ти проміс
}

{
  /*
   * промісифікація функцій
   */

  const makeOrder = dish => {
    return new Promise((resolve, reject) => {
      const DELAY = 3000;
      const passed = Math.random() > 0.5;
      setTimeout(() => {
        if (passed) {
          resolve(`Ось Ваша страва ${dish}`);
        }
        reject(`Перепрошую цієї страви немає ${dish}`);
      }, DELAY);
    });
  };

  makeOrder('Борщ')
    .then(onSuccesOrder)
    .catch(onErrorOrder)
    .finally(() => {
      console.log('Бажаэете що не буть ще?');
    });

  function onSuccesOrder(result) {
    console.log(result);
  }

  function onErrorOrder(result) {
    console.log(result);
  }
}

{
  const fecthPokemonById = id => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json()); // повертає проміс тільки з виконаним результатом
  };

  fecthPokemonById(1).then(onSuccsesPoke).catch(onErrorPoke);
  fecthPokemonById(2).then(onSuccsesPoke).catch(onErrorPoke);
  fecthPokemonById(3).then(onSuccsesPoke).catch(onErrorPoke);

  function onSuccsesPoke(pokemon) {
    console.log(pokemon);
  }

  function onErrorPoke(pokemon) {
    console.log('Цей в блоці catch');
  }
}
