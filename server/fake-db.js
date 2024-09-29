const Product = require("./model/product");

class FakeDb {
  constructor() {
    this.products = [
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone XL",
        price: 799,
        description: "A large phone with one of the best screens",
        heading1: "Phone XLのheading1だよ",
        heading2: "Phone XLのheading2だよ",
        heading3: "Phone XLのheading3だよ",
        headingText1: "サンプルテキスト1",
        headingText2: "サンプルテキスト2",
        headingText3: "サンプルテキスト3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Mini",
        price: 699,
        description: "A great phone with one of the best cameras",
        heading1: "Phone Miniのheading1だよ",
        heading2: "Phone Miniのheading2だよ",
        heading3: "Phone Miniのheading3だよ",
        headingText1: "サンプルテキスト1",
        headingText2: "サンプルテキスト2",
        headingText3: "サンプルテキスト3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone Standard",
        price: 299,
        description: "これはStandardクラスのIphoneです!!!!",
        heading1: "Phone Standardのheading1だよ",
        heading2: "Phone Standardのheading2だよ",
        heading3: "Phone Standardのheading3だよ",
        headingText1: "サンプルテキスト1",
        headingText2: "サンプルテキスト2",
        headingText3: "サンプルテキスト3",
      },
      {
        coverImage: "./assets/img/phone-cover.jpg",
        name: "Phone SE Plus",
        price: 999,
        description: "説明です。",
        heading1: "Phone SE Plusのheading1だよ",
        heading2: "Phone SE Plusのheading2だよ",
        heading3: "Phone SE Plusのheading3だよ",
        headingText1: "サンプルテキスト1",
        headingText2: "サンプルテキスト2",
        headingText3: "サンプルテキスト3",
      },
    ];
  }

  async initDb() {
    await this.cleanDb();
    this.pushProductsToDb();
  }

  async cleanDb() {
    await Product.deleteMany({});
  }

  pushProductsToDb() {
    this.products.forEach((product) => {
      const newProduct = new Product(product);
      newProduct.save();
    });
  }
}

module.exports = FakeDb;
