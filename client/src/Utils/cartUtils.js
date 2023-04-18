import stripeFlowerData from "../json/flower.json";
import stripeExtractData from "../json/extracts.json";

class CartUtils {
  constructor() {}

  // Matches selected user item with stripe product item -> adds stripe price
  matchItemWithStipeDataFlower(selectedItem) {
    let stripeReadyItem = {};

    for (let i = 0; i < stripeFlowerData.length; i++) {
      // console.log(stripeFlowerData[i].products);
      if (
        stripeFlowerData[i].name.toLowerCase() ===
        selectedItem.name.toLowerCase()
      ) {
        // Loop throw nested stripe items and get price by weight
        for (let j = 0; j < stripeFlowerData[i].products.length; j++) {
          if (
            stripeFlowerData[i].products[j].weight.toLowerCase() ===
            selectedItem.weight.toLowerCase()
          )
            stripeReadyItem = {
              stripePrice: stripeFlowerData[i].products[j].price,
              ...selectedItem,
            };
        }
      }
    }

    return stripeReadyItem;
  }

  // Matches selected extract item with stipe product data
  matchItemWithStipeDataExtract(selectedItem) {
    let formattedStripeProduct = {};

    for (let i = 0; i < stripeExtractData.length; i++) {
      if (
        selectedItem.name.toLowerCase() ===
        stripeExtractData[i].name.toLowerCase()
      ) {
        formattedStripeProduct = {
          stripePrice: stripeExtractData[i].price,
          ...selectedItem,
        };
      }
    }
    return formattedStripeProduct;
  }

  // Retrieve Flower information
  getFlowerInfo(evt) {
    // Order Information
    const id = evt.target.parentNode.parentNode.parentNode.childNodes[0].id;

    const orderBreeder =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1]
        .childNodes[0].innerText;
    const orderName =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1]
        .childNodes[1].innerText;
    const orderThcLevel =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[1].childNodes[2].innerText.replace(
        "\n\n",
        ""
      );
    const orderWeight = evt.target.childNodes[0].innerText;
    const orderPrice = evt.target.childNodes[1].innerText.slice(1);

    const img =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].childNodes[0]
        .src;

    // Customer chosen order
    const order = {
      id: +id,
      img: img,
      breeder: orderBreeder,
      name: orderName,
      thcLevel: orderThcLevel,
      weight: orderWeight,
      price: +orderPrice,
      quantity: 1,
    };

    const stripeMatch = this.matchItemWithStipeDataFlower(order);

    return stripeMatch;
  }

  // Retrieve Single Price items (edibles / Extracts / Vaporizers)
  getSingleItems(evt) {
    const target = evt.currentTarget;

    const id = target.parentNode.childNodes[0].id;
    const weight =
      target.parentNode.childNodes[1].childNodes[0].innerText.replace(" -", "");
    const price =
      target.parentNode.childNodes[1].childNodes[1].innerText.replace("$", "");

    const breeder =
      target.parentNode.childNodes[0].childNodes[1].childNodes[0].innerText;
    const name =
      target.parentNode.childNodes[0].childNodes[1].childNodes[1].innerText;
    let thcLevel =
      target.parentNode.childNodes[0].childNodes[1].childNodes[2].innerText
        .split("T")
        .join(" T")
        .split("CBD")
        .join(" CDB");

    const item = {
      id: +id,
      weight: weight,
      price: +price,
      breeder: breeder,
      name: name,
      thcLevel: thcLevel,
      quantity: 1,
    };

    return item;
  }

  deleteItemInfo(evt) {
    const id =
      evt.target.parentNode.parentNode.parentNode.parentNode.parentNode
        .parentNode.id;

    const itemName =
      evt.target.parentNode.parentNode.parentNode.childNodes[0].innerText.split(
        " |"
      )[0];

    const breeder =
      evt.target.parentNode.parentNode.parentNode.childNodes[1].innerText;

    const weight =
      evt.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[0]
        .innerText;

    const price =
      evt.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[4].innerText.replace(
        "$",
        ""
      );

    const selectedItem = {
      id: +id,
      name: itemName,
      breeder: breeder,
      weight: weight,
      price: +price,
    };

    return selectedItem;
  }
}

export default CartUtils;
