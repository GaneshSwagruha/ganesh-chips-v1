import Papa from "papaparse";

const CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6FlethcFdj2SbCiwobXDiFrvEfvI3cLgP30cSHl1WZWPwFLNAOqpWRJs8Tj4MKBQwJm60wtmXrHeS/pub?gid=0&single=true&output=csv";
export const fetchProducts = async () => {
  try {
    const response = await fetch(CSV_URL);
    const csvText = await response.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          resolve(results.data);
        },
      });
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
