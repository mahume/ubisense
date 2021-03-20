type ProductType = "engines" | "workstations";

export const fetchProduct = async (product: ProductType) => {
  const response: Response = await fetch(
    `https://ubisense-takehome-api.netlify.app/.netlify/functions/${product}`
  );
  const output = await response.json();
  console.log(output);
  return output;
};
