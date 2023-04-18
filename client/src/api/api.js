import { extractFormat } from "../Utils/extractFormat";
import { edibleFormat } from "../Utils/edibleFormat";

// Extracts
export async function getExtracts() {
  try {
    const response = await fetch(
      "https://api.otreeba.com/v1/extracts?count=15&sort=-createdAt"
    );
    const data = await response.json();
    let id = 1;

    let updatedExtracts = [];

    for (let i = 0; i < data.data.length; i++) {
      const extract = {
        id: id++,
        imgNum: extractFormat[i].imgNum,
        name: data.data[i].name,
        breeder: extractFormat[i].breeder,
        type: extractFormat[i].type,
        thc: extractFormat[i].thc,
        cbd: extractFormat[i].cbd,
        price: extractFormat[i].price,
      };

      updatedExtracts.push(extract);
    }

    return updatedExtracts;
  } catch (err) {
    return err.message;
  }
}

// Extracts
export async function getEdibles() {
  try {
    const response = await fetch(
      "https://api.otreeba.com/v1/edibles?count=15&sort=-createdAt"
    );
    const data = await response.json();

    let updatedEdibles = [];
    let id = 1;

    for (let i = 0; i < data.data.length; i++) {
      const edible = {
        id: id++,
        name: edibleFormat[i].name,
        breeder: edibleFormat[i].breeder,
        type: edibleFormat[i].type,
        thc: edibleFormat[i].thc,
        cbd: edibleFormat[i].cbd,
      };

      updatedEdibles.push(edible);
    }

    return updatedEdibles;
  } catch (err) {
    return err.message;
  }
}
