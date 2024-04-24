import "./App.css";
import MuiAccordion from "./components/Accordin/MuiAccordion";
import MuiAppBar from "./components/Layouts/MuiAppBar";
import MuiCard from "./components/Layouts/MuiCard";
// import MuiAutocomplete from "./components/Autocomplete/MuiAutocomplete";
import MuiGrid from "./components/Layouts/MuiGrid";
import MuiImageList from "./components/Media/MuiImageList";
// import MuiRating from "./components/Rating/MuiRating";
// import MuiSwitch from "./components/Switches/MuiSwitch";
// import MuiCheckbox from "./components/Buttons/MuiCheckbox";
// import MuiRadioButton from "./components/Buttons/MuiRadioButton";
// import MuiToggleButton from "./components/Buttons/MuiToggleButton";
// import MuiSelect from "./components/Text/MuiSelect";
// import MuiTextField from "./components/Text/MuiTextField";

function App() {
  return (
    <div className="App">
      <MuiCard />
      <h1>Welcome to my web</h1>
      <MuiAppBar />

      {/* <MuiToggleButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox /> */}
      {/* <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete /> */}
      <MuiGrid />
      <MuiAccordion />
      <MuiImageList />
    </div>
  );
}

export default App;
