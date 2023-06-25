import "./App.css";
import FlatfileImporter from "flatfile-csv-importer";
FlatfileImporter.setVersion(2);
const licence = "66135292-8eb8-4cc7-8729-224f8e610eaf";

const flatfileConfig = {
  type: "flatfile test",
  fields: [
    {
      label: "destination_name",
      key: "destination_name",
    },
    {
      label: "destination_email",
      key: "destination_email",
    },
    {
      label: "destination_tel",
      key: "destination_tel",
    },
    {
      label: "destination_address",
      key: "destination_address",
    },
    {
      label: "destination_region",
      key: "destination_region",
    },
    {
      label: "destination_locality",
      key: "destination_locality",
    },
    {
      label: "destination_country_id",
      key: "destination_country_id",
    },
    {
      label: "destination_postal_code",
      key: "destination_postal_code",
    },
    {
      label: "quantity",
      key: "quantity",
    },
    {
      label: "length",
      key: "length",
    },
  ],
  allowInvalidSubmit: true,
  managed: true,
  disableManualInput: false
};

const importer = new FlatfileImporter(licence, flatfileConfig);
importer.setCustomer({
  userId: "1234",
})

const launchFlatfile = () => {
  importer.requestDataFromUser()
    .then((results) => {
      importer.displayLoader();
      setTimeout(() => {
        importer.displaySuccess("Success!");
        console.log(results);
      }, 2000);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};




function App() {
  return (
    <div className="App">
     <button className="flatfile_button" onClick={launchFlatfile}>launchFlatfile</button>
    </div>
  );
}

export default App;
