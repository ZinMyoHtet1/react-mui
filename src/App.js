import "./App.css";
import MuiAccordion from "./components/Accordin/MuiAccordion";
import MuiBotNav from "./components/BottomNavigator/MuiBotNav";
// import MuiAppBar from "./components/Layouts/MuiAppBar";
import MuiCard from "./components/Layouts/MuiCard";
import MuiDrawer from "./components/Layouts/MuiDrawer";
// import MuiAutocomplete from "./components/Autocomplete/MuiAutocomplete";
// import MuiGrid from "./components/Layouts/MuiGrid";
import MuiSpeedDial from "./components/Layouts/MuiSpeedDial";
import MuiAvatar from "./components/Media/MuiAvatar";
import MuiBadge from "./components/Media/MuiBadge";
import MuiImageList from "./components/Media/MuiImageList";
import MuiBreadcrumbs from "./components/Menu/MuiBreadcrumbs";
import MuiMenu from "./components/Menu/MuiMenu";
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
      <MuiBotNav />
      <MuiDrawer />
      {/* <MuiToggleButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox /> */}
      {/* <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete /> */}
      <MuiMenu />
      {/* <MuiGrid /> */}
      <MuiAccordion />
      <MuiImageList />
      <MuiSpeedDial />
      <MuiBreadcrumbs />
      <MuiAvatar />
      <MuiBadge />
    </div>
  );
}

export default App;
