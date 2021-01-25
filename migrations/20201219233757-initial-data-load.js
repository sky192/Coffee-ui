/* eslint-disable no-unused-vars */
/* eslint-disable max-len */


module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.bulkInsert('coffees', [
      {
        title: 'Black',
        description: 'Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.',

      }, {
        title: 'Latte',
        description: 'As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.',

      }, {
        title: 'Cappuccino',
        description: 'Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.',

      }, {
        title: 'Americano',
        description: 'With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.',

      }, {
        title: 'Espresso',
        description: 'An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.',

      }, {
        title: 'Doppio',
        description: 'A double shot of espresso, the doppio is perfect for putting extra pep in your step.',

      }, {
        title: 'Cortado',
        description: 'Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso’s acidity.',

      }, {
        title: 'Red Eye',
        description: 'Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.',

      }, {
        title: 'Galão',
        description: 'Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.',

      }, {
        title: 'Lungo',
        description: 'A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.',

      }, {
        title: 'Macchiato',
        description: 'The macchiato is another espresso-based drink that has a small amount of foam on top. It’s the happy medium between a cappuccino and a doppio.',

      }

    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('coffees')
  }
}
